import logo from './logo.svg';
import './App.css';
import React from 'react';

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
                <h2>现在是 {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

class UserInputField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonText: "确定",
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
        this.setState(function (state) {
            return {buttonText: "加载中..."};
        });

        const input = this.state.userInput.replace(/\n/g, " ");
        const a = process.env.OPENAI_END_POINT

        const url = process.env.REACT_APP_OPENAI_END_POINT + "/openai/deployments/" + process.env.REACT_APP_OPENAI_DEPLOYMENT + "/embeddings?api-version=2023-05-15"
        const headers = {
            "Content-Type": "application/json",
            "api-key": process.env.REACT_APP_OPENAI_API_KEY
        }
        const body = JSON.stringify({
            "input": input
        })
        // https://jasonwatmore.com/post/2020/01/27/react-fetch-http-get-request-examples
        // https://zenn.dev/junki555/articles/4ab67fc78ce64c
        await fetch(url, {headers: headers, method: "POST", body: body})
            .then(response => {
                if (!response.ok) {
                    throw new Error(url + "\n" + response.status);
                }
                const json = response.json();
                const embedding = json.data[0].embedding;
                console.log(embedding)
            })
            .catch(error => {
                alert(error)
                this.setState({buttonText: "确定"})
            });
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Question</h1>
                </div>
                <div className="UserInputDiv">
                    <input className="UserInputField" placeholder="请输入你想问的" onChange={this.inputValueChange} value={this.state.userInput}/>
                    <button className="UserInputButton" onClick={this.clickConfirm}>{this.state.buttonText}</button>
                </div>
            </div>
        );
    }
}

function UserInputField2() {
    return (
        <div>
            <div>
                <h1>Question</h1>
            </div>
            <div className="UserInputDiv">
                <input className="UserInputField" placeholder={"请输入你想问的"}/>
                <button className="UserInputButton">确定</button>
            </div>
        </div>
        );
}

function AnswerText(props) {
    const answer = <p/>;

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
