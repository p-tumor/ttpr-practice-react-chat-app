import {useState} from 'react';
import './App.css';
import Message from './components/Message';
/*
const Message = ({text}) =>{
    return <>
        <p>
        {text}
        </p>
    </>;
}
*/

const App = () => {

    const [messages, setMessages] = useState([]);
    //const [messages, setMessages] = useState<string[]>([]);
    //const [message, setMessage] = useState('');
    return <>
    <h1>
        Chat Room
    </h1>
    <p>
        Use our app!!
    </p>
    {
        messages.map(
            (text, index) => <Message key={index} text={text} />
        )
    }
    
    <form  onSubmit={(event) =>{
        event.preventDefault();
        setMessages(prev => [...prev, message]);
        setMessage("");
    }}>

    <input type='text' name="message" value={message} onChange={(e) => setMessage(e.target.value)}/>
    <button type='submit'>
        send
    </button>
    </form>
    
    </>;
}

export default App;