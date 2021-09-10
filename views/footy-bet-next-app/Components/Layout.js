import NavBar from './navbar'
import styles from "../styles/Layout.module.css";

export default function ({ children }) {
  return (
    <>
    <NavBar/>
    <div className={styles.container}>
      <main className={styles.main}>{children}</main>
    </div>
    </>
  );
}
