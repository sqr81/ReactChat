import React, { useState, useEffect, useRef } from 'react'
import { db, auth } from '../firebase'
import SendMessage from './SendMessage'
import SendNickname from './SendNickname'
import SignOut from './SignOut'

function Chat() {
    const scroll = useRef()
    const [messages, setMessages] = useState([])
    const [nickname, setNickname] = useState([])
    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
        db.collection('nick').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setNickname(snapshot.docs.map(doc => doc.data()))
        })
    }, [])
    return (
        <div>
        <SendNickname />
            <SignOut />
            <div className="msgs">
                {messages.map(({ id, text, photoURL, uid, nickname}) => (
                    <div>
                        <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                            <img src={photoURL} alt="" />
                            <p>{text}</p>
                            <div style={{ fontSize: '10px'}}>
                           
                            <p>de {nickname}</p>
                            </div>
                        </div>
                    </div>
                ))}
                <h4>Utilisateurs:</h4>
                <ul>
                {nickname.map(({nickname}) =>(
                    <li>{nickname}</li>
                    ))}
                </ul>
            </div>
            <SendMessage scroll={scroll} />
            <div ref={scroll}></div>
        </div>
    )
}

export default Chat