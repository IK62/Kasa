import { Outlet } from "react-router-dom";
import Header from './header'
import Footer from './footer'

function App() {
  return (
    <div className="App">
      <Header />
      <body>
        <Outlet />
      </body>
      <Footer />
    </div>
  );
}

export default App;
