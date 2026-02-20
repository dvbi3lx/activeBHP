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

    // Send email via Web3Forms
    const web3FormsResponse = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: '8f20ffee-bbc2-45b0-a86a-63701a50a493',
        subject: `Nowe zapytanie z ActiveBHP od ${name}`,
        from_name: name,
        email: email,
        phone: phone,
        message: message,
        replyto: email,
      }),
    });

    const web3FormsData = await web3FormsResponse.json();

    if (web3FormsData.success) {
      return NextResponse.json(
        { 
          success: true, 
          message: 'Wiadomość została wysłana pomyślnie. Skontaktujemy się z Tobą wkrótce!' 
        },
        { status: 200 }
      );
    } else {
      throw new Error('Web3Forms submission failed');
    }

  } catch (error) {
    console.error('[v0] Contact form error:', error);
    return NextResponse.json(
      { error: 'Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.' },
      { status: 500 }
    );
  }
}
