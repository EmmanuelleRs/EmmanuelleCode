import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Canvas from './canvas';

const Screen = styled.canvas`
width: 500px;
height: 500px;
margin: auto;
display: flex;
`;

const Dot = styled.div`
width: 1px;
height: 1px;
background-color: lightblue;
clip-path: circle();
position: relative;
`;

const Graph = () => {
    const [dots, setdots] = useState([]);

    const getPosition = () => {

    }

    useEffect(() => {
        const genDots = () => {
            let i = -250;
            let array = [];
            while (i < 250){
                array.push(i);
                i ++;
            }
            setdots(array)
        }
        genDots();

    },[])
    return (
        <Canvas />
    );
}
 
export default Graph;