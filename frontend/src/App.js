
import "@fontsource/cairo"; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pageUser/Home';
import Nav from './components/Nav';
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import  store  from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Messges from './pageUser/messges';
import Contact from './pageUser/Contact';
import Footer from './components/Footer';
import Setting from './pageUser/setting';
import Manager from './pageUser/manager';
import Text from './pageUser/Text';
import Show from "./pageUser/Show";
import useNetwork from '../src/hook/useNetwork'
import { useEffect } from "react";
import Spinner from "./spinner/spinner";
import Login from "./components/Login";

function App() {
  const networkState = useNetwork();
 
  const {
    online,
  } = networkState;
  let persistor = persistStore(store);
  useEffect(() =>{
  
  },[])
  return (   
  <div className='' style={{zIndex:'-1111'}}>  
  {online ? 
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor} > 
    <Nav />  

    <div className="w-full">
    <BrowserRouter>
    <Routes  >
    <Route path='/' element={<Home/>} />
    <Route path="/show" element={<Show />} />
    <Route path='/setting' element={<Setting />} />
    <Route path='/cantact' element={<Contact />} />
    <Route path='/text' element={<Text />} />
    <Route path='/manager' element={<Manager />} />
    <Route path='/writemessage' element={<Messges />}/>
    <Route path="/login"  element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  
     <Footer className=""/>
    </PersistGate>
   </Provider>  
   :  <Spinner />  }    
         
  </div>
 
  );
}

export default App;
