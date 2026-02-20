import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, message } = body;

    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { error: 'Wszystkie pola są wymagane' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Nieprawidłowy adres email' },
        { status: 400 }
      );
    }

    const formattedMessage = `
Imię i nazwisko: ${name}
Telefon: ${phone}
Email: ${email}

Wiadomość:
${message}
    `.trim();

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        access_key: '8f20ffee-bbc2-45b0-a86a-63701a50a493',
        subject: `Nowe zapytanie z ActiveBHP od ${name}`,
        from_name: name,
        email: email,
        message: formattedMessage,
      }),
    });

    const result = await response.json();

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: 'Wiadomość została wysłana pomyślnie. Skontaktujemy się z Tobą wkrótce!'
      });
    }

    return NextResponse.json(
      { error: 'Błąd wysyłania wiadomości' },
      { status: 400 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Wystąpił błąd podczas wysyłania wiadomości' },
      { status: 500 }
    );
  }
}
