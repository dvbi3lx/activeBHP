'use server';

export async function submitContactForm(formData: FormData) {
  console.log('[v0] Contact form action called');
  
  try {
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    console.log('[v0] Form data:', { name, phone, email, messageLength: message?.length });

    // Validate required fields
    if (!name || !phone || !email || !message) {
      console.log('[v0] Validation failed: missing fields');
      return { 
        success: false, 
        error: 'Wszystkie pola są wymagane' 
      };
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('[v0] Validation failed: invalid email');
      return { 
        success: false, 
        error: 'Nieprawidłowy adres email' 
      };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { success: false, error: 'Nieprawidłowy adres email' };
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
      return {
        success: true,
        message: 'Wiadomość została wysłana pomyślnie. Skontaktujemy się z Tobą wkrótce!'
      };
    }

    return { success: false, error: 'Błąd wysyłania wiadomości' };

  } catch (error) {
    console.error('[v0] Contact form error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('[v0] Error message:', errorMessage);
    return {
      success: false,
      error: `Błąd: ${errorMessage}`,
    };
  }
}
}
