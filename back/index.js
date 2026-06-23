import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Resend } from 'resend';

dotenv.config();

const app = express();

app.use(cors({
  origin: [
    'http://localhost:4200',
    'https://altarp.pt'
  ],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));
app.options(/.*/, cors());
app.use(express.json());
console.log('key - ',process.env.RESEND_API_KEY)
const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/application', async (req, res) => {
  const data = req.body;

  try {
    const result = await resend.emails.send({
      from: 'AltaRP <onboarding@resend.dev>',
      to: 'comunidadealta24@gmail.com',
      subject: `Nova candidatura - ${data.name}`,
      html: `
        <h2>Nova candidatura AltaRP</h2>

        



        <p><b>Steam : </b> ${data.steamId}</p>
        <p><b>Nome : </b> ${data.name}</p>
        <p><b>Email : </b> ${data.email}</p>
        <p><b>Discord (username) : </b> ${data.discord}</p>

        ----- Personagem -----

        <p><b>Nome (IC) : </b> ${data.icName}</p>
        <p><b>História (IC) : </b> ${data.icHistory}</p>

        <p><b>Quais são os teus objetivos no ALTA RP? : </b> ${data.objectives}</p>
        <p><b>Como descobriste o SV ? : </b> ${data.howFoundServer}</p>

        #RECEBA , tio mike melhor programador #chatgpt#
      `
    });

    console.log('RESEND RESULT:', result);

    return res.json({ ok: true, result });
  } catch (error) {
    console.error('🔥 FULL ERROR:', error);
    console.error('🔥 MESSAGE:', error?.message);
    console.error('🔥 STACK:', error?.stack);

    return res.status(500).json({
      ok: false,
      message: error?.message,
      error
    });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log('API running');
});