import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/midnight.css';
import {Code} from '../../hooks/style';
import {Link} from 'react-router-dom'

const Documentation = () => {
    const code = `
    const SearchOneD = async (arr, target, start, end) => {
        //Make sure don't make a infinite loop
        if (start === end) return false
        //Find the middle part of the array
        let mid = Math.floor((end + start )/ 2);
        let match = arr[mid];
        //Create the animation
        setelements(arr);
        await sleep(200);
        setcurrenElement(match);
        //Evaluate if go to left or go to the right recursively
        if (target === match) {
            setindex(mid);
            return;
        } else if (target < match) {
            return SearchOneD(arr, target, start, mid)
        } else {
            return SearchOneD(arr, target, mid, end)
        }
    }`

    const create = `
    useEffect(() => {
        const getRandomInt = () => {
            let min = 1;
            let max = 5;
            return Math.floor(Math.random() * (max - min) + min);
        }
    
        const createElements = () => {
            let c = 0;
            let currtNum = 0;
            let array = [];
            while (c < limit) {
                currtNum += getRandomInt();
                array.push(currtNum);
                c ++;
            }
            
            setelements(array);
        }

        createElements();
    }, [limit])`;

    const react = `
    import React, {useState, useEffect} from 'react';

    const export default ArrayVisualize = () => {
        const [limit, setlimit] = useState(10);
        const [elements, setelements] = useState([]);
        const [target, settarget] = useState(null);
        const [currenElement, setcurrenElement] = useState(null);
        const [index, setindex] = useState(null);

        return ()
    }
    
    `;

    const two = `
    const twoNumbersSum = async (array, target) => {
        let l = 0;
        let r = array.length - 1;
        let result = [];

        while (l < r) {
            let potentialMatch = array[l] + array[r];
            await sleep(200);
            setarrayOf([array[l], array[r]]);


            if (potentialMatch === parseInt(target)) {
                settargetArray([array[l], array[r]])
                result.push([array[l], array[r]]);
                l ++;
                r --;
            }
            
            else if(potentialMatch > parseInt(target)) r --;

            else l ++;
        }
    }`;

    const three = `
    const treeNumbersSort = async (array, target) => {

        let result = [];

        for (let i = 0; i < array.length; i ++){
            let l = i + 1;
            let r = array.length - 1;

            while (l < r) {
                let potentialMatch = array[i] + array[l] + array[r];
                setarrayOf([array[i], array[l], array[r]]);
                if (potentialMatch === parseInt(target)) {
                    settargetArray([array[i], array[l], array[r]])
                    result.push([array[i], array[l], array[r]]);
                    l ++;
                    r --;
                }
                else if(potentialMatch > parseInt(target)) r --;
    
                else l ++;
                await sleep(200);
            }
            
        }
    }`;
    return (
        <>
        <h1>Documentation</h1>
            <div>
                <h3>Creating a React Js Component</h3>
                <p>Create a react component and import <label className="ui black tiny label">UseState</label> and <label className="ui black tiny label">UseEffect</label> for making the visualization</p>
                <Code>
                    <CodeMirror
                        value={react}
                        options={{
                            theme: 'midnight',
                            keyMap: 'sublime',
                            mode: 'jsx',
                        }}
                    />

                </Code>
            </div>
            <div>
                <h3>Creating a new Sorted Array</h3>
                <p>Create a sorted array for running whichever binery search algorithms. Not sorted array? <Link to='/SortingAlgorithms'>Check this link</Link></p>
                <p>In order to create a no linear and unsorted matrix, use <label className="ui tiny black label">getRandomInt()</label> function for creating a random integrer between 1 and 5</p>
                <p>Add and storage an integrer into a variable, then add it into the <label className="ui tiny black label">Elements</label> array. It will create a sorted array with random integrers</p>
                <p>Create a new array with <label className="ui tiny black label">createElements()</label> everytime limit change</p>
                <Code>
                    <CodeMirror
                        value={create}
                        options={{
                            theme: 'midnight',
                            keyMap: 'sublime',
                            mode: 'jsx',
                        }}
                    />
                </Code>
            </div>      
            <div>
                <h3>Binary Search</h3>
                <Code>
                    <CodeMirror
                        value={code}
                        options={{
                            theme: 'midnight',
                            keyMap: 'sublime',
                            mode: 'jsx',
                        }}
                    />
                </Code>
            </div>
            <div>
                <h3>TwoNumberSum Algorithm</h3>
                <Code>
                    <CodeMirror
                        value={two}
                        options={{
                            theme: 'midnight',
                            keyMap: 'sublime',
                            mode: 'jsx',
                        }}
                    />
                </Code>
            </div>
            <div>
                <h3>ThreeNumberSum Algorithm</h3>
                <Code>
                    <CodeMirror
                        value={three}
                        options={{
                            theme: 'midnight',
                            keyMap: 'sublime',
                            mode: 'jsx',
                        }}
                    />
                </Code>
            </div>
        </>
    );
}

export default Documentation;