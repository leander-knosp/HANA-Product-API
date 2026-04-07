import React, { useState, useEffect } from 'react';
import { ShellBar, FlexBox, FlexBoxDirection, Title, Label } from '@ui5/webcomponents-react';
import ProductList from './components/ProductList.jsx';
import { getProducts } from './api/products.js';

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pageSize, setPageSize] = useState(200);

  useEffect(() => {
    setLoading(true);
    setError(null);
    getProducts({ $top: pageSize === 'all' ? 9999 : pageSize })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err?.response?.data?.error?.message?.value ?? err.message);
        setLoading(false);
      });
  }, [pageSize]);

  const total = products.length;
  const active = products.filter((p) => !p.IsMarkedForDeletion || p.IsMarkedForDeletion === 'false').length;
  const flagged = total - active;
  const types = new Set(products.map((p) => p.ProductType).filter(Boolean)).size;

  const headerInfo = loading
    ? 'Loading...'
    : error
    ? 'Could not load product data'
    : `${total} Products · ${types} Types · ${active} Active · ${flagged} Flagged`;

  return (
    <FlexBox direction={FlexBoxDirection.Column} style={{ minHeight: '100vh' }}>
      <ShellBar
        primaryTitle="Api Test Application"
        secondaryTitle="S/4HANA Product Explorer"
      />

      <div style={{
        background: 'var(--sapObjectHeader_Background)',
        borderBottom: '1px solid var(--sapPageHeader_BorderColor)',
        padding: '1rem 2rem',
      }}>
        <Title level="H2">Product Master Data</Title>
        <Label style={{ display: 'block', marginTop: '0.25rem', color: 'var(--sapContent_LabelColor)' }}>
          S/4HANA Cloud · API_PRODUCT_SRV &nbsp;|&nbsp; {headerInfo}
        </Label>
      </div>

      <div style={{ padding: '1.5rem 2rem', flex: 1 }}>
        <ProductList
          products={products}
          loading={loading}
          error={error}
          pageSize={pageSize}
          onPageSizeChange={setPageSize}
        />
      </div>
    </FlexBox>
  );
}
