import {useState} from 'react';

const Messages = ({text}) =>{
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

    const [messages, setMessages] = useState([]);
    return <>
    <h1>
        Chat app
    </h1>
    {
        messages.map(
            (text, index) => <Message text={text} />
                
            )
    }
    <p>
        use our app 
    </p>
    <form onSubmit={(event) =>{
        event.preventDefault();

        // determine new message
        const new_message = event.target.incoming_text.value;
        //add new message to the message state
        setMessages([...messages, new_message]);
        //this is NOT best practice
        document.getElementById('incoming_text').value = '';

        console.log(event);
    }}>

    </form>
    <input name='incoming text' id='incoming text'/>
    <button type='submit'>
        send
    </button>
    
    </>;
}

export default App;