import React, { FunctionComponent } from 'react';
import Logotype from '../atoms/Logotype';
import NavLink from '../molecules/NavLink';
import { useSelector, useDispatch } from 'react-redux';
import { State, AppDispatch } from '../store';
import { actions } from '../store/ui';
import Section from '../atoms/Section';
import { WineListItem } from '../types/types';

const navList = [
  { path: '/sortiment', text: 'Sortiment' },
  { path: '/producenter', text: 'Producenter' },
  { path: '/regionen', text: 'Regionen' },
  { path: '/bestallningar', text: 'Beställningar' },
  { path: '/om-oss', text: 'Om Oss' },
  { path: '/nyheter', text: 'Nyheter' },
];

const Header: FunctionComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const open = useSelector<State, boolean>((state) => state.ui.menuOpen);
  const wineList = useSelector<State, WineListItem[]>(
    (state) => state.list.wineList
  );
  const toggleMenu = (): void => {
    dispatch(actions.menuToggled(!open));
  };

  const wineQuantity = wineList.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="bg-white z-10 print:invisible">
      <Section className="flex-col">
        <div className="bg-white flex flex-row justify-between w-full p-4 lg:p-6 flex-wrap">
          <div className="flex flex-col items-start justify-center p-2">
            <Logotype />
          </div>
          <nav className="flex-row items-center justify-end hidden lg:flex">
            {navList.map((item) => (
              <NavLink to={item.path} key={item.text} text={item.text} />
            ))}
            <span className="relative">
              <NavLink to={'/vinlista'} key={'Vinlista'} text={'Vinlista'} />
            </span>
            {wineList.length > 0 && (
              <p className="absolute rounded-full bg-sincere-rose shadow text-white text-sm w-6 h-6 flex justify-center items-center -mt-3 -ml-1">
                {wineQuantity}
              </p>
            )}
          </nav>
          <div
            onClick={toggleMenu}
            className="flex flex-col lg:hidden m-2 justify-center"
          >
            <img className="w-5" src="/assets/menu.png" />
          </div>
        </div>
        {open && (
          <nav className="flex flex-col px-1 -mt-2 mb-2 pb-12 lg:hidden">
            {navList.map((item) => (
              <NavLink
                onClick={toggleMenu}
                to={item.path}
                key={item.text}
                text={item.text}
              />
            ))}
            <span className="relative">
              <span className="absolute">
                <NavLink to={'/vinlista'} key={'Vinlista'} text={'Vinlista'} />
                {wineList.length > 0 && (
                  <p className="absolute rounded-full top-0 right-0 bg-sincere-rose shadow text-white text-sm w-6 h-6 flex justify-center items-center -mt-2 -ml-1">
                    {wineQuantity}
                  </p>
                )}
              </span>
            </span>
          </nav>
        )}
      </Section>
    </header>
  );
};

export default Header;
