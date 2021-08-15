import * as React from 'react'
import { Link } from 'gatsby'
import {
    container,
    heading,
    navlinks,
    navLinksItem,
    navLinksText,
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    return (
        <div className={container}>
            <title>{pageTitle}</title>
            <nav>
                <ul className={navlinks}>
                    <li className={navLinksItem}>
                        <Link to="/" activeClassName={navLinksText}>
                            Home
                        </Link>
                    </li>
                    <li  className={navLinksItem}>
                        <Link to="/about" className={navLinksText}>
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout