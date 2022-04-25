import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Image from 'next/image';

import Heading from 'components/heading/Heading';
import ProductCard, { Product } from 'components/productCard/ProductCard';
import SideNav from 'components/sidenav/SideNav';
import products from 'fixtures/allProducts.json';
import ProductGallery from 'components/productGallery/ProductGallery';
import Paragraph from 'components/paragraph/Paragraph';

const HeadingHolder = styled.div`
  grid-column: 1/13;
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

const ImagesHolder = styled.div`
  grid-column: 1/7;
  aspect-ratio: 3 / 4;

  > div {
    margin-bottom: 1rem;
  }
`;

const ImageHolder = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const DescriptionHolder = styled.div`
  margin-top: 3rem;
`;

const ContentHolder = styled.div`
  grid-column: 7/12;
  padding-left: 3rem;
  height: fit-content;
  position: sticky;
  top: 10rem;

  h1 {
    font-size: 4rem;
    line-height: 4.5rem;
  }
`;

const ProductDetails: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  console.log(products);
  const product: Product | undefined = products.find(
    (product) => product.slug === slug
  );

  return (
    <>
      {product && (
        <>
          <ImagesHolder>
            {product.variants[0].images.map((image) => (
              <ImageHolder>
                <Image layout="fill" src={image}></Image>
              </ImageHolder>
            ))}
          </ImagesHolder>
          <ContentHolder>
            {/* <HeadingHolder> */}
            <Heading tag="h1" text={product.name} />
            <Paragraph>${product.price}</Paragraph>
            <DescriptionHolder>
              <Paragraph>{product.description}</Paragraph>
            </DescriptionHolder>
            {/* </HeadingHolder> */}
          </ContentHolder>
        </>
      )}
      {/* {!product && (
        <HeadingHolder>
          <Heading tag="h1" text="Sorry, we can't find that product" />
        </HeadingHolder>
      )} */}
    </>
  );
};

export default ProductDetails;
