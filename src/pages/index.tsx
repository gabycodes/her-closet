import type { NextPage } from 'next';
import Image from 'next/image';
import Heading from 'components/heading/Heading';
import Hero from 'assets/images/tamara-bellis-toa7kV0WPiM-unsplash.jpg';
import styled from 'styled-components';
import { mediaQueries, responsiveHeroImageStyles } from 'styles/Theme';
import Link from 'components/link/Link';
import Paragraph from 'components/paragraph/Paragraph';

const ImageHolder = styled.div`
  position: absolute;
  height: fill-available;
  width: 100vw;
  overflow: hidden;
  z-index: -1;

  @media ${mediaQueries.sm} {
    filter: brightness(0.9);
  }
`;

const ContentHolder = styled.div`
  color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: center;
  text-align: left;
  font-size: 8rem;
  grid-column: 1/5;

  @media ${mediaQueries.sm} {
    font-size: 6rem;
    grid-column: 1/13;
  }

  h1 {
    font-size: 8rem;
    margin-bottom: 2rem;

    @media ${mediaQueries.sm} {
      font-size: 6rem;
      line-height: 6rem;
    }
  }

  a {
    display: inline-block;
  }
`;

const Home: NextPage = () => (
  <>
    <ImageHolder>
      <Image
        layout="fill"
        objectFit="cover"
        src={Hero}
        quality={40}
        priority
        placeholder="blur"
      ></Image>
    </ImageHolder>
    <ContentHolder>
      <Heading tag="h1" text="Everyday Luxury." />
      <Paragraph>
        Your new favourite outfit is waiting.{' '}
        <Link text="See what's new" url="#" />
      </Paragraph>
    </ContentHolder>
  </>
);

export default Home;
