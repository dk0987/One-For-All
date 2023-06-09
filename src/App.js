
import './App.css';
import './index.css'
import {
  createBrowserRouter,
  Outlet,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/navbar';
import Dictionary from './pages/dictionary/Dictionary';
import News from './pages/news/News';
import Movie from './pages/movies/Movie';
import Wheather from './pages/wheather/Wheather';
import Splash from './pages/splash/Splash'
import Game2 from './pages/games/tic-tac-toe/Tic-Tac-Toe'

function App() {

  var [splashLoaded , setSplashLoaded] = useState(false)

  const ProtectedRoute = ({ children }) => {
    if(!splashLoaded){
      setSplashLoaded(true)
      return <Navigate to={"/splash"} />
    }
    return children;
  }

  const Layout = () => {
    return (
      <div >
        <div className=''>
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
      path: '/tic-tac-toe',
      element: <Game2 />
    },
    {
      path : '/splash',
      element : <Splash />
    }

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
