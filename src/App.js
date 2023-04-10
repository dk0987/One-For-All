
import './App.css';
import './index.css'
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import Navbar from './components/navbar';
import Dictionary from './pages/dictionary/Dictionary';
import News from './pages/news/News';
import Movie from './pages/movies/Movie';
import Wheather from './pages/wheather/Wheather';
import Game1 from './pages/games/stone-paper-scissor/Stone-Paper-Scissor'
import Game2 from './pages/games/tic-tac-toe/Tic-Tac-Toe'
import Home from './pages/landing/home/Home';

function App() {

  const ProtectedRoute = ({ children }) => {
    if (false) {
      return <Navigate to={"/home"} />
    }
    return children;
  }

  const Layout = () => {
    return (
      <div >
        <div className='hide-for-mobile'>

          <Navbar />
        </div>
        <div className=''>
          <Outlet />
        </div>
      </div>
    )
  }


  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute>
        <Layout />
      </ProtectedRoute>,
      children: [
        {
          path: "/dictionary",
          element: <Dictionary />
        },
        {
          path: "/news",
          element: <News />
        },
        {
          path: "/movie",
          element: <Movie />
        },
        {
          path: "/wheather",
          element: <Wheather />
        },
      ],

    },
    {
      path: '/stone-paper-scissor',
      element: <Game1 />
    },
    {
      path: '/stone-paper-scissor',
      element: <Game1 />
    },
    {
      path: '/tic-tac-toe',
      element: <Game2 />
    },
    {
      path: "/home",
      element: <Home />
    },

  ]);

  return (
    <div className="App">
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
