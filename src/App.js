import './App.css';
import React from 'react';
import {searchLogic} from "./Logic/Logic";

// React Doc: https://zh-hans.react.dev/learn

// function App2() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src="HSBC-logo.jpg" className="App-logo"/>
//       </header>
//         <TimeShower/>
//         <UserInputField/>
//         <AnswerText answer="test"/>
//         <RelatedDocuments relatedDocList={["Doc1","Doc2","Doc3"]}/>
//     </div>
//   );
// }

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {answer: ""}
        this.answerHandler = this.answerHandler.bind(this)
    }
    componentDidMount() {

    }
    componentWillUnmount() {

    }

    answerHandler(answer) {
        this.setState({
            answer: answer
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src="HSBC-logo.jpg" className="App-logo" alt=""/>
                </header>
                <TimeShower/>
                <UserInputField answerHandler={this.answerHandler}/>
                <AnswerText answer={this.state.answer}/>
                <RelatedDocuments relatedDocList={["Doc1","Doc2","Doc3"]}/>
            </div>
        );
    }
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

        searchLogic(this.state.userInput, (status, result) => {
            if (status) {
                this.props.answerHandler(result)
                this.setState({buttonText: "Ask Again"})
            } else {
                this.setState({buttonText: "retry"})
            }
        });
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

class AnswerText extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    inputValueChange(event) {

    }

    render() {
        return (
            <div>
                <div>
                    <h1>Answer</h1>
                </div>
                <div>
                    <p>{this.props.answer}</p>
                </div>
            </div>
        );
    }
}

class RelatedDocuments extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    inputValueChange(event) {

    }

    render() {
        const relatedDocList = this.props.relatedDocList.map(item =>
            <li key={item}>{item}</li>
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
}

export default App;
