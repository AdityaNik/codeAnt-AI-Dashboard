import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthPage from './AuthPage';
import DashBoard from './Dashboard';

const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path='/'  element={<DashBoard />}/>
      <Route path='/auth' element={<AuthPage />}/>
    </Routes>
  </BrowserRouter>
}

export default App;