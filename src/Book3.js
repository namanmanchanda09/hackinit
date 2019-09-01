import React, { Component } from 'react';
import fire from './fire';

class Book3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true })
        fire.database().ref("/books/book3").once('value', (snapshot) => {
            document.getElementById('b3').innerHTML = snapshot.val().content
        });
        this.setState({ isLoading: false })
    }

    render() {
        const { isLoading } = this.state
        return (
            <div>
                <div>
                    {
                        isLoading ? <p>Loading...</p> :
                            <div>
                                <h2>The monk who sold his ferrai.</h2>
                                <div id="b3"></div>
                            </div>
                    }
                </div>
            </div>
        );
    }
}

export default Book3;