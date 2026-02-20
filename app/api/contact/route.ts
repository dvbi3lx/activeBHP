import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

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

    // Prepare data for Web3Forms
    const formData = {
      access_key: '8f20ffee-bbc2-45b0-a86a-63701a50a493',
      subject: `Nowe zapytanie z ActiveBHP od ${name}`,
      from_name: name,
      email: email,
      message: `
Imię i nazwisko: ${name}
Telefon: ${phone}
Email: ${email}

Wiadomość:
${message}
      `.trim(),
    };

    console.log('[v0] Sending to Web3Forms:', formData);

    // Send email via Web3Forms
    const web3FormsResponse = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const web3FormsData = await web3FormsResponse.json();
    
    console.log('[v0] Web3Forms response:', web3FormsData);

    if (web3FormsData.success) {
      return NextResponse.json(
        { 
          success: true, 
          message: 'Wiadomość została wysłana pomyślnie. Skontaktujemy się z Tobą wkrótce!' 
        },
        { status: 200 }
      );
    } else {
      console.error('[v0] Web3Forms error:', web3FormsData);
      return NextResponse.json(
        { error: web3FormsData.message || 'Błąd wysyłania wiadomości' },
        { status: 400 }
      );
    }

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('[v0] Contact form error:', errorMessage, error);
    return NextResponse.json(
      { error: `Wystąpił błąd: ${errorMessage}` },
      { status: 500 }
    );
  }
}
