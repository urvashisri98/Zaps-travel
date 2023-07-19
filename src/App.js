import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './components/header';
import Login from './Auth/login';
import Signup from './Auth/signup';
import Register from './Auth/register';
import Otp from './Auth/otp';
import Home from './Pages/home-page';
import SearchFlight from './Pages/search-flight';
import Cart from './Pages/cart';
import Payment from './Pages/payment-page';
import { Provider } from 'react-redux';
import store from './utils/store';
import PersonalDetails from './Pages/personal-details';


function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const dir = i18n.dir(i18n.language);
    document.documentElement.dir = dir;
  }, [i18n, i18n.language]);

  return (
    <Provider store={store}>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/login' element={ <Login /> } />
          <Route path='/signup' element={ <Signup /> } />
          <Route path='/otp-verify' element={<Otp />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Home />} />
          <Route path='/search-flight' element={<SearchFlight />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/add-details' element={<PersonalDetails />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
