import axios from "axios";
import Head from "next/head";
import Featured from "../components/Featured/Featured";
import PizzaList from "../components/PizzaList/PizzaList";
import styles from "../styles/Home.module.css";

export default function Home({ pizzaList }) {
  // if (!pizzaList) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Corner</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList pizzaList={pizzaList} />
    </div>
  );
  // } else {
  //   <div>Page is loaddingg.... ! PLease refresh</div>;
  // }
}

export async function getServerSideProps() {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzaList: res.data,
    },
  };
}
