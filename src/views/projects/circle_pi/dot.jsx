import React from 'react'
import styled from '@emotion/styled';

const Point = styled.div`
    width: 2px;
    height: 2px;
    border-radius: 50%; 
    position: absolute;
    transform: translate(-50%, -50%);
`;

const Dot = ({top, left, dim}) => {
    const radio = () => {
        const r = Math.sqrt(Math.pow(top, 2) + Math.pow(left, 2), 2);
        if(r < 1) return '#38e2f8'
        else return '#d80f2a'
    }

    return (
        <Point style={{transform:`translate(${top*100}px, ${left*100}px)`, backgroundColor: radio()}}></Point>
    );
}
 
export default Dot;