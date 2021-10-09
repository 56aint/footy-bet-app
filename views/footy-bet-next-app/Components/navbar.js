/* eslint-disable no-alert */
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// import { useLocation } from 'react-router-dom';
import Head from 'next/head';
import Link from 'next/link';
// import GetEvent from "../pages/[event]";
import navStyles from '../styles/Nav.module.css';

export default function NavBar() {
  const router = useRouter();
  // const location = useLocation();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    window.onerror = function onError() {
      if (load) {
        window.location.reload(true);
        setLoad(false);
      }
    };
  }, [load]);

  return (
    <>
      <Head>
        <title>Navbar</title>
      </Head>
      <nav className={navStyles.nav} r>
        <ul className="navbar-links" data-testid="navbar-links-id">
          <li className="navbar-links-item" data-testid="navbar-links-item-id">
            <Link className="navbar-item-home" href="/">
              Home
            </Link>
          </li>
          <li className="navbar-links-item" data-testid="navbar-links-item-id">
            <Link
              className="navbar-item-myTeam"
              /* as="/event" */
              href="/singleEvents/eventOne"
            >
              <a onClick={() => { reload(window.location); }}>My Team</a>
            </Link>
          </li>
          <li className="navbar-links-item" data-testid="navbar-links-item-id">
            <Link href="/allLiveEvents">
              <a onClick={() => { reload(window.location); }}>Live Football</a>

            </Link>
          </li>
          <li className="navbar-links-item" data-testid="navbar-links-item-id">
            <Link href="/">
              <a>
                Market
              </a>
            </Link>
          </li>
          <li className="navbar-links-item" data-testid="navbar-links-item-id">
            <Link href="/">
              <a>
                Outcomes
              </a>
            </Link>
          </li>
          <li className="navbar-links-item" data-testid="navbar-links-item-id">
            <Link href="/">Market Updates</Link>
          </li>
          <li className="navbar-links-item" data-testid="navbar-links-item-id">
            <Link href="/">Outcomes Updates</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
