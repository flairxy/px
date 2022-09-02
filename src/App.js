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
import { connect } from './helpers.js';

function App() {
  const [theme, setTheme] = useState('dark');
  const [totalMinted, setTotalMinted] = useState(0);
  const [isProcesing, setIsProcesing] = useState(false);
  const changeTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  let provider = null;
  let signer = null;
  let contract = null;
  let signedContract = null;
  if (window.ethereum !== undefined) {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    signer = provider.getSigner();

    let abi = [
      'function mint(uint256 tokens) public payable',
      'function cost() view returns (uint)',
      'function totalSupply() view returns (uint)',
    ];

    contract = new ethers.Contract(
      '0x336f711A0d335aAF1765BD7eCBea198e1e9AF596',
      abi,
      provider
    );
    signedContract = contract.connect(signer);
  }

  const fetchMinted = async () => {
    const minted = await signedContract.totalSupply();
    setTotalMinted(minted.toNumber());
  };

  const connectWallet = async () => {
    if (window.ethereum === undefined) {
      toast.error('Metamask not detected');
      return;
    }
    const address = await connect();
    if (address) {
      await fetchMinted();
      localStorage.setItem('address', address);
    }
  };

  const mint = async () => {
    try {
      if (window.ethereum === undefined) {
        toast.error('Metamask not detected');
        return;
      }
      const address = localStorage.getItem('address');
      if (address === null || address.length < 10) await connectWallet();
      setIsProcesing(true);
      const cost = await signedContract.cost();
      await signedContract.mint(1, { value: cost });
      setIsProcesing(false);
      toast.success('You successfully mimed it!');
      // window.location.reload();
    } catch (error) {
      setIsProcesing(false);
      toast.error(error.message);
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
    registerAnimations();
    if (window.ethereum !== undefined) {
      const fm = async () => {
        await fetchMinted();
      };

      fm();
    }
  }, []);
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
      <Home isProcesing={isProcesing} mint={mint} totalMinted={totalMinted} />

      <Clients />
      <SuperRare />
      <Release />

      <Signup />
    </div>
  );
}

export default App;
