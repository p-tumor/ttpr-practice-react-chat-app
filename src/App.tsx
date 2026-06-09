import {useState} from 'react';
import './App.css';
import Message from './components/Message';
//import {faker} from "@faker-js/faker";
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
            ({text, name, timestamp}, index) => 
            <Message 
                key={index} 
                text={text}
                name={name}
                timestamp={timestamp} 
            />
        )
    }
    
    <form
        /*
        onSubmit={(event) =>{
        event.preventDefault();
        setMessages(prev => [...prev, message]);
        setMessage("");
        }}
        */
       onSubmit={(event) => {
        event.preventDefault();

        const new_message = event.target.incoming_text.value;
        //const name = faker.person.fullName();

        // @ts-expect-error
        setMessages([...messages,
            // @ts-expect-error
            {
                text: new_message,
                name: name,
                timestamp: new Date()
            }
        ]);

        // @ts-expect-error
        document.getElementById('incoming_text').value = '';
       }}

    >

    <input 
    //type='text' name="message" value={message} onChange={(e) => setMessage(e.target.value)}
       name  = 'incoming_text'
       id = 'incoming_text'
    />
    <button type='submit'>
        send
    </button>
    </form>
    
    </>;
}

export default App;