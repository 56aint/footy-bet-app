/* eslint-disable no-alert */
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import { useLocation } from 'react-router-dom';
import Head from 'next/head';
import Link from 'next/link';
// import GetEvent from '../pages/singleEvents/eventOne';
// import socketConnection from '../pages/api/apiCalls/connection';
import navStyles from '../styles/Nav.module.css';

// const ws = socketConnection();

export default function NavBar() {
  /* const router = useRouter();
  // const location = useLocation();
  const [load, setLoad] = useState(true);

  function handleClick() {
    GetEvent();
    // e.preventDefault();
    // setLoad(false);
    // router.push(e.target.href);
    ws.open()
      .then(() => {
        return router.push('/singleEvents/eventOne');
        // router.push(./singleEvents/event);
      });
  } */

  // function onError() {
  // router.navigated = false;
  // window.location.reload();
  // if (load) {
  // reload(window.location.pathname);
  // setLoad(false);
  // }
  // };

  /* useEffect(() => {
    window.onerror = function () {
      if (load) {
        window.location.reload(true);
        // alert('Refresh needed...');
        setLoad(false);
      }
    };
  }, [load]);
 */
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
              <a>My Team</a>
              {/*  <a onClick={() => { reload(window.location.pathname); }}>My Team</a> */}
              {/* <a onClick={() => { window.location.reload(pathname); }}>My Team</a> */}
            </Link>
          </li>
          <li className="navbar-links-item" data-testid="navbar-links-item-id">
            <Link href="/allLiveEvents">
            <a>Live Football</a>
              {/* <a onClick={() => { reload(window.location.pathname); }}>Live Football</a> */}
              {/* <a onClick={() => { window.location.reload(pathname); }}>Live Football</a> */}

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
