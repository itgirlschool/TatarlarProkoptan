import styles from "./Loader.module.css";

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
