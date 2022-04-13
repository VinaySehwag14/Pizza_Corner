import style from "./navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={style.container}>
      <div className={style.item}>
        <div className={style.callButton}>
          <Image
            src="/image/telephone.png"
            alt="telephone"
            width="32"
            height="32"
          />
        </div>
        <div className={style.texts}>
          <div className={style.text}>ORDER NOW!</div>
          <div className={style.text}>+91-8851039997</div>
        </div>
      </div>
      <div className={style.item}>
        <ul className={style.list}>
          <li className={style.listItem}>Homepage</li>
          <li className={style.listItem}>Products</li>
          <li className={style.listItem}>Menu</li>
          <Image src="/image/logo.png" alt="logo" width="200px" height="69px" />
          <li className={style.listItem}>Events</li>
          <li className={style.listItem}>Blog</li>
          <li className={style.listItem}>Contact</li>
        </ul>
      </div>
      <div className={style.item}>
        <div className={style.cart}>
          <Image src="/image/cart.png" alt="" width="30px" height="30px" />
          <div className={style.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
