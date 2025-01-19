import styles from './Sidebar.module.css';
import Logo from './Logo.jsx';
import AppNav from './AppNav.jsx';
import { Outlet } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />
    </div>
  );
}
