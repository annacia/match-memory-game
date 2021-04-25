import React from 'react';

import style from '../../assets/style/main.module.scss'

const Footer = () => {

    return(
        <footer className={style.footer}>
            <div>
                <p>made by @annacia</p>
                <p>Troubles? Send your issue on <a href="https://github.com/annacia/match-memory-game">GitHub</a></p>
            </div>
        </footer>
    )
};

export default Footer;