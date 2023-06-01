import './App.css';
import React from 'react';
import * as Api from "./Api"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="HSBC-logo.jpg" className="App-logo"/>
      </header>
        <TimeShower/>
        <UserInputField/>
        <AnswerText answer="test"/>
        <RelatedDocuments relatedDocList={["Doc1","Doc2","Doc3"]}/>
    </div>
  );
}

class TimeShower extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()}
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h2>Timer: {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

class UserInputField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonText: "Ask",
            userInput: ""
        }
        this.clickConfirm = this.clickConfirm.bind(this)
        this.inputValueChange = this.inputValueChange.bind(this)
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    inputValueChange(event) {
        this.setState({ userInput: event.target.value })
    }

    async clickConfirm() {
        if (this.state.buttonText === "") {
            alert("Please input your question")
            return
        }
        this.setState(function (state) {
            return {buttonText: "loading..."};
        });
        console.log("embedding...")
        await Api.gptEmbeddings(this.state.userInput, (status, json) => {
            if (status) {
                console.log("finish embedding")
                this.setState({buttonText: "finish embedding"})
            } else {
                this.setState({buttonText: "retry"})
            }
        })
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Question</h1>
                </div>
                <div className="UserInputDiv">
                    <input className="UserInputField" placeholder="Please input your question here" onChange={this.inputValueChange} value={this.state.userInput}/>
                    <button className="UserInputButton" onClick={this.clickConfirm}>{this.state.buttonText}</button>
                </div>
            </div>
        );
    }
}

function AnswerText(props) {
    return (
        <div>
            <div>
                <h1>Answer</h1>
            </div>
            <div>
                <p>{props.answer}</p>
            </div>
        </div>
    );
}

function RelatedDocuments(props) {
    const relatedDocList = props.relatedDocList.map(numbers =>
        <li>{numbers}</li>
    );
    return (
        <div>
            <div>
                <h1>Related Documents</h1>
            </div>
            <div>
                <ul>{relatedDocList}</ul>
            </div>
        </div>
    );
}

export default App;
