import React, { Component } from 'react';
import fire from './fire';

class Book2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true })
        fire.database().ref("/books/book2").once('value', (snapshot) => {
            document.getElementById('b2').innerHTML = snapshot.val().content
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
                                <h2>Harry Potter and the prison of azkaban</h2>
                                <div id="b2"></div>
                            </div>
                    }
                </div>
            </div>
        );
    }
}

export default Book2;