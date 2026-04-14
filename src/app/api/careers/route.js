import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const formData = await req.formData();

        const fullName = formData.get('fullName');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const permanentAddress = formData.get('permanentAddress');
        const currentAddress = formData.get('currentAddress');
        const state = formData.get('state');
        const district = formData.get('district');
        const taluk = formData.get('taluk');
        const panchayat = formData.get('panchayat');
        const preferredRole = formData.get('preferredRole');
        const resumeFile = formData.get('resume');
        const recaptchaToken = formData.get('recaptchaToken');

        // 1. Server-side validation
        if (!fullName || !email || !phone || !state || !district || !preferredRole || !resumeFile) {
            return NextResponse.json({ success: false, message: 'Missing required fields.' }, { status: 400 });
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

        // 4. Handle attachment
        const buffer = Buffer.from(await resumeFile.arrayBuffer());

        // 5. Email options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_TO || 'theconnectiveindia@gmail.com',
            subject: `New Career Application: ${fullName} - ${preferredRole}`,
            replyTo: email,
            text: `
                New Application Received:
                
                Name: ${fullName}
                Email: ${email}
                Phone: ${phone}
                Preferred Role: ${preferredRole}
                
                Location Details:
                State: ${state}
                District: ${district}
                Taluk: ${taluk}
                Panchayat: ${panchayat}
                
                Addresses:
                Current: ${currentAddress}
                Permanent: ${permanentAddress}
            `,
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
                    <h2 style="color: #0070f3; border-bottom: 2px solid #0070f3; padding-bottom: 10px;">New Coordinator Application</h2>
                    
                    <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
                        <p><strong>Name:</strong> ${fullName}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Phone:</strong> ${phone}</p>
                        <p><strong>Preferred Role:</strong> ${preferredRole}</p>
                    </div>

                    <h3 style="color: #555;">Location Details</h3>
                    <p><strong>State:</strong> ${state}</p>
                    <p><strong>District:</strong> ${district}</p>
                    <p><strong>Taluk:</strong> ${taluk}</p>
                    <p><strong>Panchayat:</strong> ${panchayat}</p>

                    <h3 style="color: #555;">Addresses</h3>
                    <p><strong>Current Address:</strong><br/>${currentAddress}</p>
                    <p><strong>Permanent Address:</strong><br/>${permanentAddress}</p>
                    
                    <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
                    <footer style="font-size: 0.8em; color: #777;">
                        <p>This application was submitted via the Connective India Careers Page.</p>
                    </footer>
                </div>
            `,
            attachments: [
                {
                    filename: resumeFile.name,
                    content: buffer,
                }
            ]
        };

        // 6. Send the email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Application submitted successfully!' }, { status: 200 });
    } catch (error) {
        console.error('Nodemailer Careers Error:', error);
        return NextResponse.json({ success: false, message: 'Failed to submit application. Please try again later.' }, { status: 500 });
    }
}
