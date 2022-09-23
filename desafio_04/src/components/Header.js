import React, { Component } from "react";

import UserLogo from '../assets/user-logo.jpg'

class Header extends Component {

    render() {
        return (
            <div className="header">
                <div className="logo-facebook">
                    <img src="https://i.imgur.com/KDIDiSE.png" />
                </div>
                <div className="profile">
                    <a href="#">Meu perfil</a>
                    <img src={UserLogo} />
                </div>
            </div>
        )
    }
}

export default Header;