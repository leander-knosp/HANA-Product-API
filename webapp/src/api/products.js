import axios from 'axios';

export async function getProducts(params = {}) {
  const top = params.$top ?? 200;
  const response = await axios.get('/api/products', { params: { top } });
  return response.data;
}
