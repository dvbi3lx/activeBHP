import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, message } = body;

    // Validate required fields
    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { error: 'Wszystkie pola są wymagane' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Nieprawidłowy adres email' },
        { status: 400 }
      );
    }

    // Create email content
    const emailContent = `
Nowe zapytanie z formularza kontaktowego ActiveBHP

Dane kontaktowe:
- Imię i nazwisko: ${name}
- Telefon: ${phone}
- Email: ${email}

Wiadomość:
${message}

---
Wiadomość wysłana z formularza kontaktowego na stronie activebhp.pl
    `.trim();

    console.log('[v0] Contact form submission:', { name, phone, email });

    // For now, just log the submission
    // In production, you would integrate with an email service like:
    // - Resend (recommended for Vercel)
    // - SendGrid
    // - AWS SES
    // - Nodemailer with SMTP

    // Example with fetch to a mail service:
    // const response = await fetch('https://api.resend.com/emails', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     from: 'kontakt@activebhp.pl',
    //     to: 'activebhp@activebhp.pl',
    //     subject: `Nowe zapytanie od ${name}`,
    //     text: emailContent
    //   })
    // });

    // Simulate successful email send
    return NextResponse.json(
      { 
        success: true, 
        message: 'Wiadomość została wysłana pomyślnie. Skontaktujemy się z Tobą wkrótce!' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('[v0] Contact form error:', error);
    return NextResponse.json(
      { error: 'Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.' },
      { status: 500 }
    );
  }
}
