import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';

import Dot from './dot';

const Radio = styled.div`
    width: 100%;
    height: 100%;
    border: solid .2px  #7e7e7e;
    border-radius: 50%;
    
`;

const Square = styled.div`
    width: 200px;
    height: 200px;
    border: solid .2px #7e7e7e;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Circle = () => {
    const [dim, setdim] = useState(200);
    const [dots, setdots] = useState([]);
    const [pi, setpi] = useState(3.14);
    const [limit, setlimit] = useState(5)

    const vector = () => {
        const min = -1;
        const max = 1;
        const x = min + Math.random() * (max - min);
        const y = min + Math.random() * (max - min);
        return [x, y]
    };

    const generateValues = () => {
        let j = 0;
        let arry = [];

        while(j < limit){
            arry.push(vector())
            j ++;
        }

        setdots(arry)
    }
    
    

    useEffect(() => {
        const stimatePi = () =>{
            let red_dots = 0;

            for(let i = 0; i < dots.length; i ++){
                const r = Math.sqrt(Math.pow(dots[i][0], 2) + Math.pow(dots[i][1], 2), 2);
                if( r < 1){
                    red_dots ++;
                }
            }

            setpi(4 * red_dots/dots.length)
        }

        generateValues();
        stimatePi();

    }, [limit])

    return (
        <>
        {
            dots.map( dot => (
                <Dot
                    top={dot[0]}
                    left={dot[1]}
                    dim={dim}/>
            ))
        }
        <Square id="sqr">
            <Radio>       
            </Radio>  
        </Square>
        <h1>{pi}</h1>
        <input onChange={e => setlimit(e.target.value)} type="range" value={limit} min="1" max="10000"/>
        </>
    );
}

export default Circle;