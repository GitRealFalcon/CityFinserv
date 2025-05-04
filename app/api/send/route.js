import { Resend } from "resend";
import { EmailTemplate } from "@/app/components/emails/contactus";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    
    try {
        const clientData = await request.json()
        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: ['monaeem8@gmail.com'],
            subject: clientData.subject,
            react: EmailTemplate({ firstName: clientData.name, message: clientData.message, email: clientData.email }),
        });

        if (error) {
            return NextResponse.json({ error }, { status: 500 });
        }

        
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }

}