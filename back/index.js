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
app.options('*', cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/application', async (req, res) => {
  const data = req.body;

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'mikesousa99@hotmail.com',
      subject: `Nova candidatura - ${data.name}`,
      html: `
        <h2>Nova candidatura AltaRP</h2>

        <p><b>Nome:</b> ${data.name}</p>
        <p><b>Idade:</b> ${data.age}</p>
        <p><b>Discord:</b> ${data.discord}</p>
        <p><b>Steam:</b> ${data.steamId}</p>
        <p><b>Motivo:</b> ${data.reason}</p>
      `
    });

    res.json({ ok: true });

  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log('API running');
});