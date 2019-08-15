import React, { Component } from 'react'
import './TheTitle.css'
import image from '../assets/summer.jpg'

let style = {
    backgroundImage: `url(${image})`
}

export default class TheTitle extends Component {
    render() {
        return (
            <div
                className="TheTitleWrapper" 
                style={style}
            />
        )
    }
}
