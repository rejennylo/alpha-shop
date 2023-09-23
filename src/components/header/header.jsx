import styles from './header.module.scss';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { ReactComponent as Search } from '../../assets/icons/search.svg';
import { ReactComponent as Cart } from '../../assets/icons/cart.svg';
import { ReactComponent as Moon } from '../../assets/icons/moon.svg';

const navItems = ['男款', '女款', '最新消息', '客製商品', '聯絡我們']

function NavList() {
  const navItemsList = navItems.map(item => <li className={styles.nav_item}><a className={styles.nav_link}>{item}</a></li>)
  return (
    <ul className={styles.nav_list}>{navItemsList}</ul>
  )
}

function NavMenu() {
  return (
  <nav className={styles.navbar_menu}>
    <NavList />
    <a className={styles.logo_container} href='#'>
      {/* <Logo className={styles.logo_container} /> */}
      <img src="../../assets/icons/logo.svg" className={styles.logo_container}></img>
    </a>
    <NavIcons />
  </nav>
  )
}

function NavIcons() {
  return (
    <ul className={styles.nav_list}>
      <li className={styles.nav_item}>
        <Search className={styles.nav_icon} />
      </li>
      <li className={styles.nav_item}>
        <Cart className={styles.nav_icon} />
      </li>
      <li className={styles.nav_item}>
        <Moon className={styles.nav_icon} />
      </li>
    </ul>
  )
}

export default function Header() {
  return (
    <header className={styles.site_header}>
      <div className={styles.heater_container}>
        <NavMenu />
      </div>
    </header>
  )
}