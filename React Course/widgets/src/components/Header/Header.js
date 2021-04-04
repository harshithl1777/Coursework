import React from 'react';
import Link from '../Link/Link';

const Header = ({ setCurrentPath }) => {
    return (
        <div className="ui secondary pointing menu">
            <Link href='/' className="item" onClick={() => setCurrentPath('/')}>Accordion</Link>
            <Link href='/search' className="item">Search</Link>
            <Link href='/dropdown' className="item">Dropdown</Link>
            <Link href='/translate' className="item">Translate</Link>
        </div>
    );
}

export default Header;