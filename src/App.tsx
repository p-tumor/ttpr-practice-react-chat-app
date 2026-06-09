import {useState} from 'react';

const Message = ({text}) =>{
    return <>
        <p>
        {text}
         </p>
    </>;
}


const App = () => {
    /*
    const messages = [
        "pizza",
        "apples",
        "eggs"
    ]
    */

    const [messages, setMessages] = useState<string[]>([]);
    const [message, setMessage] = useState('')
    return <>
    <h1>
        Chat app
    </h1>
    {
        messages.map(
            (text, index) => <Message key={index} text={text} />
                
            )
    }
    <p>
        use our app 
    </p>
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