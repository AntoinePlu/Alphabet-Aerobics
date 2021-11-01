import Document, { Html, Head, Main, NextScript } from "next/document";
import { useRouter } from "next/router";

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    console.log(ctx);
    const initialProps = await Document.getInitialProps(ctx);
    console.log(initialProps);
    return { ...initialProps };
  }

  render(props) {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
