import './css/Assistant.css';
import React from 'react';
import {searchLogic} from "../../Logic/Logic";
import TimeShower from '../Common/TimeShower/TimeShower'

// React Doc: https://zh-hans.react.dev/learn

// function App2() {
//   return (
//     <div className="Assistant">
//       <header className="Assistant-header">
//         <img src="HSBC-logo.jpg" className="Assistant-logo"/>
//       </header>
//         <TimeShower/>
//         <UserInputField/>
//         <AnswerText answer="test"/>
//         <RelatedDocuments relatedDocList={["Doc1","Doc2","Doc3"]}/>
//     </div>
//   );
// }

class Assistant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: "",
            relatedDocs: [{
                content: "",
                content_length: 0,
                content_tokens: 0,
                essay_date: "",
                essay_thanks: "",
                essay_title: "",
                essay_url: "",
                id: 0,
                similarity: 0
            }]
        }
        this.answerHandler = this.answerHandler.bind(this)
        this.relatedDocsHandler = this.relatedDocsHandler.bind(this)
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

    relatedDocsHandler(relatedDocs) {
        this.setState({
            relatedDocs: relatedDocs
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src="HSBC-logo.jpg" className="App-logo" alt=""/>
                </header>
                <TimeShower/>
                <UserInputField answerHandler={this.answerHandler} relatedDocsHandler={this.relatedDocsHandler}/>
                <AnswerText answer={this.state.answer}/>
                <RelatedDocuments relatedDocList={this.state.relatedDocs}/>
            </div>
        );
    }
}

class UserInputField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: "",
            buttonText: "Ask",
            isLoading: false
        }
        this.clickConfirm = this.clickConfirm.bind(this)
        this.inputValueChange = this.inputValueChange.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
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
        if (this.state.isLoading) {
            return
        }
        this.setState(function (state) {
            return {
                buttonText: "🚀Loading...",
                isLoading: true
            };
        });
        this.props.answerHandler("")
        this.props.relatedDocsHandler([])
        await searchLogic(this.state.userInput, (status, answer, relatedDocs) => {
            if (status) {
                this.props.answerHandler(answer)
                this.props.relatedDocsHandler(relatedDocs)
                this.setState({buttonText: "Ask Again"})
            } else {
                this.setState({buttonText: "retry"})
            }
            this.setState({isLoading: false})
        });
    }

    clickCancel() {
        alert("Todo")
    }

    async handleKeyDown(event) {
        if (event.key === 'Enter') {
            await this.clickConfirm()
        }
    }

    render() {
        let cancelButton = this.state.isLoading ? <button className="UserInputCancelButton" onClick={this.clickCancel}>Cancel</button> : null
        return (
            <div>
                <div>
                    <h1>Question</h1>
                </div>
                <div className="UserInputDiv">
                    <input className="UserInputField" placeholder="Please input your question here" onChange={this.inputValueChange} value={this.state.userInput} onKeyPress={this.handleKeyDown} />
                    <button className="UserInputButton" onClick={this.clickConfirm}>{this.state.buttonText}</button>
                    {cancelButton}
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
        const ulList = this.props.relatedDocList.map((item) => {
            return (
                <li key={item.id}>
                    <a href={item.essay_url} target="_blank">{item.essay_title}</a>
                    <p>{item.content}</p>
                </li>
            );
        });
        return (
            <div>
                <div>
                    <h1>Related Documents</h1>
                </div>
                <div>
                    <ul>{ulList}</ul>
                </div>
            </div>
        );
    }
}

export default Assistant;
