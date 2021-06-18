import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import Element from './element';
import {Div} from '../../hooks/style';
import {sleep} from '../sorting/functions';
import Documentation from './doc';

const Screen = styled.div`
height: 40vh;
display: flex;
align-items: center;
justify-content: center;
`;

const SearchOnArray = () => {
    const [limit, setlimit] = useState(10);
    const [elements, setelements] = useState([]);
    const [target, settarget] = useState('');
    const [currenElement, setcurrenElement] = useState(null);
    const [arrayOf, setarrayOf] = useState([])
    const [targetArray, settargetArray] = useState([])
    const [algo, setalgo] = useState();
    const [result, setresult] = useState('');
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
    }, [limit])


    const searchOneD = async (arr, target, start, end) => {
        settargetArray([]);

        if (start === end) return

        let mid = Math.floor((end + start )/ 2);
        let match = arr[mid];

        setelements(arr);
        await sleep(200);
        setcurrenElement(match);
        if (target === match) {
            setresult('Target found on ' + mid + ' index')
            return;
        } else if (target < match) {
            return searchOneD(arr, target, start, mid)
        } else {
            return searchOneD(arr, target, mid, end)
        }
    }

    const shifft = array => {
        let toMove = array.length - 1;
        let i = 0;
        let result = [];

        while (i < array.length) {
            let newIndex = (i + toMove) % array.length;
            result.push(array[newIndex])
            i ++;
        }
        setelements(result)
    }

    const twoNumbersSum = async (array, target) => {
        let l = 0;
        let r = array.length - 1;
        let result = [];

        setcurrenElement(null);

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
        
        setresult(JSON.stringify(result))
    }

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
        setresult(JSON.stringify(result));
    }

    const finalFunction = () => {
        if (algo === 'binarySearch') searchOneD(elements, target, 0, elements.length - 1);

        else if( algo === 'twoNumberSum') twoNumbersSum(elements, target);

        else if( algo === 'threeNumerSum') treeNumbersSort(elements, target);

        else alert('Eliga algorimo')
    }

    return (
        <>
        <Div>
            <h1>Arrays</h1>
            <div>
                <nav>
                    <li>Select the number of elements into the array and a algorithm for visualizing</li>
                    <li><label className="ui tiny black label">Binary Search</label>Classical Binary Search Algorithm</li>
                    <li><label className="ui tiny black label">Two Numbers Sum</label> Find all posible 2 numbers combination for a target sum into the array</li>
                    <li><label className="ui tiny black label">Three Numbers Sum</label> Find all posible 3 numbers combination for a target sum into the array</li>
                    <li>Click on Search button <label className="ui tiny black label"><i className="search icon"></i></label></li>
                </nav>
             </div>
             <div className="ui black message">
                 <div className="ui inverted header">Attention</div>
                 <p>There are some bugs that have to be fixed</p>
             </div>
        </Div>
        <Div>
            <div style={{backgroundColor: '#010101'}} className="ui inverted menu">
                <div className="item">
                    {limit} Elements <input type="range" min="5" max="25" value={limit} onChange={e => setlimit(e.target.value)} />
                </div>
                <div className="item">
                    <select onChange={ e => setalgo(e.target.value)} style={{backgroundColor:'#010101', color: '#fff', outline: 'none', padding: '1rem', border: 'none'}}>
                        <option value={null} >Select a Algorithm</option>
                        <option value="binarySearch">Binary Search</option>
                        <option value="twoNumberSum">Two numbers sum</option>
                        <option value="threeNumerSum">Tree numbers sum</option>
                    </select>
                </div>
                <div className="item">
                    <input value={target} onChange={e => settarget(e.target.value)} style={{backgroundColor:'#010101', color: '#fff', outline: 'none', padding: '1rem', border: 'none'}} placeholder="eg. 43"></input>
                </div>
                <div className="item">
                    <button disabled={target === null ? true : false} onClick={finalFunction} className="ui primary icon button"><i className="search icon"></i></button>
                </div>
            </div>

            <Screen>
            {
                (elements.length > 0) ? (
                    elements.map(num => <Element key={num} target={target} settarget={settarget} currenElement={currenElement} setcurrenElement={setcurrenElement} num={num} arrayOf={arrayOf} targetArray={targetArray}/>)
                ) : null
            }
            
            </Screen>
        </Div>
        <Div>
            <h3>Result</h3>
            {result}
        </Div>
        
        
        <Div>
            <Documentation />
        </Div>
        </>
    );
}

export default SearchOnArray;