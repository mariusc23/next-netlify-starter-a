import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export const metadata = {
  url: "/",
  openGraph: {
    type: "website",
    url: "/",
    title: "m23.tv",
    description: "AAA",
    siteName: "m23.tv A",
  },
};

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="AAAAAAAAAAAAAAAAAAAAAAAAAAAA!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  );
}
