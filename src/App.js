import './App.css';
import Chat from './components/Chat';
import SignIn from './components/SignIn';
import SendNickname from './components/SendNickname';


import { auth } from './firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth'

function App() {
  const [user] = useAuthState(auth)
  
  return (
    <>
    {user ? <Chat /> : <SignIn />}
    <SendNickname />
    
    </>
  );
}

export default App;
