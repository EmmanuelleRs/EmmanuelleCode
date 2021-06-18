import React,{useState} from 'react';
import styled from '@emotion/styled';

import BubbleScreen from './bubble';
import Code from './code';



const Body = styled.div`
color: ghostwhite;
`;

const Nav = styled.nav`
list-style: none;
li {
    display: inline-block;
    vertical-align: middle;
    margin: 0 .5rem;

    button {
        color: ghostwhite;
        background-color: firebrick;
        padding: 5px 15px;
        font-weight: bold;
        border-radius: 5px;
        border: none;
        cursor: pointer;
    }
}
`;
const MainMerge = () => {

    const [render, setrender] = useState('render');

    return (
        <Body>
            <Nav>
                <li><h1>Merge Sort Algorythm</h1></li>
                <li><button onClick={() => setrender('render')}>Render</button></li>
                <li><button onClick={() => setrender('video')}>Video</button></li>
            </Nav>
            
            <BubbleScreen />
            <Code />
        </Body>
    );
}

export default MainMerge;
