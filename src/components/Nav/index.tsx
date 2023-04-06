import { useState, useEffect } from 'react';
import logo from '../../assets/logo.svg';
import { Navbar, Spacer } from './Nav';

function Nav() {
  const [show, setshow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setshow(true);
      } else {
        setshow(false);
      }
    });
    return () => {
      window.removeEventListener('scroll', () => {
        if (window.scrollY > 100) {
          setshow(true);
        } else {
          setshow(false);
        }
      });
    };
  }, []);
  return (
    <>
      <Navbar show={show}>
        <img src={logo} alt="logo" />
      </Navbar>
      <Spacer />
    </>
  );
}

export default Nav;
