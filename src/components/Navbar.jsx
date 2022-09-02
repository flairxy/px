import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { ImSun } from 'react-icons/im';
import { BsFillMoonFill } from 'react-icons/bs';
import logo from '../assets/4907r.png';
import { truncateAddress, connect } from '../helpers.js';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Navbar({ changeTheme, currentTheme }) {
  const [navState, setNavState] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState('');

  const reconnect = async () => {
    if (window.ethereum === undefined) {
      toast.error('Metamask not detected');
      return;
    }
    const address = await connect();
    if (address) {
      setIsConnected(true);
      setAddress(address);
      localStorage.setItem('address', address);
    }
  };

  const disconnect = () => {
    localStorage.removeItem('address');
    setIsConnected(false);
    setAddress('');
    window.location.reload();
  };

  useEffect(() => {
    const address = localStorage.getItem('address');
    if (address) {
      setIsConnected(true);
      setAddress(address);
    }
  }, []);

  return (
    <nav>
      <div className="brand-container">
        <div className="brand">
          <img
            src={logo}
            alt="logo"
            style={{ width: '250px', height: '180px' }}
          />
        </div>
        <div className="toggle-container">
          <div className="toggle">
            {navState ? (
              <MdClose onClick={() => setNavState(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavState(true)} />
            )}
          </div>
          <div className="mode" onClick={changeTheme}>
            {currentTheme === 'dark' ? (
              <ImSun className="light" />
            ) : (
              <BsFillMoonFill className="dark" />
            )}
          </div>
        </div>
      </div>
      <div className={`links-container ${navState ? 'nav-visible' : ''}`}>
        <ul className="links">
          <li>
            <a href="https://docdro.id/W58MSnj">OFFICIAL WHITEPAPER</a>
          </li>
          <li>
            <button
              onClick={isConnected ? disconnect : reconnect}
              style={{
                backgroundCcolor: '#fff',
                padding: '8px 14px',
                borderRadius: '20px',
                marginTop: '-10px',
                cursor: 'pointer',
                width: '160px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {isConnected
                ? `Disconnect (${truncateAddress(address)})`
                : 'Connect wallet'}
            </button>
          </li>
          <li onClick={changeTheme}>
            {currentTheme === 'dark' ? (
              <ImSun className="light" />
            ) : (
              <BsFillMoonFill className="dark" />
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
