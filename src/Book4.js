import React, { Component } from 'react';
import fire from './fire';

class Book4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true })
        fire.database().ref("/books/book4").once('value', (snapshot) => {
            document.getElementById('b4').innerHTML = snapshot.val().content
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
                                <h2>The autobiography of a Yogi.</h2>
                                <div id="b4"></div>
                            </div>
                    }
                </div>
            </div>
        );
    }
}

export default Book4;