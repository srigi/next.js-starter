import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import { FiExternalLink } from 'react-icons/fi';

const Nav: FunctionComponent = () => {
  return (
    <nav>
      <ul className="max-w-4xl h-16 mx-auto px-4 flex items-center justify-between">
        <li>
          <Link href="/">
            <a>
              <img className="w-10" src="/android-chrome-512x512.png" alt="go to home link" />
            </a>
          </Link>
        </li>

        <ul className="flex space-x-4">
          <li>
            <a
              href="https://github.com/srigi/next.js-starter"
              className="btn-blue no-underline"
              target="_blank"
              rel="noreferrer"
            >
              Github <FiExternalLink className="inline-block" />
            </a>
          </li>
        </ul>
      </ul>
    </nav>
  );
};

export default Nav;
