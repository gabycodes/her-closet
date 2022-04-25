import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500&family=Poppins:wght@200;300;400;500&display=swap"
            rel="stylesheet"
          />
          <script
            src="https://kit.fontawesome.com/8a9a9d1842.js"
            crossOrigin="anonymous"
          ></script>
        </Head>
        <body id="root">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
