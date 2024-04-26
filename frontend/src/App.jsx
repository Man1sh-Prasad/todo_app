import './App.css'
import { Navbar } from './components/navbar/Navbar.jsx'
import { RecoilRoot } from 'recoil'
import { Home } from './components/homepage/Home.jsx'
import { Footer } from './components/footer/Footer.jsx'

function App() {
  return (
    <div>
      <RecoilRoot>
        <Navbar />
      </RecoilRoot>
      <Home />
      <Footer />
    </div>
  )
}

export default App