import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from '../link/Link';
import Paragraph from '../paragraph/Paragraph';

const Card = styled.div`
  font-size: 1.4rem;
  aspect-ratio: 1 / 1;
`;

const ImageHolder = styled.a`
  width: 100%;
  position: relative;
  display: block;
  margin-bottom: 0.5rem;
  aspect-ratio: 3 / 4;
`;

export type ProductCard = {
  text: string;
};

const ProductCard = ({ product }): JSX.Element => {
  console.log(product);
  const { images, name, price } = product;

  return (
    <Card data-testid="sidenav">
      <ImageHolder href="#">
        <Image layout="fill" objectFit="cover" src={images[0]}></Image>
      </ImageHolder>
      <Link url="#" text={name} noUnderline />
      <Paragraph size="1.4rem">${price}</Paragraph>
    </Card>
  );
};

export default ProductCard;
