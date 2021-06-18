import React, {useState, useEffect} from 'react';
import {getRandomInt, bubble, insertion, selection, partition, swap, sleep, color} from './functions';
import styled from '@emotion/styled';
import {Div, Demo} from '../../hooks/style';
import Doc from './doc';



const Bar = styled.div`
width: 20px;
`;

const SortingAlgo = () => {
    const [limit, setlimit] = useState(50);
    const [elements, setelements] = useState([]);
    const [count, setcount] = useState(0);
    const [background, setbackground] = useState('blue');
    const [dataState, setdataState] = useState('bubble');
    const [curretElement, setcurretElement] = useState(null);

    const createElements = () => {
        let c = 0;
        let array = [];
        while (array.length < limit) {
            let val = getRandomInt();
            if(!(array.includes(val))){
                array.push(val);
            }
            c ++;
        }
        setelements(array);
    }

    useEffect(() => {
        createElements();
    }, [limit])

    const bubbleSort = async (arr, index) => {
        if (index >= arr.length - 1) return;

        let semisort = await bubble(arr, index);

        setcount(index);
        bubbleSort(semisort, index + 1)
        setelements(semisort);
    }

    const newBubble = async array => {
        let i = 0;
        while (i < array.length){
            let j = 0;
            while (j < array.length - i){
                if(array[j] > array[j + 1]) {
                    swap (array, j, j + 1);
                    await sleep(30);
                    setelements(array);
                    setcurretElement(array[j]);
                };
                j ++;
            }
            i ++;
        }
    }

    const newInsertion = async array => {
        let i = 0;
        while (i < array.length){
            if(array[i] > array[i + 1]){
                let j = i + 1;
                while(j > 0){
                    if(array[j] < array[j - 1]){
                        swap(array, j, j - 1);
                        setcurretElement(array[j]);
                        await sleep(30);
                        setelements(array);
                        j -= 1;
                    }else{
                        j = 0;
                        break
                    }
                }
            }
            i ++;
        }
        setelements(array);
    }

    const newSelection =async array => {
        let i = 0;
        while (i < array.length){
            let j = i + 1;
            while (j < array.length){
                let target = array[i];
                if(target > array[j]){
                    swap(array, i, j);
                    setcurretElement(array[j]);
                    await sleep(30);
                    setelements(array);
                }
                j ++;
            }
            i ++;
        }
    }

    const insertion_sort = async (arr, index) => {
        if (index > arr.length - 2) return

        let semisorted = await insertion(arr, index);
        setcount(index);
        await insertion_sort(semisorted, index + 1);
        setelements(semisorted)
    }

    const selection_sort = async (arr, index) => {
        if (index > arr.length ) return

        let newArr = await selection(arr, index);
        setelements(newArr);
        selection_sort(newArr, index + 1);
        setcount(index)
    }

    const quick_sort = async (arr, start, end) => {
        if (start >= end) return
        let index = await partition(arr, start, end);
        setcurretElement(arr[index])
        setcount(index);
        Promise.all([
            quick_sort(arr, start, index - 1),
            quick_sort(arr, index + 1, end)
        ]);
        setelements(arr);
    }

    function mergeSort(array) {
        if(array.length <= 1) {
            setcount(count + 1);
            return array
        };
        const mid = Math.floor(array.length / 2);
        const leftHalf = array.slice(0, mid);
        const rightHalf = array.slice(mid);
        
        return mergeHalves(mergeSort(leftHalf), mergeSort(rightHalf))
    }
    
    function mergeHalves(leftHalf, rightHalf) {
        const sortedArray = new Array(leftHalf.length + rightHalf.length);
        let i = 0;
        let j = 0;
        let k = 0;
        
        while (i < leftHalf.length && j < rightHalf.length) {
            if (leftHalf[i] <= rightHalf[j]) {
                sortedArray[k ++] = leftHalf[i ++];
            } else {
                sortedArray[k ++] = rightHalf[j ++]
            }
        }
        
        while (i < leftHalf.length) {
            sortedArray[k ++] = leftHalf[i ++]
        }
        while (j < rightHalf.length) {
            sortedArray[k ++] = rightHalf[j ++]
        }
        if (sortedArray.length === limit) setelements(sortedArray)
        return sortedArray
    }

    const heapSort = async array => {
        buildMaxHeap(array);
        
        for (let endIdx = array.length - 1; endIdx > 0; endIdx --){
            swap(array, 0, endIdx);
            siftDown(array, 0, endIdx - 1);
            await sleep(20);
            setelements(array);
            setcurretElement(endIdx);
        }
    }

    const buildMaxHeap = async array => {
        const firstParentIdx = Math.floor((array.length - 2) / 2);
        for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx --){
            
            siftDown(array, currentIdx, array.length - 1);
        }
    }

    const siftDown = async (array, currentIdx, endIdx) => {
        let childOneIdx = currentIdx * 2 + 1;
        while (childOneIdx <= endIdx) {
            let childTwoIdx = currentIdx * 2 + 2 < endIdx ? currentIdx * 2 + 2 : -1;
            let idxToSwap;
            if(childTwoIdx !== - 1 && array[childTwoIdx] > array[childOneIdx]){
                idxToSwap = childTwoIdx;
            } else {
                idxToSwap = childOneIdx;
            }
            setcurretElement(idxToSwap);
            if(array[idxToSwap] > array[currentIdx]){
                swap(array, idxToSwap, currentIdx);
                currentIdx = idxToSwap;
                childOneIdx = currentIdx * 2 + 1;
            }else {
                return
            }
        }
        
    }

    

    return (
        
        <>
            
            <Div>
                <h1>Sorting Algorithms</h1>
                <div>
                    <nav>
                        <li>Select the number (from 0 to 100) of random elements on the array</li>
                        <li>Pick a color <i className="ui blue circle icon"></i> <i className="ui red circle icon"></i> <i className="ui green circle icon"></i></li>
                        <li>Select a sorting algorithm for visualizing</li>
                        <li>Want to visualize another method? restart the elements <label className="ui black mini label"><i className="redo icon"></i></label></li>
                    </nav>
                </div>

            </Div>
            <Div>
                <h2>Demo</h2>
                <div className="ui secondary inverted black menu">
                    <div className="right menu">
                        <div className="item">
                            <input onChange={e => setlimit(e.target.value)} type="range" min="5" max="100" value={limit}/>
                        </div>
                        <div className="ui inverted form">
                            <div className="field">
                                <select style={{backgroundColor: '#222', color: '#fff', outline: 'none'}}  onChange={e => setbackground(e.target.value)}>
                                    <option>Pick a color</option>
                                    <option value="red">Red</option>
                                    <option value="green">Green</option>
                                    <option value="blue">Blue</option>
                                </select>
                            </div>                        
                        </div>
                        <div className="item">
                            <button onClick={createElements} className="ui mini black icon button"><i className="redo icon"></i></button>
                        </div>
                    </div>
                </div>
                <Demo>{elements.length > 0 ? elements.map(element => <Bar style={color(background, element, curretElement)}></Bar>) : null}</Demo>
                <div className={`ui ${background} fluid  attached buttons`}>
                    <button onClick={() => {newBubble(elements); setdataState('bubble')}} className="ui button">Bubble Sort</button>
                    <button onClick={() => {newInsertion(elements); setdataState('insertion')}} className="ui button">Insertion Sort</button>
                    <button onClick={() => {newSelection(elements); setdataState('selection')}} className="ui button">Selection Sort</button>
                    <button onClick={() => {quick_sort(elements, 0, limit - 1); setdataState('quick')}} className="ui button">Quick Sort</button>
                    <button onClick={() => {heapSort(elements); setdataState('heap')}} className="ui button">Heap Sort</button>
                    <button onClick={() => quick_sort(elements, 0, limit - 1)} className="ui disabled button">Radix Sort</button>
                    <button onClick={() => {mergeSort(elements); setdataState('merge')}} className="ui button">Merge Sort</button>
                </div>
            </Div>
            
            
            


            
            <Doc dataState={dataState}/>
            
            
        </>
        
    );
}

export default SortingAlgo;
