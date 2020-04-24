import React, { useEffect, useCallback } from 'react';
import { Link } from 'gatsby';

import { BurgerMenu } from './burger-menu';

import './nav-side.css';

const routes = [
  { name: 'Home', url: '/' },
  { name: 'Resume', url: '/resume' },
  { name: 'Blog', url: '/blog' },
  { name: 'Contact', url: '/contact' }
];

export const NavSide = ({ close }) => {
  const handleKeyUp = useCallback(
    e => {
      const keys = {
        27: () => {
          e.preventDefault();
          close();
          window.removeEventListener('keyup', handleKeyUp, false);
        }
      };

      if (keys[e.keyCode]) {
        keys[e.keyCode]();
      }
    },
    [close]
  );
  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp, false);

    return () => {
      window.removeEventListener('keyup', handleKeyUp, false);
    };
  }, [handleKeyUp]);
  return (
    <>
      <div
        className="overlay"
        onClick={close}
        onKeyUp={handleKeyUp}
        role="button"
        tabIndex={0}
      />
      <nav className="nav-side">
        <div className="nav-side-close">
          <BurgerMenu isOpen={true} toggle={close} />
        </div>
        <ul className="nav-side-list">
          {routes.map(({ name, url }) => (
            <li className="nav-side-list-item" key={name}>
              <Link activeClassName="active" to={url}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
