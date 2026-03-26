import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Serve arquivos estáticos (HTML, CSS, JS do front)
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('🚀 Servidor moderno rodando em http://localhost:3000');
});