import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Homepage from './Homepage';
import { observer } from 'mobx-react';
import Bookpage from './Bookpage';
import Book1 from './Book1';
import Book2 from './Book2';
import Book3 from './Book3';
import Book4 from './Book4';
import Book5 from './Book5';

@observer
class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Route exact path='/' component={Homepage} />
                    <Route exact path='/dash' component={Bookpage} />
                    <Route exact path='/dash/book1' component={Book1} />
                    <Route exact path='/dash/book2' component={Book2} />
                    <Route exact path='/dash/book3' component={Book3} />
                    <Route exact path='/dash/book4' component={Book4} />
                    <Route exact path='/dash/book5' component={Book5} />
                </Router>
            </div>
        );
    }
}

export default App;