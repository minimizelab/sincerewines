import React, { FunctionComponent } from 'react';
import Logotype from '../atoms/Logotype';
import NavLink from '../molecules/NavLink';
import { useSelector, useDispatch } from 'react-redux';
import { State, AppDispatch } from '../store';
import { actions } from '../store/ui';
import Section from '../atoms/Section';
import menuIcon from '../assets/menu.png';
import { useStaticQuery, graphql } from 'gatsby';

const navList = [
  { path: '/sortiment', text: 'Sortiment' },
  { path: '/producenter', text: 'Producenter' },
  { path: '/regionen', text: 'Regionen' },
  { path: '/bestallningar', text: 'Beställningar' },
  { path: '/om-oss', text: 'Om Oss' },
  { path: '/nyheter', text: 'Nyheter' },
];

interface Data {
  sanitySettings: {
    menuItems: {
      title: string;
      link: string;
    }[];
  };
}

const Header: FunctionComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const open = useSelector<State, boolean>((state) => state.ui.menuOpen);
  const toggleMenu = (): void => {
    dispatch(actions.menuToggled(!open));
  };
  const {
    sanitySettings: { menuItems },
  } = useStaticQuery<Data>(graphql`
    query headerQuery {
      sanitySettings {
        menuItems {
          title
          link
        }
      }
    }
  `);
  return (
    <header className="bg-white z-10">
      <Section className="flex-col">
        <div className="bg-white flex flex-row justify-between w-full p-4 lg:p-6 flex-wrap">
          <div className="flex flex-col items-start justify-center p-2">
            <Logotype />
          </div>
          <nav className="flex flex-row items-center justify-end hidden lg:flex">
            {navList.map((item) => (
              <NavLink to={item.path} key={item.text} text={item.text} />
            ))}
          </nav>
          <div
            onClick={toggleMenu}
            className="flex flex-col lg:hidden m-2 justify-center"
          >
            <img className="w-5" src={menuIcon} />
          </div>
        </div>
        {open && (
          <nav className="flex flex-col px-1 -mt-2 pb-6 lg:hidden">
            {menuItems.map((item) => (
              <NavLink
                onClick={toggleMenu}
                to={item.link}
                key={item.title}
                text={item.title}
              />
            ))}
          </nav>
        )}
      </Section>
    </header>
  );
};

export default Header;
