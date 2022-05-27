import './App.css';
import { BrowserRouter  } from 'react-router-dom';
import AdminRoute from './routes/admin routes/AdminRoute';
import PublicRoute from './routes/PublicRoute';


function App() {
  return (
      <BrowserRouter>
        
        <PublicRoute />
        <AdminRoute />

      </BrowserRouter>
  );
}

export default App;
