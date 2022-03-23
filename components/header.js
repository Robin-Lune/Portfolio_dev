import Link from "next/link";


const header = () => {

  return (
    <header>
      <Link href="/">
        <a className="navigation-link">
          <h1 className="logo" id="logo">
            R0B1
          </h1>
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/projects">
              <a className="navigation-link">Projets</a>
            </Link>
          </li>
          <li>
            <Link href="/experience">
              <a className="navigation-link">Exp.</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="navigation-link">À propos</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="navigation-link">Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default header;
