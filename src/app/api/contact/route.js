import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const { name, email, subject, message, recaptchaToken } = await req.json();

        // 1. Server-side validation
        if (!name || name.trim().length < 3) {
            return NextResponse.json({ success: false, message: 'Name must be at least 3 characters.' }, { status: 400 });
        }
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            return NextResponse.json({ success: false, message: 'A valid email address is required.' }, { status: 400 });
        }
        if (!subject || subject.trim().length < 5) {
            return NextResponse.json({ success: false, message: 'Subject must be at least 5 characters.' }, { status: 400 });
        }
        if (!message || message.trim().length < 10) {
            return NextResponse.json({ success: false, message: 'Message must be at least 10 characters.' }, { status: 400 });
        }

        // 2. ReCAPTCHA verification
        const recaptchaResponse = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`, {
            method: 'POST',
        });
        const captchaData = await recaptchaResponse.json();

        if (!captchaData.success) {
            return NextResponse.json({ success: false, message: 'ReCAPTCHA verification failed. Please try again.' }, { status: 400 });
        }

        // 3. Create a transporter object
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // 4. Email options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_TO || 'theconnectiveindia@gmail.com',
            subject: `Contact Form Submission: ${subject}`,
            replyTo: email,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
                    <h2 style="color: #0070f3; border-bottom: 2px solid #0070f3; padding-bottom: 10px;">New Contact Request</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Subject:</strong> ${subject}</p>
                    <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
                    <p><strong>Message:</strong></p>
                    <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message}</div>
                    <footer style="margin-top: 30px; font-size: 0.8em; color: #777;">
                        <p>This email was sent from the Connective India Contact Form.</p>
                    </footer>
                </div>
            `,
        };

        // 5. Send the email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Email sent successfully!' }, { status: 200 });
    } catch (error) {
        console.error('Nodemailer Error:', error);
        return NextResponse.json({ success: false, message: 'Failed to send email. Please try again later.' }, { status: 500 });
    }
}
