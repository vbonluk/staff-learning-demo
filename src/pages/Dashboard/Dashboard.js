import './css/Dashboard.css';
import React from 'react';
import TimeShower from '../Common/TimeShower/TimeShower'

class Dashboard extends React.Component {
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
            </div>
        );
    }
}

export default Dashboard;
