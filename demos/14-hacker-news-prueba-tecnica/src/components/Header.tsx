import { header, link } from './Header.css'

export const Header = () => {
  return (
    <nav className={header}>
      <img className='' src={`${import.meta.env.BASE_URL}logo.gif`} alt='Logo de Hacker News' />
      <a className={link} href='#/'>
        Hacker News
      </a>
    </nav>
  )
}
