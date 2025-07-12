// Configurações do EmailJS
// Substitua estes valores pelos seus próprios do EmailJS
// Você precisará criar uma conta em https://www.emailjs.com/

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_a1tgbli',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_m3irhyo',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '6MfCfRbV3xDACF8Dc',
};

/*
Instruções para configurar o EmailJS:

1. Crie uma conta em https://www.emailjs.com/
2. Crie um serviço de email (por exemplo, Gmail)
3. Crie um template de email com as seguintes variáveis:
   - {{name}} - Nome do remetente
   - {{email}} - Email do remetente
   - {{subject}} - Assunto da mensagem
   - {{message}} - Conteúdo da mensagem
   - {{time}} - Data e hora do envio (adicionado automaticamente)
4. Obtenha seu Service ID, Template ID e Public Key
5. Crie um arquivo .env.local na raiz do projeto com as seguintes variáveis:
   VITE_EMAILJS_SERVICE_ID=seu_service_id
   VITE_EMAILJS_TEMPLATE_ID=seu_template_id
   VITE_EMAILJS_PUBLIC_KEY=sua_public_key

Formato HTML do template:
<div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">
  <div>A message by {{name}} has been received. Kindly respond at your earliest convenience.</div>
  <div
    style="
      margin-top: 20px;
      padding: 15px 0;
      border-width: 1px 0;
      border-style: dashed;
      border-color: lightgrey;
    "
  >
    <table role="presentation">
      <tr>
        <td style="vertical-align: top">
          <div
            style="
              padding: 6px 10px;
              margin: 0 10px;
              background-color: aliceblue;
              border-radius: 5px;
              font-size: 26px;
            "
            role="img"
          >
            👤
          </div>
        </td>
        <td style="vertical-align: top">
          <div style="color: #2c3e50; font-size: 16px">
            <strong>{{name}}</strong>
          </div>
          <div style="color: #cccccc; font-size: 13px">{{time}}</div>
          <p style="font-size: 16px">{{message}}</p>
        </td>
      </tr>
    </table>
  </div>
</div>
*/ 