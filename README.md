<h1>API Contact Book Documentation</h1>

  <h2>Registro de Usuário</h2>
  <p>Endpoint: <code>POST /users/register</code></p>
  <p>Envio:</p>
  <pre>
    {
      "name": "vinicius2",
      "email": "viniciuslira2@mail.com",
      "phone": "+55 47 988638979",
      "password": "2004Cvlm1405#"
    }
  </pre>
  <p>Resposta:</p>
  <pre>
    {
      "id": 6,
      "name": "vinicius2",
      "email": "viniciuslira2@mail.com",
      "phone": "+55 47 988638979",
      "createdAt": "2023-05-30"
    }
  </pre>

  <h2>Login de Usuário</h2>
  <p>Endpoint: <code>POST /users/login</code></p>
  <p>Envio:</p>
  <pre>
    {
      "email": "contanova@mail.com",
      "password": "contanova123A"
    }
  </pre>
  <p>Resposta:</p>
  <pre>
    {
      "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNvbnRhbm92YUBtYWlsLmNvbSIsImlhdCI6MTY4NTMwNDk1OCwiZXhwIjoxNjg1MzkxMzU4LCJzdWIiOiIyMCJ9.cd2hVA86jFKcJe7EIWDGRd75R5F8AH1BfgR7dr_xPNI"
    }
  </pre>
