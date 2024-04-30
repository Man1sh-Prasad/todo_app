import './App.css'
import { Navbar } from './components/navbar/Navbar.jsx'
import { RecoilRoot } from 'recoil'
import { Home } from './components/homepage/Home.jsx'
import { Footer } from './components/footer/Footer.jsx'
import { About } from './routes/about/About.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Signup } from './routes/signup/Signup.jsx'
import { Login } from './routes/login/Login.jsx'
import { Todos } from './routes/todos/Todos.jsx'


function App() {
  return (
    <div>
      <Router>
        <RecoilRoot>
          <Navbar />
        
          
        <Routes>
          <Route  exact path='/' element={<Home />} />
          <Route  path='/addTodo' element={<Todos />} />
          <Route  path='/about' element={<About />} />
          <Route  path='/signup' element={<Signup />} />
          <Route  path='/login' element={<Login />} />
        </Routes>
        </RecoilRoot>
      </Router>
      
      <Footer />
     
    </div>
  )
}

export default App