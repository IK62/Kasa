import { useNavigate } from "react-router-dom"

function ErrorPage() {
  const navigate = useNavigate()

  return (
    <>
      <h1 className="errorTitle">404</h1>
      <h2 className="errorText">Oups! La page que vous demandez n'existe pas.</h2>
      <p className="errorLink" onClick={() => navigate("/")}>Retourner sur la page d’accueil</p>
    </>
  )
}

export default ErrorPage
