import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Card extends Component{
    
// handleclick(){
//         fire.database().ref("books/book1").once('value', (snapshot) => {
//             document.getElementById('b1').innerHTML = snapshot.val().content  
//         });
// }
render(){
    return(
        <div>
            <Link to="/">Home</Link>

            <Link to="/dash/book1" className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <div>
                <h2>The Alchemist</h2>
                <p>Click me!</p>
            </div>
            </Link>

            <Link to="/dash/book2" className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>           
            <div>
                <h2>Harry Potter and the prison of azkaban</h2>
                <p>Click me!</p>
            </div>
            </Link>


            <Link to="/dash/book3" className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>          
            <div>
                <h2>The monk who sold his ferrai.</h2>
                <p>Click me!</p>
            </div>
            </Link>



            <Link to="/dash/book4" className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>   
            <div>
                <h2>The autobiography of a Yogi.</h2>
                <p>Click me!</p>
            </div>
            </Link>



            <Link to="/dash/book5" className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>        
            <div>
                <h2>Becoming Steve jobs</h2>
                <p>Click me!</p>
            </div>
            </Link>

        </div>

    );
}
}

export default Card;




