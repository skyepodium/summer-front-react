import React, { Component } from 'react'
import './TheHeader.css'
export default class TheHeader extends Component {
    render() {
        return (
            <div className="TheHeaderWrapper">
                <div className="TheHeaderInner">
                <a
                    href="/"
                    className="TheHeaderLogo"
                >
                SUMMER
                </a>
                <a 
                    href="/"
                    className="TheHeaderAuth" >
                로그인
                </a>
            </div>
          </div>
        )
    }
}
