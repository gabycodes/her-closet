import React from 'react';
import styled from 'styled-components';
import ProductCard, { Product } from 'components/productCard/ProductCard';

const ProductsHolder = styled.div`
  grid-column: 3/13;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1.5rem;
  grid-row-gap: 3rem;
`;

const ProductGallery = ({ products }: { products: Product[] }): JSX.Element => {
  return (
    <ProductsHolder>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </ProductsHolder>
  );
};

export default ProductGallery;
