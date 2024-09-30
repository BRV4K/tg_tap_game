//@ts-nocheck

import "./scss/App.scss";

import { Toaster } from 'react-hot-toast';
import { useState, useEffect } from 'react';
import StartLoading from './components/StartLoading/StartLoading';
import { startInitData } from './utils/initData';
import { Route, Routes } from 'react-router-dom';
import Heroes from './pages/Heroes/Heroes';
import Refferal from './pages/Refferal/Refferal';
import Coin from './pages/Coin/Coin';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar'
import Quest from "./pages/Quest/Quest";
import { useDispatch, useSelector } from "react-redux";
import { incrementUserEnergyCount } from "./redux/userEnergyCountSlice/userEnergyCountSlice";
import { preloadImage, preloadImageWithPromise } from "./utils/preloadImage";

export default function App() {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      
      setIsLoading(false)
      
      const interval = setInterval(() => {
        dispatch(incrementUserEnergyCount())
      }, 20 * 1000);
      return () => clearInterval(interval);

    }, 5000);
    return () => clearTimeout(loadingTimeout);
  })

  return (
    <>
      {isLoading ? (
        <StartLoading />
      ) : (
        <>
          <Toaster />

          <Header />

          <Routes>
            <Route path="/" element={<Coin />} />
            <Route path="/heroes" element={<Heroes />} />
            <Route path="/refferal" element={<Refferal />} />
            <Route path="/quest" element={<Quest />} />
          </Routes>

          <Navbar />
        </>
      )}
    </>
  )
}
