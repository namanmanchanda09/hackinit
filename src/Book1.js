import React, { Component } from 'react';
import fire from './fire';

class Book1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        }
    }

    componentDidMount(){
        this.setState({ isLoading: true })
        fire.database().ref("/books/book1").once('value', (snapshot) => {
            document.getElementById('b1').innerHTML = snapshot.val().content
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
                                <h2>The Alchemist</h2>
                                <div id="b1"></div>
                            </div>
                    }
                </div>
            </div>
        );
    }
}

export default Book1;