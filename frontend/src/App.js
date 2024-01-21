
import { BrowserRouter, Route, Router, Routes, Switch } from 'react-router-dom';
import './App.css';
import RegisterScreen from './pageUser/RegisterScreen';
import LoginScreen from './pageUser/LoginScreen';
import Home from './components/Home';
import Nav from './components/Nav';
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import  store  from './redux/store';

import { PersistGate } from 'redux-persist/integration/react';
function App() {
  let persistor = persistStore(store);
  return (   
  <> 
         
       
            
          <Provider store={store}>
             <PersistGate loading={null} persistor={persistor} > 
          
             <Nav />  
           <BrowserRouter>
              {/* <div className='main '>   
             <div className='gradient' />
             </div> */}
           <Routes>
           <Route path="/register" element={<RegisterScreen/>} />
           <Route path='/' element={<Home/>} />
            <Route path="/login" element={<LoginScreen/>} />
           </Routes>
           </BrowserRouter>
             </PersistGate>
            </Provider>  
         
       
  </>
 
  );
}

export default App;
