import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Homepage from './Homepage';
import { observer } from 'mobx-react';
import Bookpage from './Bookpage';

@observer
class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Route exact path='/' component={Homepage} />
                    <Route exact path='/dash' component={Bookpage} />
                </Router>
            </div>
        );
    }
}

export default App;