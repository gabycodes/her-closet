import React from 'react';

export type Icon = {
  name: 'search' | 'cart' | 'bookmark';
  size: 'sm' | 'md' | 'lg';
};

const iconKey: Record<string, string> = {
  search: 'fa-solid fa-magnifying-glass',
  cart: 'fa-solid fa-cart-shopping',
  bookmark: 'fa-regular fa-bookmark',
};

const Icon = ({ name, size }: Icon): JSX.Element => {
  const fontSize = size === 'sm' ? '1.5rem' : size === 'lg' ? '3rem' : '2rem';

  return (
    <i className={iconKey[name]} style={{ fontSize }} data-testid="icon"></i>
  );
};

export default Icon;
