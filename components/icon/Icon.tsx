import React from 'react';

export type Icon = {
  name: 'search' | 'cart' | 'bookmark' | 'externalLink';
  size?: 'sm' | 'md' | 'lg';
};

const iconKey: Record<string, string> = {
  search: 'fa-solid fa-magnifying-glass',
  cart: 'fa-solid fa-cart-shopping',
  bookmark: 'fa-regular fa-bookmark',
  externalLink: 'fa-solid fa-arrow-up-right-from-square',
};

const Icon = ({ name, size }: Icon): JSX.Element => {
  let fontSize;

  switch (size) {
    case 'sm':
      fontSize = '1.5rem';
      break;
    case 'md':
      fontSize = '2rem';
      break;
    case 'lg':
      fontSize = '3rem';
      break;
    default:
      'initial';
  }

  return (
    <i className={iconKey[name]} style={{ fontSize }} data-testid="icon"></i>
  );
};

export default Icon;
