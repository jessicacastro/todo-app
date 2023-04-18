import LogoImage from '../../assets/logo.svg';
import styles from './Header.module.css'

export const Header = () => {
  return(
    <header className={styles.header}>
      <img className={styles.logo} src={LogoImage} alt='To-do Application Logo' />
    </header>
  )
}