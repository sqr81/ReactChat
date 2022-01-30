import React from 'react'
import { auth } from '../firebase.js'
import { Button } from '@material-ui/core'

function SignOut() {

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', position: 'fixed', width: '100%', backgroundColor: '#FAFAFA', top: 0, borderBottom: 'solid 1px lightgray', zIndex: '10'
        }}>
            <Button style={{ padding: 30, fontSize: '15px', borderRadius: '0', fontWeight: '600', width: 120, height: 20, backgroundColor:'orange', margin: 20, borderRadius: 8 }} onClick={() => auth.signOut()}>Sign Out</Button>
        </div>
    )
}

export default SignOut
