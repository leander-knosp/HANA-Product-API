import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_ENDPOINT;
const USERNAME = import.meta.env.VITE_USERNAME;
const PASSWORD = import.meta.env.VITE_PASSWORD;

// Parse SAP OData v2 date strings like /Date(1583020800000)/ to ISO string
function parseSapDate(val) {
  if (!val || typeof val !== 'string') return val;
  const match = val.match(/\/Date\((\d+)(?:[+-]\d+)?\)\//);
  if (!match) return val;
  return new Date(parseInt(match[1], 10)).toLocaleDateString();
}

// Recursively normalize all date fields in an object
function normalizeDates(obj) {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    result[key] = parseSapDate(value);
  }
  return result;
}

/**
 * Fetch product master data from A_Product entity.
 * @param {object} params - Optional OData query params (e.g. $top, $filter)
 * @returns {Promise<Array>} Array of product objects
 */
export async function getProducts(params = {}) {
  const defaultParams = {
    $format: 'json',
    $expand: 'to_Description',
    $top: 200,
    ...params,
  };

  const response = await axios.get(`${BASE_URL}/A_Product`, {
    params: defaultParams,
    auth: {
      username: USERNAME,
      password: PASSWORD,
    },
    headers: {
      Accept: 'application/json',
    },
  });

  const results = response.data?.d?.results ?? [];

  return results.map((product) => {
    const descriptions = product.to_Description?.results ?? [];
    // Prefer English description, fallback to first available
    const desc =
      descriptions.find((d) => d.Language === 'EN') || descriptions[0];

    return {
      ...normalizeDates(product),
      ProductDescription: desc?.ProductDescription ?? '',
    };
  });
}
