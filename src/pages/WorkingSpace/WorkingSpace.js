import React from "react";
import {Scrape} from '../../Logic/ScrapeWebsite'
import * as Regex from '../../Utils/Regex'

class WorkingSpace extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            websiteUrl: "https://www.baidu.com/"
        }
        this.goScrape = this.goScrape.bind(this);
        this.inputValueChange = this.inputValueChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    componentDidMount() {

    }
    componentWillUnmount() {

    }

    inputValueChange(event) {
        this.setState({ websiteUrl: event.target.value })
    }

    goScrape() {
        if (!Regex.isWebUrl(this.state.websiteUrl)) {
            alert("Please input correct url")
            return
        }
        Scrape(this.state.websiteUrl);
    }

    handleKeyDown(event) {
        if (event.key === 'Enter') {
            this.goScrape()
        }
    }

    render() {
        return (
            <div>
                <div>
                    <h1>WorkingSpace: Feeding Studio</h1>
                    <p>This working space help you to fed data(e.g. Website, Doc, PDF, PPT) to vector database then GPT model can embedding your data and reply a great answer!</p>
                </div>
                <div>
                    <h2>Step 1: Trigger a job</h2>
                    <div>
                        <h3>WebSite</h3>
                        <div>
                            <input placeholder="Please input your link" value={this.websiteUrl} onKeyPress={this.handleKeyDown} onChange={this.inputValueChange} />
                            <button onClick={this.goScrape}>Scrape</button>
                        </div>
                    </div>
                    <div>
                        <h3>Doc</h3>
                        <div>
                            <input type="file" accept=".doc,.docx"/>
                            <button>Upload</button>
                        </div>
                    </div>
                    <div>
                        <h3>PDF</h3>
                        <div>
                            <input type="file" accept=".pdf"/>
                            <button>Upload</button>
                        </div>
                    </div>
                    <div>
                        <h3>PPT</h3>
                        <div>
                            <input type="file" accept=".ppt"/>
                            <button>Upload</button>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Step 2: Checking progress</h2>
                    <h3>Total:</h3>
                    <div>
                        <h3>1. Content Detect</h3>
                        <p>Status:</p>
                    </div>
                    <div>
                        <h3>2. Cutting Content</h3>
                        <p>Status:</p>
                    </div>
                    <div>
                        <h3>3. Embedding</h3>
                        <p>Status:</p>
                    </div>
                    <div>
                        <h3>4. Data Store</h3>
                        <p>Status:</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default WorkingSpace;
