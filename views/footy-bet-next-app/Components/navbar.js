import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
// import GetEvent from "../pages/[event]";
import navStyles from '../styles/Nav.module.css';

export default function NavBar() {
  const router = useRouter();

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
              href="/event" /* onClick={GetEvent} */ /* onClick={() => window.location.reload()}
              onClick={() => {GetEvent(); router.push("/event")}}
              onClick={showEvent}
               <a onClick={() => { handleClick; }} role="link" tabIndex={0}>My Team</a> */
            >
              <a onClick={() => { router.push('/event').reload(window.location); }} role="link" tabIndex={0}>My Team</a>
            </Link>
          </li>
          <li className="navbar-links-item" data-testid="navbar-links-item-id">
            <Link href="/events">Live Football</Link>
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
