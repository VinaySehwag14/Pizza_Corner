import styles from "./featured.module.css";
import Image from "next/image";
import { useState } from "react";

const Featured = () => {
  //* using useState hook for adding functionality to arrows

  const [index, setIndex] = useState(0);

  //* we have to add lots of images ,so adding one by one I am using array map func.

  const images = [
    "/image/featured1.jpg",
    "/image/featured2.jpg",
    "/image/featured3.jpg",
  ];

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  console.log(index);

  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <Image
          src="/image/arrowl.png"
          alt="arrowLeft"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translate(${-100 * index}vw)` }}
      >
        {images.map((image, i) => (
          <div className={styles.imgcontainer} key={i}>
            <Image
              src={image}
              alt="imagesPizza"
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <Image
          src="/image/arrowr.png"
          alt="arrowRight"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Featured;
