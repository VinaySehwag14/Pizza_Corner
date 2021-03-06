import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import API from "../backendApi";
import Add from "../components/Add";
import AddButton from "../components/AddButton";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";

export default function Home({ pizzaList, admin }) {
  const [close, setClose] = useState(true);

  useEffect(() => {
    console.log(pizzaList);
  }, [pizzaList]);

  return (
    <>
      {pizzaList.length > 0 && (
        <div className={styles.container}>
          <Head>
            <title>Pizza Restaurant in Newyork</title>
            <meta name="description" content="Best pizza shop in town" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Featured />
          {<AddButton setClose={setClose} />}
          <PizzaList pizzaList={pizzaList} />
          {!close && <Add setClose={setClose} />}
        </div>
      )}
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get(`${process.env.API}/products`);
  //
  return {
    props: {
      pizzaList: res.data,
      admin,
    },
  };
};
