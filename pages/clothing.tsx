import type { NextPage } from 'next';
import styled from 'styled-components';
import Heading from '../components/heading/Heading';
import ProductCard from '../components/productCard/ProductCard';
import SideNav from '../components/sidenav/SideNav';
import products from '../fixtures/allProducts.json';

const HeadingHolder = styled.div`
  grid-column: 1/13;
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

const ProductsHolder = styled.div`
  grid-column: 3/13;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1.5rem;
  grid-row-gap: 3rem;
`;

const Clothing: NextPage = () => {
  return (
    <>
      <HeadingHolder>
        <Heading tag="h1" text="All The Clothes" />
      </HeadingHolder>
      <SideNav />
      <ProductsHolder products={products}>
        {products.map((product) => (
          <ProductCard product={product} key={product.name} />
        ))}
      </ProductsHolder>
    </>
  );
};

export default Clothing;
