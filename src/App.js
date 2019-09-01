import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Homepage from './Homepage';
import { observer } from 'mobx-react';
import Bookpage from './Bookpage';
import Book1 from './Book1';

@observer
class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Route exact path='/' component={Homepage} />
                    <Route exact path='/dash' component={Bookpage} />
                    <Route exact path='/dash/book1' component={Book1} />
                </Router>
            </div>
        );
    }
}

export default App;