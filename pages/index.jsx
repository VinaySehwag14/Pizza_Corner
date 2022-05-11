import axios from "axios";
import Head from "next/head";
import Featured from "../components/Featured/Featured";
import PizzaList from "../components/PizzaList/PizzaList";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Add from "../components/Add/Add";
import AddButton from "../components/AddButton/AddButton";

export default function Home({ pizzaList, admin }) {
  const [close, setClose] = useState(true);

  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Corner</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      {admin && <AddButton setClose={setClose} />}
      <PizzaList pizzaList={pizzaList} />
      {!close && <Add setClose={setClose} />}
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;
  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get(" http://localhost:3000/api/products");
  // "https://pizza-corner.vercel.app/api/products"
  return {
    props: {
      pizzaList: res.data,
      admin,
    },
  };
}
