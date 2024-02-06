import { Outlet } from 'react-router-dom'
import Header from './header'
import Footer from './footer'

function App({ children }) {
  return (
    <div className="App">
      <Header />
      <main>{children ?? <Outlet />}</main>
      <Footer />
    </div>
  )
}

export default App
