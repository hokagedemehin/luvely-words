import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&family=Arvo:wght@400;700&family=Catamaran:wght@400;500;600;700;800;900&family=Josefin+Sans:wght@400;500;600;700&family=Merriweather+Sans:wght@300;400;500;600;700;800&family=Montserrat:wght@400;500;600;700;800;900&family=Oswald:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700;800;900&family=Source+Sans+Pro:wght@400;600;700;900&family=Stardos+Stencil:wght@400;700&display=swap'
          /> */}
          <link
            href='https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil+Display:wght@200;400;600;700;800;900&family=Cantarell:wght@400;700&family=Covered+By+Your+Grace&family=Fira+Sans:wght@400;500;600;700;800;900&family=Fredoka:wght@400;500;600;700&family=Lexend+Deca:wght@400;500;600;700;800;900&family=Oxygen:wght@300;400;700&family=Recursive:wght@400;500;600;700;800;900&family=Red+Rose:wght@400;500;600;700&family=Roboto:wght@100;300;400;500;700;900&family=Sansita:wght@400;700;800;900&family=Texturina:opsz,wght@12..72,400;12..72,500;12..72,600;12..72,700;12..72,800;12..72,900&family=Truculenta:opsz,wght@12..72,400;12..72,500;12..72,600;12..72,700;12..72,800;12..72,900&family=Ubuntu:wght@400;500;700&display=swap'
            rel='stylesheet'
          />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/icon?family=Material+Icons'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
