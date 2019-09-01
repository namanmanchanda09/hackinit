import React, { Component } from 'react';
import fire from './fire';

class Book5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true })
        fire.database().ref("/books/book5").once('value', (snapshot) => {
            document.getElementById('b5').innerHTML = snapshot.val().content
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
                                <h2>Becoming Steve jobs</h2>
                                <div id="b5"></div>
                            </div>
                    }
                </div>
            </div>
        );
    }
}

export default Book5;