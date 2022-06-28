import Head from "next/head";
import Footer from "../components/Footer";
import PaymentForm from "../components/PaymentForm";
import s from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nina Petrova’s Test Task</title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
      </Head>
      <main className="container">
        <h1 className={s.title}>
          Test task made by
          <a
            href="https://www.linkedin.com/in/nina-petrova-frontend/"
            target="blank"
          >
            Nina Petrova
          </a>
        </h1>
        <p className={s.description}>
          This app is created with Next.js and Mantine and uses MongoDB for data
          storage.
        </p>
        <PaymentForm />
      </main>
      <Footer />
    </>
  );
}
