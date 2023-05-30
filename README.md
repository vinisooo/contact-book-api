
  <h1>Documentação - Contact Book API</h1>

  <h2>Rodando Localmente</h2>

  <ol>
    <li>
      <p>Clone o repositório:</p>
      <pre><code>git clone &lt;https://github.com/vinisooo/contact-book-api.git;</code></pre>
    </li>
    <li>
      <p>Navegue até o diretório do projeto:</p>
      <pre><code>cd contact-book-api</code></pre>
    </li>
    <li>
      <p>Instale as dependências do projeto utilizando o npm:</p>
      <pre><code>npm install</code></pre>
    </li>
    <li>
      <p>Inicie a API localmente:</p>
      <pre><code>npm run dev</code></pre>
    </li>
  </ol>
  
  <h2>Registro de Usuário</h2>
  <p>Endpoint: <code>POST /users/register</code></p>
  <p>Envio:</p>
  <pre>
    {
      "name": "user",
      "email": "user@mail.com",
      "phone": "+55 00 000000000",
      "password": "password123"
    }
  </pre>
  <p>Resposta:</p>
  <pre>
    {
      "id": 1,
      "name": "user",
      "email": "user@mail.com",
      "phone": "+55 00 000000000",
      "createdAt": "2023-05-30"
    }
  </pre>

  <h2>Receber Usuário Logado</h2>
  <p>Endpoint: <code>GET /users/logged/:id</code></p>
  <p>Parâmetros:</p>
  <ul>
    <li><code>id</code> (número) - ID do usuário logado</li>
    <li><code>Token</code> (string) - Token de autenticação</li>
  </ul>
  <p>Exemplo de resposta:</p>
  <pre>
    {
      "id": 1,
      "name": "user",
      "email": "user@mail.com",
      "password": "$2a$10$toa3ha4.Hg6ZN0/ijYNkhelzHstHKC3Gn6i4fUwuOBbhYd1rEEu1m",
      "phone": "+55 00 000000000",
      "createdAt": "2023-05-27",
      "contacts": []
    }
  </pre>

  <h2>Obter Usuários</h2>
  <p>Endpoint: <code>GET /users</code></p>
  <p>Resposta:</p>
  <pre>
    [
      {
        "id": 2,
        "name": "user1",
        "email": "user2@gmail.com",
        "phone": "+55 00 000000000",
        "createdAt": "2023-05-28"
      },
      {
        "id": 3,
        "name": "user2",
        "email": "user2@gmail.com",
        "phone": "+55 00 000000000",
        "createdAt": "2023-05-28"
      }
    ]
  </pre>

  <h2>Obter Usuário por ID</h2>
  <p>Endpoint: <code>GET /users/:id</code></p>
  <p>Parâmetros:</p>
  <ul>
    <li><code>id</code> (número) - ID do usuário</li>
    <li><code>Token</code> (string) - Token de autenticação</li>
  </ul>
  <p>Exemplo de resposta:</p>
  <pre>
    {
      "id": 1
      "name": "user",
      "email": "user@mail.com",
      "phone": "+55 00 000000000",
      "createdAt": "2023-05-24"
    }
  </pre>

  <h2>Deletar Usuário por ID</h2>
  <p>Endpoint: <code>DELETE /users/:id</code></p>
  <p>Parâmetros:</p>
  <ul>
    <li><code>id</code> (número) - ID do usuário</li>
    <li><code>Token</code> (string) - Token de autenticação</li>
  </ul>
  <p>Resposta: <code>204 No Content</code></p>

  <h2>Atualizar Usuário</h2>
  <p>Endpoint: <code>PATCH /users/:id</code></p>
  <p>Parâmetros:</p>
  <ul>
    <li><code>id</code> (número) - ID do usuário</li>
    <li><code>Token</code> (string) - Token de autenticação</li>
  </ul>
  <p>Corpo da requisição:</p>
  <pre>
    {
      "name": "updated User",
      "email": "uer@mail.com",
      "phone": "+55 00 0000000000"
    }
  </pre>
  <p>Exemplo de resposta:</p>
  <pre>
    {
      "id": 7,
      "name": "updated User",
      "email": "user@mail.com",
      "phone": "+55 00 000000000",
      "createdAt": "2023-05-30"
    }
  </pre>

  <h2>Obter Contatos do Usuário</h2>
  <p>Endpoint: <code>GET /users/:id/contacts</code></p>
  <p>Parâmetros:</p>
  <ul>
    <li><code>id</code> (número) - ID do usuário</li>
    <li><code>Token</code> (string) - Token de autenticação</li>
  </ul>
  <p>Exemplo de resposta:</p>
  <pre>
    [
      {
        "id": 2,
        "name": "contact1",
        "email": "contact1@mail.com",
        "phone": "+55 00 000000000",
        "createdAt": "2023-05-30"
      },
      {
        "id": 3,
        "name": "contact2",
        "email": "contact2@mail.com",
        "phone": "+55 00 000000000",
        "createdAt": "2023-05-30"
      }
    ]
  </pre>

  <h2>Criar Contato</h2>
  <p>Endpoint: <code>POST /contacts</code></p>
  <p>Parâmetros:</p>
  <ul>
    <li><code>Token</code> (string) - Token de autenticação</li>
  </ul>
  <p>Corpo da requisição:</p>
  <pre>
    {
      "name": "contact",
      "phone": "+55 00 000000000",
      "email": "contact@mail.com"
    }
  </pre>
  <p>Exemplo de resposta:</p>
  <pre>
    {
      "name": "contact",
      "email": "contact@mail.com",
      "phone": "+55 00 000000000",
      "user": {
        "id": 1,
        "name": "user",
        "email": "user@mail.com",
        "phone": "+55 00 000000000",
        "createdAt": "2023-05-30"
      },
      "id": 2,
      "createdAt": "2023-05-30"
    }
  </pre>

  <h2>Obter Contato Específico</h2>
  <p>Endpoint: <code>GET /contacts/:id</code></p>
  <p>Parâmetros:</p>
  <ul>
    <li><code>id</code> (número) - ID do contato</li>
    <li><code>Token</code> (string) - Token de autenticação do dono do contato</li>
  </ul>
  <p>Exemplo de resposta:</p>
  <pre>
    {
      "id": 3,
      "name": "contact",
      "email": "contact@mail.com",
      "phone": "+55 00 000000000",
      "createdAt": "2023-05-30",
      "user": {
        "id": 1,
        "name": "user",
        "email": "user@mail.com",
        "phone": "+55 00 000000000",
        "createdAt": "2023-05-30"
      }
    }
  </pre>

  <h2>Atualizar Contato Específico</h2>
  <p>Endpoint: <code>PATCH /contacts/:id</code></p>
  <p>Parâmetros:</p>
  <ul>
    <li><code>id</code> (número) - ID do contato</li>
    <li><code>Token</code> (string) - Token de autenticação do dono do contato</li>
  </ul>
  <p>Corpo da requisição:</p>
  <pre>
    {
      "name": "updated contact",
      "email": "updatedmail@mail.com",
      "phone": "+55 00 000000001"
    }
  </pre>
  <p>Exemplo de resposta:</p>
  <pre>
    {
      "id": 3,
      "name": "updated contact",
      "email": "updatedmail@mail.com",
      "phone": "+55 00 000000001",
      "createdAt": "2023-05-30",
      "user": {
        "id": 1,
        "name": "user",
        "email": "user@mail.com",
        "phone": "+55 00 000000000",
        "createdAt": "2023-05-30"
      }
    }
  </pre>

  <h2>Deletar Contato</h2>
  <p>Endpoint: <code>DELETE /contacts/:id</code></p>
  <p>Parâmetros:</p>
  <ul>
    <li><code>id</code> (número) - ID do contato</li>
    <li><code>Token</code> (string) - Token de autenticação do dono do contato</li>
  </ul>
  <p>Resposta: <code>204 No Content</code></p>

