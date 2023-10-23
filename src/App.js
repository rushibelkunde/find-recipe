
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Fav_Recipe from './components/Favourite_Recipe/Fav_Recipe';
import Recipe_Detail from './components/Recipe_Detail/Recipe_Detail';
import { CustomContext } from './CustomContext';
import Error from './Error/Error';

const router = createBrowserRouter([
  {
    path: "/", element: <Navbar />, children: [
      { path: "/", element: <Home /> },
      { path: "/fav-recipes", element: <Fav_Recipe /> },
      { path: "/recipe-detail/:id", element: <Recipe_Detail /> },
      {path:"/error", element: <Error/> }
    ]
  }
],{
  basename: "/find-recipe"
})

function App() {
  return (
    <CustomContext>
      <div className="App">
        <RouterProvider router={router}>

        </RouterProvider>
      </div>
    </CustomContext>
  );
}

export default App;
