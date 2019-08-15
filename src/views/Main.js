import React, { Component } from 'react'

import './Main.css'

export default class Main extends Component {

    state = {
        list: [
            {text: '워우워'},
            {text: '여행'},
            {text: 'MIDI'},
            {text: '워우워'}
        ]
    }

    render() {
        const list = this.state.list.map(
            (item, idx) => (
                <div
                    key={idx}
                    className="listItem"
                >
                    <input
                        type="text"
                        className="listInput"
                        value={item.text}
                    />
                    <div className="listButton">
                        <div
                            className="modify"
                        >
                        수정
                        </div>
                        <div
                        className="delete"
                        >
                            삭제
                        </div>
                    </div>
                </div>
            )
        )
        return (
            <div className="wrapper">
                <div className="inner">
                    <div className="main">
                        <input
                            className="mainInput"
                            type="text"
                            placeholder="나는 이번 여름에 이것을 꼭!!!"
                        />
                        <div
                            className="mainButton"
                        >
                            한다
                        </div>
                    </div>
                    <div className="list">
                        {list}
                    </div>
                </div>
            </div>
        )
    }
}
