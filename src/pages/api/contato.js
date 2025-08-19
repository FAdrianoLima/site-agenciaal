// pages/api/contato.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método não permitido" });
  }

  const { nome, email, setor, mensagem } = req.body;

  if (!nome || !email || !setor) {
    return res.status(400).json({ message: "Campos obrigatórios ausentes" });
  }

  try {
    // Configuração do transporte (exemplo usando Gmail - pode trocar por SMTP próprio)
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // configure no .env.local
        pass: process.env.EMAIL_PASS, // configure no .env.local
      },
    });

    // Montando o e-mail
    await transporter.sendMail({
      from: `"Site Agencia AL" <${process.env.EMAIL_USER}>`,
      to: "fabioa.slima1@gmail.com", // seu email que vai receber
      subject: `Novo contato via site - ${setor}`,
      html: `
        <p><b>Nome:</b> ${nome}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Setor:</b> ${setor}</p>
        <p><b>Mensagem:</b><br/>${mensagem}</p>
      `,
    });

    return res.status(201).json({ message: "Contato enviado com sucesso" });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return res.status(500).json({ message: "Erro ao enviar contato" });
  }
}
