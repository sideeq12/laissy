"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.resend_apikey);

export async function sendContactEmail(formData: {
    firstName: string;
    surname: string;
    email: string;
    company: string;
    role: string;
    interest: string;
    problem: string;
}) {
    if (!process.env.resend_apikey) {
        return { error: "API Key is missing" };
    }

    try {
        // 1. Send Personalized Auto-Response to User
        const userEmail = await resend.emails.send({
            from: "Lovissa Consulting <info@lovissaconsulting.co.uk>",
            to: formData.email,
            subject: "Thank you for contacting Lovissa Consulting",
            text: `Hello, ${formData.surname}\n\nThank you for contacting Lovissa Consulting. We’ve received your consultation request and are reviewing your details.\n\nOur team will be in touch shortly to confirm next steps and, if appropriate, schedule a call.\n\nKind regards,\nLovissa Consulting`,
        });

        // 2. Send Notification to Lovissa Consulting
        const notificationEmail = await resend.emails.send({
            from: "Website Leads <info@lovissaconsulting.co.uk>",
            to: "info@lovissaconsulting.co.uk",
            subject: `New Lead: ${formData.firstName} ${formData.surname} (${formData.company})`,
            text: `
                New consultation request received:
                
                Name: ${formData.firstName} ${formData.surname}
                Email: ${formData.email}
                Company: ${formData.company}
                Role: ${formData.role}
                Interested in: ${formData.interest}
                
                Problem description:
                ${formData.problem}
            `,
        });

        if (userEmail.error || notificationEmail.error) {
            return { error: userEmail.error?.message || notificationEmail.error?.message };
        }

        return { success: true };
    } catch (error: any) {
        return { error: error.message || "Failed to send email" };
    }
}
