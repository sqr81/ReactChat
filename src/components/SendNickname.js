import React, { useState } from 'react'
import { db, auth } from '../firebase'
import firebase from 'firebase'
import { Button, Input } from '@material-ui/core'

function SendNickname() {
    const [nickname, setNickname] = useState('')

    function sendNickname(e) {
        e.preventDefault()
        //const { nickname} = auth.currentUser
        db.collection('nick').add({
            text: nickname,
            nickname,

            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setNickname('')

    }

    return (
        <form onSubmit={sendNickname}>
            <div className="nickname">
                <Input style={{ width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }} placeholder='Votre pseudo' type="text" value={nickname} onChange={e => setNickname(e.target.value)} />
                <Button style={{ width: '18%', fontSize: '15px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '200px' }} type="submit">Send</Button>
            </div>
        </form>
        
    )


}

export default SendNickname