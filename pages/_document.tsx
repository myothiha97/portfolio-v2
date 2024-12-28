import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Myo Thiha Kyaw - Senior Web developer</title>
        <link rel="icon" href="/android-chrome-192x192.png" />
        <meta
          name="description"
          content="Myo Thiha Kyaw, Senior web developer with 5 years of experience in web development.Proficient in React, Next.js, Node.js, Express.js, MongoDB, and other web technologies."
        />
        <meta
          name="keywords"
          content="myo thiha kyaw,myo thiha,senior web developer,web developer,software engineer,react,nextjs,nodejs,python,typescript,nestjs"
        />
      </Head>

      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
