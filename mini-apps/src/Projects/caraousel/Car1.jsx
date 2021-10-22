import React from "react";
import styles from "./Car1.module.css";

const images = [
  "https://images.unsplash.com/photo-1622495805962-d93109c8def4?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1625864667534-aa5208d45a87?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1625854943320-ce80d935352f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1625758476104-f2ed6c81248f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1625603130750-5797daddc8b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
];

const Car1 = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    setInterval(() => {
      setIndex((prev) => {
        if (prev === images.length - 1) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 3000);
  }, []);

  const indexHandlerOne = (val) => {
    setIndex(val);
  };

  return (
    <div className={styles.mainClass}>
      <div>
        <img src={images[index]} alt="index" />
      </div>
      <div>
        {new Array(5).fill(0).map((ele, num) => (
          <div
            className={
              index === num ? styles.buttonColor1 : styles.buttonColor2
            }
            onClick={() => indexHandlerOne(num)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export { Car1 };
