'use server';

export async function submitContactForm(formData: FormData) {
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

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: '8f20ffee-bbc2-45b0-a86a-63701a50a493',
        subject: `Nowe zapytanie z ActiveBHP od ${name}`,
        from_name: name,
        email: email,
        message: `Imię i nazwisko: ${name}\nTelefon: ${phone}\nEmail: ${email}\n\nWiadomość:\n${message}`,
      }),
    });

    const result = await response.json();

    if (result.success) {
      return {
        success: true,
        message: 'Wiadomość została wysłana pomyślnie. Skontaktujemy się z Tobą wkrótce!'
      };
    }

    return { success: false, error: 'Błąd podczas wysyłania wiadomości' };
  } catch (error) {
    return { success: false, error: 'Wystąpił błąd. Spróbuj ponownie.' };
  }
}
