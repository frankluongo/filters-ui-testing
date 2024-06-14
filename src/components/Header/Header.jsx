import * as css from "./Header.module.css";

import { LINKS } from "../../utils/constants";

export function Header() {
  return (
    <header className={css.Header}>
      <div className="container">
        <nav>
          <menu>
            {LINKS.map((link) => (
              <li key={link.to}>
                <a key={link.to} href={link.to}>
                  {link.label}
                </a>
              </li>
            ))}
          </menu>
        </nav>
      </div>
    </header>
  );
}
