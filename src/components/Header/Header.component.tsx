import {useContext} from 'react'
import ThemeContext from 'context/theme.context';
import styles from './Header.module.scss';

import lightIcon from 'assets/icon-sun.svg';
import darkIcon from 'assets/icon-moon.svg';

const Header: React.FC = () => {
  const {darkmode, toggleDarkmode } = useContext(ThemeContext);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>devfinder</h1>
      <button className={`${styles.button} ${!darkmode && styles.lightmode}`} onClick={toggleDarkmode}>{darkmode ? 'LIGHT' : 'DARK'} <img src={darkmode ? lightIcon  : darkIcon  } alt='theme' /> </button>
    </header>
  )
}

export default Header;