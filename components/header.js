import Link from "next/link";

const header = () => {
    return (
            <header>
          <h1 className="logo" id="logo">
            R0B1
          </h1>
          <nav>
            <ul>
              <li>
                <Link href="/Projects">
                <a className="navigation-link">
                  Projets
                </a>
                </Link>
              </li>
              <li>
                <Link href="/experience">
                <a className="navigation-link">
                  Exp.
                </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                <a className="navigation-link" >
                À propos
                </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                <a className="navigation-link">
                  Contact
                </a>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
    );
};

export default header;