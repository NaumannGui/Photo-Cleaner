// Importando o express
import express from 'express';
import path from 'path';

// Criando a aplicação Express
const app = express();

// Definindo a porta do servidor
const port = 3000;

// Servindo arquivos estáticos (frontend)
app.use(express.static(path.join(process.cwd(), 'public')));

// Rota para a página inicial
app.get('/', (req, res) => {
  res.sendFile(path.join(process.cwd(), '../../frontend/public', 'index.html'));
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
