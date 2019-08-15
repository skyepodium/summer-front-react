import React, { Component } from 'react'

export default class TheHeader extends Component{
    static defaultProps = {
        name: '아무개'
    }

    state = {
        number: 0,
        message: '',
        list: ['눈사람', '얼음', '눈', '바람']
    }

    alertMessage = () => {
        alert('adsf')
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleEnter = (e) => {
        if(e.key === 'Enter') {
            alert(this.state.message)
        }
    }

    render(){
        const list = this.state.list.map(
            (item, idx) => (
                <li key={idx}>{item}</li>
            )
        )
        return (
            <div>
                제 이름은
                { this.props.name }

                <div>number</div>
                <button onClick={
                    () => {
                        this.setState({
                            number: this.state.number + 1
                        })
                    }
                }>increase</button>
                <div>{this.state.number}</div>
                <button onClick={this.alertMessage}>경고</button>
                <div></div>
                <input name="message" value={this.state.message} onChange={this.handleChange} onKeyPress={this.handleEnter}/>
                <div>{this.state.message}</div>
                {list}
            </div>
        )
    }
}