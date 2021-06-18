import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';

const Scre = styled.div`
width: 100%;
height: 55vh;
margin: auto;
display: flex;
justify-content: center;
background-color: #0f192a;
padding: 0 20px 20px 20px;
`;

const Bar = styled.div`
    width: 20px;
`;

const BubbleScreen = () => {
    const [elements, setelements] = useState([]);
    const [limit, setlimit] = useState(10);
    const [count, setcount] = useState(0);

    useEffect(() => {
        let c = 0;
        let array = [];

        while (c < limit) {
            array.push(getRandomInt());
            c ++;
        }

        setelements(array);

    }, []);

    const merge_sort = async (arr, left_start, right_end) => {
        if  (left_start > right_end) return

        let mid = Math.round((left_start + right_end) / 2);

        merge_sort(arr, left_start, mid);
        merge_sort(arr, mid + 1, right_end);
        merge(arr, left_start, right_end);
    }

    const merge = (arr, left_start, right_end) => {
        let left_end = (right_end + left_start) / 2;
        let right_start = left_end + 1;

        let left = left_start;
        let right = right_start;
        let index = left_start;

        while (left < left_end && right < right_end){
            if(arr[left] < arr[right]){
                swap(arr, index, left);
                left ++;
            }else {
                swap(arr, index, right);
                right ++;
            }
            index ++;
        }

        return arr
    }


    const swap = (arr, a, b) => {
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }

    const sleep = ms => {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    function getRandomInt() {
        let min = 0;
        let max = 100;

        return Math.floor(Math.random() * (max - min) + min);
    }

    return (
        <>
        
        
        <Scre>
            {
                elements.length > 0 ? elements.map(element => <Bar style={{height: `${element}%`, backgroundColor:`rgb(${255-element*4}, ${255- element}, ${255-element}`}}></Bar>) : null
            }

        </Scre>
        {
            elements.length > 0 ? <button onClick={() => merge_sort(elements, 0, limit)}>Bubble</button> : null
        }
        </>

    );
}

export default BubbleScreen;