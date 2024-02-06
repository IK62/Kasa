import { useLocation, useNavigate } from 'react-router-dom'
import { ReactComponent as Logo } from '../../images/KasaLogo.svg'

function Header() {
  const navigate = useNavigate()
  return (
    <header>
      <Logo />
      <div>
        <h2
          onClick={() => navigate('/')}
          className={useLocation().pathname === '/' ? 'underline' : null}
        >
          Accueil
        </h2>
        <h2
          onClick={() => navigate('/A-Propos')}
          className={useLocation().pathname === '/A-Propos' ? 'underline' : null}
        >
          A Propos
        </h2>
      </div>
    </header>
  )
}

export default Header
