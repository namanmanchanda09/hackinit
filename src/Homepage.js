import React, { Component } from 'react';
import { observer } from 'mobx-react';
import firebase, { app } from 'firebase';
import { Link } from 'react-router-dom';
import store from './Store';
import Loginbtn from './Loginbtn';
import Speech from './Speech';
import 'tachyons';

@observer
class Homepage extends Component {
    constructor(props){
        super(props);
        this.state={
            showDash:false
        }
    }
   
    _signOut() {
        firebase.auth().signOut().then(function () {
            console.log("signed out")
        }).catch(function (error) {
            console.log("could not sign out")
        });
        window.location.reload()
    }
    handleclick(){
        this.setState({
            showDash:true
        })
    }

    render() {
        return (
            <div>
                {
                    store.isLoggedin ?
                        <div>
                            <div className='header tc'>
                                {
                                    store.curuser ?
                                        <h1 style={{ margin: 'auto 0' }}>{store.curuser.displayName}</h1>
                                        : null
                                }
                                <button onClick={() => this._signOut()} style={{ borderRadius: '8px' }} className='f6 link dim dr3 ph3 pv2 mb2 white bg-purple tc'>Sign Out</button>
                                <Link to="/dash" style={{ borderRadius: '8px' }} className='f6 link dim dr3 ph3 pv2 mb2 white bg-purple tc'>Dashboard</Link>
                               <div>
                                {
                                    store.curuser ? <Speech /> : null
                                }
                               </div>
                                
                            </div>
                        </div>
                        :
                        <Loginbtn />
                }
            </div>
        );
    }
}

export default Homepage;