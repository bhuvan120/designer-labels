import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Collections from './pages/Collections.jsx'

function App() {
  const [page, setPage] = useState(window.location.pathname || '/')

  useEffect(() => {
    const handleLocationChange = () => {
      setPage(window.location.pathname || '/')
    }

    handleLocationChange()
    window.addEventListener('popstate', handleLocationChange)
    return () => window.removeEventListener('popstate', handleLocationChange)
  }, [])

  const renderPage = () => {
    switch (page) {
      case '/about':
        return <About />
      case '/contact':
        return <Contact />
      case '/products':
        return <Collections />
      case '/':
      default:
        return <Home />
    }
  }

  return (
    <div className={page === '/' ? 'app-shell app-shell-home' : 'app-shell app-shell-inner'}>
      <Navbar currentPath={page} />
      {renderPage()}
    </div>
  )
}

export default App
