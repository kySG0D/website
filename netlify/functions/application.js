import { Resend } from 'resend';

export const handler = async (event) => {
  console.log('🔥 FUNCTION TRIGGERED 999');

  const apiKey = process.env.RESEND_API_KEY;

  console.log('🧪 DEBUG KEY EXISTS:', !!apiKey);

  if (!apiKey) {
    console.error('❌ Missing RESEND_API_KEY');
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Missing API key' })
    };
  }

  const data = JSON.parse(event.body || '{}');

  const resend = new Resend(apiKey);

  try {
    const result = await resend.emails.send({
      from: 'AltaRP <onboarding@resend.dev>',
      to: 'comunidadealta24@gmail.com',
      subject: `Nova candidatura - ${data.name}`,
      html: `
        <h2>Nova candidatura AltaRP</h2>

        <p><b>Steam :</b> ${data.steamId}</p>
        <p><b>Nome :</b> ${data.name}</p>
        <p><b>Email :</b> ${data.email}</p>
        <p><b>Discord (username) :</b> ${data.discord}</p>

        <hr/>

        <h3>Personagem</h3>

        <p><b>Nome (IC) :</b> ${data.icName}</p>
        <p><b>História (IC) :</b> ${data.icHistory}</p>

        <p><b>Objetivos no ALTA RP :</b> ${data.objectives}</p>
        <p><b>Como descobriste o servidor :</b> ${data.howFoundServer}</p>

        <br/>
        <small>#RECEBA , tio mike melhor programador #chatgpt#</small>
      `
    });

    console.log('✅ RESEND RESULT:', result);

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true, result })
    };

  } catch (error) {
    console.error('🔥 FULL ERROR:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        ok: false,
        message: error.message
      })
    };
  }
};