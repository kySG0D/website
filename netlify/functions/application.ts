import { Resend } from 'resend';
import { Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
  console.log('🔥 FUNCTION TRIGGERED');

  try {
    const data = JSON.parse(event.body || '{}');

    console.log('📦 RECEIVED DATA:', data);

    const apiKey = process.env['RESEND_API_KEY'];

    console.log('🔑 API KEY EXISTS:', !!apiKey);

    if (!apiKey) {
      console.error('❌ Missing RESEND_API_KEY');
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Missing API key' }),
      };
    }

    const resend = new Resend(apiKey);

    const result = await resend.emails.send({
      from: 'AltaRP <onboarding@resend.dev>',
      to: 'comunidadealta24@gmail.com',
      subject: `Nova candidatura - ${data.name}`,
      html: `
        <h2>Nova candidatura AltaRP</h2>

        <p><b>Steam :</b> ${data.steamId}</p>
        <p><b>Nome :</b> ${data.name}</p>
        <p><b>Email :</b> ${data.email}</p>
        <p><b>Discord :</b> ${data.discord}</p>

        <hr/>

        <p><b>Nome (IC) :</b> ${data.icName}</p>
        <p><b>História (IC) :</b> ${data.icHistory}</p>

        <p><b>Objetivos :</b> ${data.objectives}</p>
        <p><b>Como descobriste o servidor :</b> ${data.howFoundServer}</p>

        <br/>
        <b>#RECEBA , tio mike melhor programador #chatgpt#</b>
      `
    });

    console.log('✅ RESEND RESULT:', result);

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true, result }),
    };

  } catch (error: any) {
    console.error('🔥 FULL ERROR:', error);
    console.error('🔥 MESSAGE:', error?.message);
    console.error('🔥 STACK:', error?.stack);

    return {
      statusCode: 500,
      body: JSON.stringify({
        ok: false,
        message: error?.message,
      }),
    };
  }
};