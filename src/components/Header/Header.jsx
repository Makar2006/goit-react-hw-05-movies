import css from './Header.module.css';
import React, { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
      <header className={css.header}>
        <div className={css.navContainer}>
          <nav>
            <ul className={css.navList}>
              <li className={css.navListItem}>
                <Link to="/" className={css.navLink}>
                  Home
                </Link>
              </li>
              <li className={css.navListItem}>
                <Link to="/movies" className={css.navLink}>
                  Movies
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Header;
