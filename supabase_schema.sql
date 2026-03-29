-- ==========================================================
-- SUPABASE DATABASE SCHEMA: LOVISSA CONSULTING PORTAL
-- ==========================================================

-- IMPORTANT: This schema is designed for multi-tenancy using Row Level Security (RLS).
-- All core tables include a `tenant_id` column to ensure Professional Firms 
-- (Lawyers, Accountants) only see their own data and their clients' data.

-- --------------------------------------------------------
-- 1. FIRMS / TENANTS (The Law Firms & Accounting Practices)
-- --------------------------------------------------------
CREATE TYPE firm_sector AS ENUM ('law_firm', 'accounting');

CREATE TABLE public.firms (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    sector firm_sector NOT NULL,
    contact_email VARCHAR(255),
    contact_phone VARCHAR(50),
    website VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- --------------------------------------------------------
-- 2. USERS (Staff of the Firms)
-- --------------------------------------------------------
-- Links to Supabase Auth (`auth.users`)
CREATE TYPE user_role AS ENUM ('admin', 'staff', 'read_only');

CREATE TABLE public.users (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    tenant_id UUID NOT NULL REFERENCES public.firms(id) ON DELETE CASCADE,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    role user_role DEFAULT 'staff'::user_role NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- --------------------------------------------------------
-- 3. CLIENTS (The Customers of the Professional Firms)
-- --------------------------------------------------------
CREATE TYPE client_status AS ENUM ('active', 'inactive', 'prospective');

CREATE TABLE public.clients (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID NOT NULL REFERENCES public.firms(id) ON DELETE CASCADE,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255),
    phone VARCHAR(50),
    company_name VARCHAR(255), -- For accounting B2B clients
    status client_status DEFAULT 'active'::client_status NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- --------------------------------------------------------
-- 4. MATTERS / CASES (Law Firm Specific)
-- --------------------------------------------------------
CREATE TYPE matter_status AS ENUM ('open', 'in_progress', 'pending_client', 'closed');

CREATE TABLE public.matters (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID NOT NULL REFERENCES public.firms(id) ON DELETE CASCADE,
    client_id UUID NOT NULL REFERENCES public.clients(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    matter_type VARCHAR(100), -- e.g., 'Corporate Mergers', 'Family Law'
    status matter_status DEFAULT 'open'::matter_status NOT NULL,
    assigned_user_id UUID REFERENCES public.users(id) ON DELETE SET NULL,
    opened_date DATE DEFAULT CURRENT_DATE,
    closed_date DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- --------------------------------------------------------
-- 5. ACCOUNTS / FINANCIAL RECORDS (Accounting Specific)
-- --------------------------------------------------------
CREATE TYPE account_status AS ENUM ('pending_documents', 'processing', 'filed', 'audited');

CREATE TABLE public.accounts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID NOT NULL REFERENCES public.firms(id) ON DELETE CASCADE,
    client_id UUID NOT NULL REFERENCES public.clients(id) ON DELETE CASCADE,
    fiscal_year INT NOT NULL,
    account_type VARCHAR(100), -- e.g., 'Corporate Tax', 'Payroll', 'Annual Return'
    status account_status DEFAULT 'pending_documents'::account_status NOT NULL,
    assigned_user_id UUID REFERENCES public.users(id) ON DELETE SET NULL,
    filing_deadline DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- --------------------------------------------------------
-- 6. ENQUIRIES / LEADS (Dashboard Metrics)
-- --------------------------------------------------------
CREATE TYPE enquiry_source AS ENUM ('website', 'referral', 'chat_widget', 'direct');
CREATE TYPE enquiry_status AS ENUM ('new', 'contacted', 'qualified', 'converted', 'lost');

CREATE TABLE public.enquiries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID NOT NULL REFERENCES public.firms(id) ON DELETE CASCADE,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255),
    phone VARCHAR(50),
    message TEXT,
    source enquiry_source DEFAULT 'website'::enquiry_source,
    status enquiry_status DEFAULT 'new'::enquiry_status NOT NULL,
    assigned_user_id UUID REFERENCES public.users(id) ON DELETE SET NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- --------------------------------------------------------
-- 7. DEADLINES / TASKS (Shared by both sectors)
-- --------------------------------------------------------
CREATE TYPE priority_level AS ENUM ('low', 'medium', 'high', 'urgent');
CREATE TYPE task_status AS ENUM ('todo', 'in_progress', 'completed');

CREATE TABLE public.deadlines (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID NOT NULL REFERENCES public.firms(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    due_date DATE NOT NULL,
    priority priority_level DEFAULT 'medium'::priority_level NOT NULL,
    status task_status DEFAULT 'todo'::task_status NOT NULL,
    related_matter_id UUID REFERENCES public.matters(id) ON DELETE CASCADE, -- Only set if Law Firm
    related_account_id UUID REFERENCES public.accounts(id) ON DELETE CASCADE, -- Only set if Accounting
    assigned_user_id UUID REFERENCES public.users(id) ON DELETE SET NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ==========================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==========================================================
-- Enable RLS on all tables
ALTER TABLE public.firms ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.matters ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.deadlines ENABLE ROW LEVEL SECURITY;

-- Create policy functions to securely look up the current user's tenant_id
CREATE OR REPLACE FUNCTION auth.tenant_id() RETURNS UUID AS $$
  SELECT tenant_id FROM public.users WHERE id = auth.uid() LIMIT 1;
$$ LANGUAGE sql STABLE;

-- Apply Tenant Isolation Policies (Users can only read/write their own firm's data)
CREATE POLICY "Tenant Isolation on Users" ON public.users FOR ALL USING (tenant_id = auth.tenant_id());
CREATE POLICY "Tenant Isolation on Clients" ON public.clients FOR ALL USING (tenant_id = auth.tenant_id());
CREATE POLICY "Tenant Isolation on Matters" ON public.matters FOR ALL USING (tenant_id = auth.tenant_id());
CREATE POLICY "Tenant Isolation on Accounts" ON public.accounts FOR ALL USING (tenant_id = auth.tenant_id());
CREATE POLICY "Tenant Isolation on Enquiries" ON public.enquiries FOR ALL USING (tenant_id = auth.tenant_id());
CREATE POLICY "Tenant Isolation on Deadlines" ON public.deadlines FOR ALL USING (tenant_id = auth.tenant_id());

-- Firms table policy (Users can only see their own firm's top-level details)
CREATE POLICY "Users can view their own firm details" ON public.firms FOR SELECT USING (id = auth.tenant_id());
