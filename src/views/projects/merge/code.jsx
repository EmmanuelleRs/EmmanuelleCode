import React from 'react'
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/midnight.css';

const Code = () => {
    const code = `
    import React, {useState, useEffect} from 'react';


    const [elements, setelements] = useState([]);
    const [limit, setlimit] = useState(120);
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

    const quick_sort = async (arr, start, end) => {
        if (start >= end) return

        let index = await partition(arr, start, end);
        
        setcount(index);

        Promise.all([
            quick_sort(arr, start, index - 1),
            quick_sort(arr, index + 1, end)
        ]);

        setelements(arr);
        
    }

    const partition = async (arr, start, end) => {
        let pivotIndex = start;
        let pivotValue = arr[end];
        
        for(let i = start ; i < end; i ++){
            if (arr[i] < pivotValue){
                swap(arr, i, pivotIndex);
                
                pivotIndex++;
            }
        }
        swap(arr, pivotIndex, end);
        await sleep(200);
        return pivotIndex;
    }`;
    return (
        <>
        <h3>Code</h3>
        <p>Here is a useful part of the code. You can find it complete on Github</p>
        <CodeMirror
            value={code}
            options={{
                theme: 'midnight',
                keyMap: 'sublime',
                mode: 'jsx',
            }}
        />
        </>
    );
}
 
export default Code;