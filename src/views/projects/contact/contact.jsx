import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {Div} from '../../hooks/style';
import styled from '@emotion/styled';
import { GeneralContext } from '../../../context/generalContext';
import axios from 'axios';

const Textarea = styled.textarea`
width: 60%;
background-color: #111;
border: none;
display: block;
margin: 1rem 0;
padding: 1rem;
outline: none;
color: #fff;
`;
const Input = styled.input`
width: 60%;
background-color: #111;
border: none;
display: block;
margin: 1rem 0;
padding: 1rem;
outline: none;
color: #fff;
`;
const Contact = () => {
    const {api_domain} = useContext(GeneralContext);
    const [succeded, setsucceded] = useState(false);
    const [data, setdata] = useState({
        sender: '',
        msg: '',
    })

    const msg_request = async () => {
        const res = await axios.post(api_domain + '/api/msg', data);

        if (res.data.succeded === true) setsucceded(true)

    }

    const setMsg = e => {
        setdata({
            ...data,
            [e.target.name]: e.target.value
        })
        
    }

    return (
        <Div>
            <h1>Thank for the call</h1>
            <div>
                <h2><i className="envelope icon"></i> Email</h2>
                <p>You can mail me on my email adress <a href="mailto:contacto@emmanuelleraya.com"><label className="ui tiny black label">contacto@emmanuelleraya.com</label></a></p>
                {succeded === true ?
                <div className="ui green inverted segment"><i className="circle check icon"></i>Message sent successfully</div>
                :(
                    <div className="">
                        <p>However yo can leave a message here and I will replay you as son as possible.</p>
                        <div className="field">
                            <h4>Sender:</h4>
                            <Input name="sender" onChange={setMsg} value={data.sender} type="text" placeholder="Yor email here"/>
                        </div>
                        <h4>Message:</h4>
                        <Textarea name="msg" onChange={setMsg} value={data.msg} rows={3} placeholder="Nice to meet you, place leve your Name following your message"></Textarea>
                        <button onClick={msg_request} disabled={data.sender.includes('@') && data.msg.trim() !== '' ? false : true} className="ui icon button primary"><i className="send icon"></i>Send</button> 
                    </div>
                )}
                
            </div>
                {/* <div>
                    <h3><i className="comments icon"></i> RealTime Chat</h3>
                    <p>Hi there! Please leave your message, We can char on realtime if you prefer :)</p>
                    <div>

                    </div>
                    <div>
                        <input type="text"/>
                        <div className="ui icon button primary"><i className="send icon"></i>Send</div>
                    </div>
                    
                </div> */}
        </Div>
    );
}
 
export default Contact;