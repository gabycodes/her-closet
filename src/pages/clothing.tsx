import type { NextPage } from 'next';
import styled from 'styled-components';
import Heading from 'components/heading/Heading';
import ProductCard from 'components/productCard/ProductCard';
import SideNav from 'components/sidenav/SideNav';
import products from 'fixtures/allProducts.json';
import ProductGallery from 'components/productGallery/ProductGallery';

const HeadingHolder = styled.div`
  grid-column: 1/13;
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

const Clothing: NextPage = () => {
  return (
    <>
      <HeadingHolder>
        <Heading tag="h1" text="All The Clothes" />
      </HeadingHolder>
      <SideNav />
      <ProductGallery products={products} />
    </>
  );
};

export default Clothing;
