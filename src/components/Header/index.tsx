import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img src="/logo.svg" alt="Logo" />
    </header>
  );
}
