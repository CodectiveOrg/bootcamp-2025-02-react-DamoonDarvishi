import { NavLink } from "react-router";
import styles from "../styles/header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src="/go-trip-logo.png" width={60} height={60} alt="logo" />
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
      <div>
        <select>
          <option>EN</option>
          <option>ES</option>
        </select>
      </div>
    </header>
  );
}
