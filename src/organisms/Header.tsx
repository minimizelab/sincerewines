import React, { FunctionComponent } from 'react';
import Logotype from '../atoms/Logotype';
import NavLink from '../molecules/NavLink';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../store/types';
import { setMenuOpen } from '../store/actions';
import Section from '../atoms/Section';

const menuIcon = require('../assets/menu.png');

const navList = [
  { path: '/sortiment', text: 'Sortiment' },
  { path: '/producenter', text: 'Producenter' },
  { path: '/regionen', text: 'Regionen' },
  { path: '/bestallningar', text: 'Beställningar' },
  { path: '/om-oss', text: 'Om Oss' },
  { path: '/nyheter', text: 'Nyheter' },
];

const Header: FunctionComponent = () => {
  const dispatch = useDispatch();
  const open = useSelector<State, boolean>(state => state.menuOpen);
  const toggleMenu = () => dispatch(setMenuOpen(!open));
  return (
    <header className="bg-white z-10">
      <Section className="flex-col">
        <div className="bg-white flex flex-row justify-between w-full p-4 sm:p-6 flex-wrap">
          <div className="flex flex-col items-start justify-center p-2">
            <Logotype />
          </div>
          <nav className="flex flex-row items-center justify-end hidden md:flex">
            {navList.map(item => (
              <NavLink to={item.path} key={item.text} text={item.text} />
            ))}
          </nav>
          <div className="flex flex-col md:hidden m-2 justify-center">
            <img className="w-5" onClick={toggleMenu} src={menuIcon} />
          </div>
        </div>
        {open && (
          <nav className="flex flex-col px-1 -mt-2 pb-6 md:hidden">
            {navList.map(item => (
              <NavLink to={item.path} key={item.text} text={item.text} />
            ))}
          </nav>
        )}
      </Section>
    </header>
  );
};

export default Header;
