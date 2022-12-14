import Gifs from './components/gifs/Gifs'
import Detail from './pages/Detail/Detail'
import Home from './pages/Home/Home'
import ErrorPage from './pages/Error/Error'
import { GifsContextProvider } from './context/GifsContext'
import { Route, Link } from "wouter";

function App() {
    return (
      <main>
        <div className="home">
            <Link to={'/'} className="home-title">giftastic!</Link>
        </div>
        <GifsContextProvider>
            <Route
                path="/"
                component={ Home }
            />
            <Route
                path="/gif/:id"
                component={ Detail }
            />
            <Route
                path="/search/:keyword"
                component={ Gifs } />
            <Route
                path="/404"
                component={() => {
                    return (
                        <ErrorPage>
                            <h1 className="error">Something went wrong</h1>
                        </ErrorPage>)
                    }}
            />
        </GifsContextProvider>
      </main>
  )
}

export default App;
