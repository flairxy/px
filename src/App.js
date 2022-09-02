import React, { useState, useEffect } from 'react';
import Clients from './components/Clients';
import Footer from './components/Footer';
import Free from './components/Free';
import Home from './components/Home';
import Like from './components/Like';
import Navbar from './components/Navbar';
import Release from './components/Release';
import ScrollToTop from './components/ScrollToTop';
import Signup from './components/Signup';
import SuperRare from './components/SuperRare';
import scrollreveal from 'scrollreveal';
import './sass/index.scss';
import { ethers } from 'ethers';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [theme, setTheme] = useState('dark');
  const [totalMinted, setTotalMinted] = useState(0);
  const [isProcesing, setIsProcesing] = useState(false);
  const changeTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  let abi = [
    'function mint(uint256 tokens) public payable',
    'function cost() view returns (uint)',
    'function totalSupply() view returns (uint)',
  ];

  const contract = new ethers.Contract(
    '0xF7Caca343CFCBeA72171c1B06a332f231f6dBCB0',
    abi,
    provider
  );
  const signedContract = contract.connect(signer);

  const fetchMinted = async () => {
    const minted = await signedContract.totalSupply();
    setTotalMinted(minted.toNumber());
  };

  const mint = async () => {
    try {
      setIsProcesing(true);
      const cost = await signedContract.cost();
      await signedContract.mint(1, { value: cost });
      setIsProcesing(false);
      toast.success("You successfully mimed it!");
      // window.location.reload();
    } catch (error) {
      setIsProcesing(false);
      toast.error(error.message);
      console.log(error);
    }
  };
  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: 'bottom',
        distance: '80px',
        duration: 2000,
        reset: false,
      });
      sr.reveal(
        `
        nav,
        .home,
        .free,
        .clients,
        .super-rare,
        .releases,
        .like,
        .signup,
        footer
    `,
        {
          interval: 500,
        }
      );
    };
    const fm = async () => {
      await fetchMinted();
    };

    registerAnimations();
    fm();
  }, [fetchMinted]);
  window.setTimeout(() => {
    const home = document.getElementsByClassName('home');
    home[0].style.transform = 'none';
    const nav = document.getElementsByTagName('nav');
    nav[0].style.transform = 'none';
  }, 1500);
  return (
    <div data-theme={theme} className="app-container">
      <ScrollToTop />
      <Navbar changeTheme={changeTheme} currentTheme={theme} />
      <ToastContainer />
      <Home isProcesing={isProcesing} mint={mint} totalMinted={totalMinted}/>

      <Clients />
      <SuperRare />
      <Release />

      <Signup />
    </div>
  );
}

export default App;
