import { createRoot } from 'react-dom/client'
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import DashboardComponant from './pages/dashboard';
import CustomersComponant from './pages/customers';
import CategoriesComponant from './pages/categories';
import AdminsComponant from './pages/admins';
import SettingsComponant from './pages/settings';
import ProductsComponant from './pages/products';
import LoginComponant from './auth/login';


createRoot(document.getElementById('root')).render(
<BrowserRouter>
  <Routes>
    <Route path='/' element={<LoginComponant/>}/>
    <Route path='/dashboard' element={<DashboardComponant/>}/>
    <Route path='/customers' element={<CustomersComponant/>}/>
    <Route path='/categories' element={<CategoriesComponant/>}/>
    <Route path='/admins' element={<AdminsComponant/>}/>
    <Route path='/settings' element={<SettingsComponant/>}/>
    <Route path='/products' element={<ProductsComponant/>}/>
  </Routes>
</BrowserRouter>
)
