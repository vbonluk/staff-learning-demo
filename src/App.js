import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="HSBC-logo.jpg" className="App-logo"/>
      </header>
        <UserInputField/>
        <AnswerText answer="test"/>
        <RelatedDocuments relatedDocList={["Doc1","Doc2","Doc3"]}/>
    </div>
  );
}

function UserInputField() {
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
