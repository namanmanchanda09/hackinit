'use strict'
import React, { Component } from "react";
import fire from './fire';
import firebase, { app } from 'firebase';
import store from "./Store";
import { observer } from 'mobx-react';

//------------------------SPEECH RECOGNITION-----------------------------

const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
const recognition = new SpeechRecognition()

recognition.continous = true
recognition.interimResults = true
recognition.lang = 'en-US'


//------------------------COMPONENT-----------------------------
@observer
class Speech extends Component {

    constructor() {
        super()
        this.state = {
            listening: false,
            write:'',
            isLoading: false
        }
        this.toggleListen = this.toggleListen.bind(this)
        this.handleListen = this.handleListen.bind(this)
    }

    componentDidMount(){
        this.setState({ isLoading: true })
        console.log(this.state.isLoading)
         fire.database().ref('users/' + store.curuser.uid).once('value', (snapshot)=> {
             var username = snapshot.val().content
            this.setState({
                write: username
            }) 
             this.setState({ isLoading: false })
             console.log('state changed')
             console.log(this.state.write)
        });
        document.getElementById('final').textContent += this.state.write;
        

    }

    toggleListen() {
        this.setState({
            listening: !this.state.listening
        }, this.handleListen)
    }

    handleListen() {

        console.log('listening?', this.state.listening)

        if(!this.state.listening){
            var temp=document.getElementById('final').textContent
            this.setState((prevState)=>({
                write:prevState.write + temp
            }))
            fire.database().ref('users/' + store.curuser.uid).update({
                content:this.state.write
            })
        }

        if (this.state.listening) {
            recognition.start()
            recognition.onend = () => {
                console.log("...continue listening...")
                recognition.start()
            }

        } else {
            recognition.stop()
            recognition.onend = () => {
                console.log("Stopped listening per click")
            }
        }

        recognition.onstart = () => {
            console.log("Listening!")
        }

        let finalTranscript = ''
        recognition.onresult = event => {
            let interimTranscript = ''

            for (let i = event.resultIndex; i < event.results.length; i++) {
                const transcript = event.results[i][0].transcript;
                if (event.results[i].isFinal) finalTranscript += transcript + ' ';
                else interimTranscript += transcript;
            }
            document.getElementById('interim').innerHTML = interimTranscript
            document.getElementById('final').innerHTML = finalTranscript
            console.log(finalTranscript)

            //-------------------------COMMANDS------------------------------------

            const transcriptArr = finalTranscript.split(' ')
            const stopCmd = transcriptArr.slice(-3, -1)
            console.log('stopCmd', stopCmd)

            if (stopCmd[0] === 'stop' && stopCmd[1] === 'listening') {
                recognition.stop()
                recognition.onend = () => {
                    console.log('Stopped listening per command')
                    const finalText = transcriptArr.slice(0, -3).join(' ')
                    document.getElementById('final').innerHTML = finalText
                }
            }
        }


        //-----------------------------------------------------------------------

        recognition.onerror = event => {
            console.log("Error occurred in recognition: " + event.error)
        }

    }

    render() {
        const { isLoading } = this.state
        return (
            <div style={container}>
                {
                    isLoading?<p>Loading....</p> : 
                        <div >
                            <button id='microphone-btn' style={button} onClick={this.toggleListen} />
                            <div id='interim' style={interim}></div>
                            <div id='final' style={final}></div>
                        </div>
                }
            </div>
            
        )
    }
}

export default Speech


//-------------------------CSS------------------------------------

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
    },
    button: {
        width: '60px',
        height: '60px',
        background: 'lightblue',
        borderRadius: '50%',
        margin: '6em 0 2em 0'
    },
    interim: {
        color: 'gray',
        border: '#ccc 1px solid',
        padding: '1em',
        margin: '1em',
        width: '300px'
    },
    final: {
        color: 'black',
        border: '#ccc 1px solid',
        padding: '1em',
        margin: '1em',
        width: '300px'
    }
}

const { container, button, interim, final } = styles