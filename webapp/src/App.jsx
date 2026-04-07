import React from 'react';
import { ShellBar, FlexBox, FlexBoxDirection } from '@ui5/webcomponents-react';
import ProductList from './components/ProductList.jsx';

export default function App() {
  return (
    <FlexBox direction={FlexBoxDirection.Column} style={{ minHeight: '100vh' }}>
      <ShellBar
        primaryTitle="Api Test Application"
        secondaryTitle="S/4HANA Product Explorer"
      />
      <div style={{ padding: '1rem 2rem', flex: 1 }}>
        <ProductList />
      </div>
    </FlexBox>
  );
}
