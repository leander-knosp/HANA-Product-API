import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

// Load .env from parent directory
const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = resolve(__dirname, '..', '.env');

const envContent = readFileSync(envPath, 'utf-8');
const env = Object.fromEntries(
  envContent
    .split('\n')
    .filter((line) => line.includes('='))
    .map((line) => {
      const idx = line.indexOf('=');
      return [line.slice(0, idx).trim(), line.slice(idx + 1).trim().replace(/^"|"$/g, '')];
    })
);

const endpoint = env['API_GET_ENDPOINT'];
const username = env['USERNAME'];
const password = env['PASSWORD'];

if (!endpoint) {
  console.error('ERROR: API_GET_ENDPOINT is not set in .env');
  process.exit(1);
}

if (!username || !password) {
  console.warn('WARNING: USERNAME or PASSWORD is empty in .env — request may fail with 401');
}

const url = `${endpoint}/A_Product?$top=5&$format=json&$select=Product,ProductType,ProductGroup,BaseUnit`;
const credentials = Buffer.from(`${username}:${password}`).toString('base64');

console.log(`\nTesting connection to S/4HANA...\nEndpoint: ${endpoint}\n`);

try {
  const res = await fetch(url, {
    headers: {
      Authorization: `Basic ${credentials}`,
      Accept: 'application/json',
    },
  });

  if (!res.ok) {
    const text = await res.text();
    console.error(`FAILED — HTTP ${res.status} ${res.statusText}`);
    console.error('Response:', text.slice(0, 500));
    process.exit(1);
  }

  const json = await res.json();
  const results = json?.d?.results ?? [];

  console.log(`SUCCESS — HTTP ${res.status}`);
  console.log(`Products returned: ${results.length}`);

  if (results.length > 0) {
    console.log('\nSample products:');
    results.forEach((p) => {
      console.log(`  • ${p.Product} (Type: ${p.ProductType || '-'}, Group: ${p.ProductGroup || '-'}, Unit: ${p.BaseUnit || '-'})`);
    });
  } else {
    console.log('No products found (empty result set).');
  }

  process.exit(0);
} catch (err) {
  console.error('FAILED — Network or parse error:');
  console.error(err.message);
  process.exit(1);
}
