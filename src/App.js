import React, { Component } from 'react';
import Homepage from './Homepage';
import { observer } from 'mobx-react';

@observer
class App extends Component {
    render() {
        return (
            <div>
                <Homepage />
            </div>
        );
    }
}

export default App;