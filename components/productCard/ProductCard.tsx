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

export type ProductVariant = {
  size: string;
  colour: string;
  stock: number;
  in_stock: boolean;
  images: string[];
};

export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  options: string[];
  images: string[];
  in_stock: boolean;
  stock: number;
  variants: ProductVariant[];
};

const ProductCard = ({ product }: { product: Product }): JSX.Element => {
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
