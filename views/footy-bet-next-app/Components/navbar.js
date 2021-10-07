import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
// import GetEvent from "../pages/[event]";
import navStyles from '../styles/Nav.module.css';

export default function NavBar() {
  const router = useRouter();
  useEffect(() => {
    /* window.onerror = function () {
      setTimeout(() => {
        location.reload();
      }, 100);
    }; */
    /* setTimeout(
      window.location.reload.bind(window.location),
      250); */

  /* window.onerror = function (errorMsg, url, lineNumber) {
    alert(`Error: ${errorMsg} Script: ${url} Line: ${lineNumber}`);
  }; */
  }, []);

  /* function showEvent() {
  router.push(GetEvent);
}  */

  /* function handleClick(event, path) {
  // event.preventDefault();
    setLoading(true);
    if (path === '/event') {
      router.push(path).reload(window.location);
    }
  } */

  /* useEffect(() => {
    setTimeout(() => { return setLoading(false); }, 1000);
  }, []); */

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
              href="/singleEvents/eventOne" /* onClick={GetEvent} */ /* onClick={() => window.location.reload()}
              onClick={() => {GetEvent(); router.push("/event")}}
              onClick={showEvent}
               <a onClick={() => { handleClick; }} role="link" tabIndex={0}>My Team</a> */
            >
              <a onClick={() => { router.push('/singleEvents/eventOne').reload(window.location); }} role="link" tabIndex={0}>My Team</a>
            </Link>
          </li>
          <li className="navbar-links-item" data-testid="navbar-links-item-id">
            <Link href="/allLiveEvents">
              <a onClick={() => { router.push('/allLiveEvents').reload(window.location); }} role="link" tabIndex={0}>Live Football</a>
            </Link>
          </li>
          <li className="navbar-links-item" data-testid="navbar-links-item-id">
            <Link href="/">Market</Link>
          </li>
          <li className="navbar-links-item" data-testid="navbar-links-item-id">
            <Link href="/">Outcomes</Link>
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
