import React, { useState, useMemo } from 'react';
import {
  AnalyticalTable,
  BusyIndicator,
  MessageStrip,
  Toolbar,
  ToolbarSpacer,
  Input,
  Title,
  FlexBox,
  Tag,
  Card,
  CardHeader,
  SegmentedButton,
  SegmentedButtonItem,
  Label,
} from '@ui5/webcomponents-react';

const COLUMNS = [
  { Header: 'Product', accessor: 'Product', minWidth: 150 },
  { Header: 'Description', accessor: 'ProductDescription', minWidth: 200 },
  { Header: 'Type', accessor: 'ProductType', width: 90 },
  { Header: 'Group', accessor: 'ProductGroup', width: 100 },
  { Header: 'Base Unit', accessor: 'BaseUnit', width: 100 },
  { Header: 'Gross Weight', accessor: 'GrossWeight', width: 120 },
  { Header: 'Weight Unit', accessor: 'WeightUnit', width: 100 },
  { Header: 'Created On', accessor: 'CreationDate', width: 120 },
  {
    Header: 'Deletion Flag',
    accessor: 'IsMarkedForDeletion',
    width: 110,
    Cell: ({ value }) =>
      value === true || value === 'true' ? (
        <Tag design="Critical">Flagged</Tag>
      ) : (
        <Tag design="Positive">Active</Tag>
      ),
  },
];

function StatCards({ products }) {
  const total = products.length;
  const active = products.filter((p) => !p.IsMarkedForDeletion || p.IsMarkedForDeletion === 'false').length;
  const deleted = total - active;
  const types = new Set(products.map((p) => p.ProductType).filter(Boolean)).size;

  const stats = [
    { label: 'Total Products', value: total, color: 'var(--sapTile_Separator)' },
    { label: 'Active', value: active, color: 'var(--sapPositiveColor)' },
    { label: 'Marked for Deletion', value: deleted, color: 'var(--sapCriticalColor)' },
    { label: 'Product Types', value: types, color: 'var(--sapInformativeColor)' },
  ];

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1rem',
        marginBottom: '1.5rem',
      }}
    >
      {stats.map((s) => (
        <Card key={s.label}>
          <CardHeader titleText={s.label} />
          <div style={{ padding: '1rem 1.25rem 1.25rem' }}>
            <span
              style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: s.color,
              }}
            >
              {s.value}
            </span>
          </div>
        </Card>
      ))}
    </div>
  );
}

function ProductCardGrid({ products }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: '1rem',
      }}
    >
      {products.map((p) => (
        <Card key={p.Product}>
          <CardHeader
            titleText={p.Product}
            subtitleText={p.ProductDescription || '—'}
            action={
              <Tag design={p.IsMarkedForDeletion === true || p.IsMarkedForDeletion === 'true' ? 'Critical' : 'Positive'}>
                {p.IsMarkedForDeletion === true || p.IsMarkedForDeletion === 'true' ? 'Flagged' : 'Active'}
              </Tag>
            }
          />
          <div style={{ padding: '0.75rem 1.25rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <Label>Type: <strong>{p.ProductType || '—'}</strong></Label>
            <Label>Group: <strong>{p.ProductGroup || '—'}</strong></Label>
            <Label>Base Unit: <strong>{p.BaseUnit || '—'}</strong></Label>
            <Label>Gross Weight: <strong>{p.GrossWeight ? `${p.GrossWeight} ${p.WeightUnit || ''}`.trim() : '—'}</strong></Label>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default function ProductList({ products, loading, error }) {
  const [search, setSearch] = useState('');
  const [view, setView] = useState('table');

  const filtered = useMemo(() => {
    if (!search.trim()) return products;
    const q = search.toLowerCase();
    return products.filter(
      (p) =>
        p.Product?.toLowerCase().includes(q) ||
        p.ProductDescription?.toLowerCase().includes(q) ||
        p.ProductGroup?.toLowerCase().includes(q) ||
        p.ProductType?.toLowerCase().includes(q)
    );
  }, [products, search]);

  if (loading) {
    return (
      <FlexBox style={{ justifyContent: 'center', alignItems: 'center', height: '300px' }}>
        <BusyIndicator active size="Large" text="Loading products..." />
      </FlexBox>
    );
  }

  if (error) {
    return (
      <MessageStrip design="Critical" hideCloseButton style={{ marginTop: '1rem' }}>
        Failed to load products: {error}
      </MessageStrip>
    );
  }

  return (
    <div>
      <StatCards products={products} />

      <Toolbar style={{ marginBottom: '0.5rem' }}>
        <Title level="H3">Products</Title>
        <Tag design="Information" style={{ marginLeft: '0.5rem' }}>
          {filtered.length} / {products.length}
        </Tag>
        <ToolbarSpacer />
        <Input
          placeholder="Search by product, description, group..."
          value={search}
          onInput={(e) => setSearch(e.target.value)}
          style={{ width: '300px', marginRight: '0.75rem' }}
        />
        <SegmentedButton
          onSelectionChange={(e) => {
            const text = e.detail.selectedItems?.[0]?.textContent?.trim().toLowerCase();
            if (text === 'table' || text === 'cards') setView(text);
          }}
        >
          <SegmentedButtonItem selected={view === 'table'}>Table</SegmentedButtonItem>
          <SegmentedButtonItem selected={view === 'cards'}>Cards</SegmentedButtonItem>
        </SegmentedButton>
      </Toolbar>

      {view === 'table' ? (
        <div
          style={{
            border: '1px solid var(--sapList_BorderColor)',
            borderRadius: '0.5rem',
            overflow: 'hidden',
          }}
        >
          <AnalyticalTable
            data={filtered}
            columns={COLUMNS}
            visibleRows={15}
            alternateRowColor
            filterable
            sortable
            rowHeight={44}
            style={{ width: '100%' }}
            noDataText="No products found"
          />
        </div>
      ) : (
        <ProductCardGrid products={filtered} />
      )}
    </div>
  );
}
