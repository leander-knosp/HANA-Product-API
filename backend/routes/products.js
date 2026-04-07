import express from 'express';
import axios from 'axios';

const router = express.Router();

function parseSapDate(val) {
  if (!val || typeof val !== 'string') return val;
  const match = val.match(/\/Date\((\d+)(?:[+-]\d+)?\)\//);
  if (!match) return val;
  return new Date(parseInt(match[1], 10)).toLocaleDateString();
}

function normalizeDates(obj) {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    result[key] = parseSapDate(value);
  }
  return result;
}

// GET /api/products?top=200
router.get('/products', async (req, res) => {
  // Read env vars here so dotenv has already loaded them
  const SAP_ENDPOINT = process.env.API_GET_ENDPOINT;
  const USERNAME = process.env.USERNAME;
  const PASSWORD = process.env.PASSWORD;
  const top = req.query.top ? parseInt(req.query.top, 10) : 200;

  try {
    const response = await axios.get(`${SAP_ENDPOINT}/A_Product`, {
      params: {
        $format: 'json',
        $expand: 'to_Description',
        $top: top,
      },
      auth: { username: USERNAME, password: PASSWORD },
      headers: { Accept: 'application/json' },
    });

    const results = response.data?.d?.results ?? [];

    const products = results.map((product) => {
      const descriptions = product.to_Description?.results ?? [];
      const desc = descriptions.find((d) => d.Language === 'EN') || descriptions[0];

      return {
        ...normalizeDates(product),
        ProductDescription: desc?.ProductDescription ?? '',
        to_Description: undefined,
      };
    });

    res.json(products);
  } catch (err) {
    console.error('Backend error:', err.message, err.stack);
    const status = err.response?.status ?? 500;
    const message = err.response?.data?.error?.message?.value ?? err.message;
    res.status(status).json({ error: message });
  }
});

export default router;
