import React from "react";

class WorkingSpace extends React.Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {

    }
    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <div>
                    <h1>WorkingSpace: Embedding Studio</h1>
                </div>
                <div>
                    <h2>Step 1: Trigger a job</h2>
                    <div>
                        <h3>WebSite</h3>
                        <div>
                            <input placeholder="Please input your link"/>
                            <button>Attack</button>
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
                        <h3>2. Embedding</h3>
                        <p>Status:</p>
                    </div>
                    <div>
                        <h3>3. Data store</h3>
                        <p>Status:</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default WorkingSpace;
