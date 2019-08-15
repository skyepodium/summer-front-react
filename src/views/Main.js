import React, { Component } from 'react'
import axios from 'axios'
import './Main.css'

export default class Main extends Component {

    state = {
        list: [],
        text: ''
    }

    inputChange = idx => e => {
        let list = this.state.list
        list[idx].text = e.target.value

        this.setState({
            list: list
        })
    }

    modify = idx => e => {
        let list = this.state.list
        list[idx].readonly = !list[idx].readonly

        this.setState({
            list:list
        })

        if(list[idx].readonly){
            this.putData(idx)
        }
    }

    getData (){
        axios.get('http://localhost:3000/api/todo/get')
        .then((response) => {
            let list = response.data

            for(let item of list){
                item.readonly = true
            }

            this.setState({
                list:list
            })
            console.log(list)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    saveText = idx => e => {
        if(e.key === 'Enter') {
            this.putData(idx)
        }
    }

    putData (idx) {
        let item = this.state.list[idx]
        let info = {
            id: item.id,
            text: item.text
        }

        axios.put('http://localhost:3000/api/todo/put', info)
        .then((response) => {
          console.log(response)
          this.getData();
        })
        .catch((error) => {
          console.log(error)
        })  
    }

    emptyCheck(val){
        if(val === '' || val === undefined || val === null) return false
        else return true
    }

    sendText = (e) => {
        if(e.key === 'Enter'){
            if(this.emptyCheck(this.state.text)) {
                let text = this.state.text
                this.setState({
                    text: ''
                })
                this.postData(text)
            }
            else{
                alert('이번 여름에 하고 싶은 일을 적어보세요~')
            }
        }
    }

    postData (text) {
        axios.post('http://localhost:3000/api/todo/post', {text: text})
        .then((response) => {
          console.log(response)
          this.getData();
        })
        .catch((error) => {
          console.log(error)
        })        
    }

    deleteData = idx => e => {
        console.log("deleteData", idx)
        let id = this.state.list[idx].id
        if(window.confirm('정말 지우시겠습니까?')){
            axios.delete(`http://localhost:3000/api/todo/delete/${id}`)
            .then((response) => {
              console.log(response)
              this.getData();
            })
            .catch((error) => {
              console.log(error)
            }) 
          }
    }

    textMode = (val) => {
        if(val) return '수정'
        else return '확인'
    }

    render() {
        const list = this.state.list.map(
            (item, idx) => (
                <div
                    key={idx}
                    className="listItem"
                >
                    <input
                        readOnly={item.readonly}
                        type="text"
                        className="listInput"
                        value={item.text}
                        name="input"
                        onChange={this.inputChange(idx)}
                        onKeyPress={this.saveText(idx)}
                    />
                    <div className="listButton">
                        <div
                            className="modify"
                            onClick={this.modify(idx)}
                        >
                            {this.textMode(item.readonly)}
                        </div>
                        <div
                            className="delete"
                            onClick={this.deleteData(idx)}
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
                            value={this.text}
                            name="mainInput"
                            onChange={(e) => {
                                this.setState({
                                    text: e.target.value
                                })
                            }}
                            onKeyPress={this.sendText}
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

    componentDidMount () {
        this.getData()
    }
}
