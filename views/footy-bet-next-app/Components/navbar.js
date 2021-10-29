import Head from 'next/head';
import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';

export default function NavBar() {
  return (
    <>
      <Head>
        <title>FOOTY-BET</title>
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
              href="/singleEvents/eventOne"
            >
              <a>My Team</a>
            </Link>
          </li>
          <li className="navbar-links-item" data-testid="navbar-links-item-id">
            <Link href="/allLiveEvents">
              <a>Live Football</a>
            </Link>
          </li>
          <li className="navbar-links-item" data-testid="navbar-links-item-id">
            <Link href="/leagues">Leagues</Link>
          </li>
          <li className="navbar-links-item" data-testid="navbar-links-item-id">
            <Link href="/market">
              <a>
              Live Bet-Market
              </a>
            </Link>
          </li>
         {/*  <li className="navbar-links-item" data-testid="navbar-links-item-id">
            <Link href="/">
              <a>
                Outcomes
              </a>
            </Link>
              </li>     */} 
        </ul>
      </nav>
    </>
  );
}
