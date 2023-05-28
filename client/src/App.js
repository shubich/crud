import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import './App.css';
import Home from './pages/home';
import Customer from './pages/customer';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/customer/:customerId",
    Component: Customer,
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
