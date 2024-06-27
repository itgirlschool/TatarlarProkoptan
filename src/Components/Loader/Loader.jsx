import styles from "./loader.module.css";

function Loader() {
  return (
    <div className={styles.lds__ellipsis}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Loader;
