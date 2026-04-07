import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
// Load .env from project root (one level up from backend/)
config({ path: join(__dirname, '..', '.env') });

import express from 'express';
import cors from 'cors';
import productsRouter from './routes/products.js';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(cors());
app.use(express.json());

// API routes
app.use('/api', productsRouter);

// Serve built React frontend in production
app.use(express.static(join(__dirname, 'public')));
app.get('*', (_req, res) => {
  res.sendFile(join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
