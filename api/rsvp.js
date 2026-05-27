export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const { name, attending, reception, note } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  const publicKey = process.env.EMAILJS_PUBLIC_KEY;
  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID;
  const privateKey = process.env.EMAILJS_PRIVATE_KEY;
  const recipientEmail = (process.env.RSVP_RECIPIENT_EMAIL || 'piarvi@gmail.com')
    .split(',')
    .map(e => e.trim())
    .filter(Boolean)
    .join(',');

  if (!publicKey || publicKey === 'YOUR_PUBLIC_KEY' || !serviceId || !templateId) {
    console.error('Missing or default EmailJS configuration in environment variables');
    return res.status(500).json({ error: 'Email service is not configured. Please check environment variables.' });
  }

  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        ...(privateKey && { accessToken: privateKey }),
        template_params: {
          guest_name: name,
          attending: attending,
          reception: reception,
          note_for_mateo: note || '(no note)',
          to_email: recipientEmail,
        },
      }),
    });

    if (response.ok) {
      return res.status(200).json({ success: true });
    } else {
      const text = await response.text();
      console.error('EmailJS error response:', text);
      return res.status(500).json({ error: 'Failed to send email via provider' });
    }
  } catch (err) {
    console.error('Server error handling RSVP:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
