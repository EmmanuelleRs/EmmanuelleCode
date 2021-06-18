import React from 'react';
import styled from '@emotion/styled';

const Square = styled.div`
width: 40px;
height: 40px;
display: flex;
align-items: center;
justify-content: center;
color: #fff;
background-color: #0f192a;
margin: 5px;
flex: 1;
cursor: pointer;
font-size: 10px;
font-weight: bold;
`;

const Element = ({currenElement, setcurrenElement, num, target, settarget, arrayOf, targetArray}) => {
    return (
        <Square onClick={() => {setcurrenElement(null); settarget(num)}} style={num === currenElement || target === num || arrayOf.includes(num) ? targetArray.includes(num) ? {backgroundColor: 'green'} : {backgroundColor: 'red'} : null}>
            {num}
        </Square>
    );
}

export default Element;