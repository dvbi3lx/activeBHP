'use server';

export async function submitContactForm(formData: FormData) {
  try {
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!name || !phone || !email || !message) {
      return { success: false, error: 'Wszystkie pola są wymagane' };
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
    console.error('Contact form error:', error);
    return { success: false, error: 'Wystąpił błąd podczas wysyłania wiadomości' };
  }
}
