import type { NextPage } from 'next';
import Image from 'next/image';
import Heading from '../components/heading/Heading';

import Hero from '../assets/images/tamara-bellis-toa7kV0WPiM-unsplash.jpg';
import styled from 'styled-components';
import { mediaQueries, responsiveHeroImageStyles } from '../styles/Theme';

const ImageHolder = styled.div`
  margin-left: -12rem;
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: -1;

  ${responsiveHeroImageStyles}
`;

const ContentHolder = styled.div`
  color: ${(props) => props.theme.colors.white};
  grid-column: 1/7;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  font-size: 8rem;

  @media ${mediaQueries.sm} {
    grid-column: 1/13;
    font-size: 6rem;
    text-align: center;
    justify-content: center;
  }

  h1 {
    font-size: 8rem;

    @media ${mediaQueries.sm} {
      font-size: 6rem;
    }
  }
`;

const Home: NextPage = () => (
  <>
    <ImageHolder>
      <Image layout="fill" objectFit="cover" src={Hero} quality={100}></Image>
    </ImageHolder>
    <ContentHolder>
      <Heading tag="h1" text="Everyday Luxury." />
    </ContentHolder>
  </>
);

export default Home;
