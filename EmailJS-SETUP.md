# Configuração do EmailJS para o Formulário de Contato

Este documento explica como configurar o EmailJS para receber mensagens do formulário de contato diretamente no seu Gmail.

## Passo a Passo

### 1. Criar uma conta no EmailJS

1. Acesse [EmailJS](https://www.emailjs.com/) e crie uma conta gratuita.
2. O plano gratuito permite enviar até 200 emails por mês, o que deve ser suficiente para um site de portfólio.

### 2. Configurar um serviço de email

1. No painel do EmailJS, clique em "Email Services" e depois em "Add New Service".
2. Selecione "Gmail" como provedor de email.
3. Conecte sua conta Gmail (aquela onde deseja receber as mensagens: alexsanderaugusto142019@gmail.com).
4. Dê um nome ao serviço (por exemplo, "portfolio_contact").
5. Anote o Service ID gerado (exemplo: service_a1tgbli).

### 3. Criar um template de email

1. No painel do EmailJS, clique em "Email Templates" e depois em "Create New Template".
2. Dê um nome ao template (por exemplo, "template_portfolio").
3. Configure o template com o seguinte conteúdo:

**Assunto:**
```
Nova mensagem de contato: {{subject}}
```

**Corpo do email (HTML):**
```html
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
```

4. Clique em "Save" e anote o Template ID gerado (exemplo: template_portfolio).

### 4. Obter a Public Key

1. No painel do EmailJS, vá para "Account" > "API Keys".
2. Copie sua Public Key.

### 5. Configurar as variáveis de ambiente no projeto

1. Crie um arquivo `.env.local` na raiz do projeto com o seguinte conteúdo:

```
VITE_EMAILJS_SERVICE_ID=seu_service_id
VITE_EMAILJS_TEMPLATE_ID=seu_template_id
VITE_EMAILJS_PUBLIC_KEY=sua_public_key
```

2. Substitua os valores pelos que você anotou nas etapas anteriores.

### 6. Testar o formulário

1. Execute o projeto localmente.
2. Preencha o formulário de contato e envie.
3. Verifique se a mensagem chegou ao seu Gmail com o formato correto.

## Personalização do Template

Você pode personalizar o template HTML conforme necessário. As variáveis disponíveis são:

- `{{name}}` - Nome do remetente
- `{{email}}` - Email do remetente (disponível mas não mostrado no template atual)
- `{{subject}}` - Assunto da mensagem (disponível mas não mostrado no template atual)
- `{{message}}` - Conteúdo da mensagem
- `{{time}}` - Data e hora do envio (adicionado automaticamente pelo código)

## Solução de problemas

- Se as mensagens não estiverem sendo enviadas, verifique o console do navegador para erros.
- Certifique-se de que as variáveis de ambiente estão configuradas corretamente.
- Verifique se os nomes dos campos no formulário correspondem aos nomes das variáveis no template do EmailJS.
- Verifique se a conta Gmail não está bloqueando o acesso de aplicativos menos seguros.

## Segurança

- A Public Key do EmailJS é segura para uso no frontend, pois tem permissões limitadas.
- No entanto, é uma boa prática restringir o domínio onde o EmailJS pode ser usado nas configurações da sua conta EmailJS.
- Nunca compartilhe sua Private Key (se você tiver uma conta paga). 