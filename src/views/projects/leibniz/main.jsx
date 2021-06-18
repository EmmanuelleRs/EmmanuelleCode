import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import { MathComponent } from 'mathjax-react'
import Frac from './frac';

const Div = styled.div`
display: flex;
align-items: center;
overflow-y: scroll;

input{
    width: 50%;
}
`;

const Leibniz = () => {
    const [nums, setnums] = useState([]);
    const [pi, setpi] = useState(0);
    const [limit, setlimit] = useState(5)
    const range = e => {
        setlimit(e.target.value)
    }

    useEffect(() => {

        const sgn = n => {
            return Math.pow(-1, n)
        }

        const sum = arr => {
            let c = 0;
            let count = 0;
    
            while( c < arr.length){
                count += sgn(c)*(1/arr[c]);
                c++
            }

            setpi(4*count)
        }

        const serie = (n) => {
            let c = 1;
            let arr = [];

            while (c <= n){
                arr.push(2*c - 1);
                c ++;
            }

            setnums(arr)
        }
        serie(limit)
        sum(nums)

    }, [pi, limit])

    return (
        <>
        <MathComponent tex={String.raw`\sum_{n=0}^\infty \frac{(-1)^n}{2n+1}`} />
        {limit} <input onChange={range} type="range" max="200" min="0" value={limit}/> 
        <h1><MathComponent tex={String.raw`\pi \approx ${pi}`} /></h1>
        <Div>
            {
            nums.map((num, index) =>(<Frac index={index} num={1} dem={num} />))
            }
        </Div>
        </>
    );
}

export default Leibniz;