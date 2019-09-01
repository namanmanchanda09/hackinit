import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'tachyons'


class Card extends Component{
    
// handleclick(){
//         fire.database().ref("books/book1").once('value', (snapshot) => {
//             document.getElementById('b1').innerHTML = snapshot.val().content  
//         });
// }
render(){
    return(
        <div className='tc'>
            <Link to="/">Home</Link>
            <br />


            
            <Link to="/dash/book1" className='bg-purple dib br3 pa3 ma2 grow bw2 shadow-5'>
            <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
                <h2>The Alchemist</h2>
                <p>Click me!</p>
            </div>
            </Link>


            


            <div className='bg-black dib br3 pa3 ma2 grow bw2 shadow-5'>
            <Link to="/dash/book2" className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>           
            <div>
                <h2>Harry Potter and the prison of azkaban</h2>
                <p>Click me!</p>
            </div>
            </Link>
            </div>


            <div className='bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            <Link to="/dash/book3" className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>          
            <div>
                <h2>The monk who sold his ferrai.</h2>
                <p>Click me!</p>
            </div>
            </Link></div>


            <div className='bg-light-red dib br3 pa3 ma2 grow bw2 shadow-5'>
            <Link to="/dash/book4" className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>   
            <div>
                <h2>The autobiography of a Yogi.</h2>
                <p>Click me!</p>
            </div>
            </Link></div>


            <div className='bg-purple dib br3 pa3 ma2 grow bw2 shadow-5'>
            <Link to="/dash/book5" className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>        
            <div>
                <h2>Becoming Steve jobs</h2>
                <p>Click me!</p>
            </div>
            </Link></div>


            <div className='bg-purple dib br3 pa3 ma2 grow bw2 shadow-5'>
            <Link to="/dash/book5" className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>        
            <div>
                <h2>The notebook</h2>
                <p>Click me!</p>
            </div>
            </Link></div>



            <div className='bg-purple dib br3 pa3 ma2 grow bw2 shadow-5'>
            <Link to="/dash/book3" className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>        
            <div>
                <h2>The story of my life</h2>
                <p>Click me!</p>
            </div>
            </Link></div>

        </div>

    );
}
}

export default Card;




