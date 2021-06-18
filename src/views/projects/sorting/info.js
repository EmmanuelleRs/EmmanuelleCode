export const data = {
    bubble: {
        name: 'Bubble Sort',
        bigO: 'O(n^2)',
        red: 'Bubble sort is a basic sorting algorithm',
        code:`

        const bubbleSort = async (arr, index) => {
            if (index >= arr.length - 1) return;
    
            let semisort = await bubble(arr, index);
    
            setcount(index);
            bubbleSort(semisort, index + 1)
            setelements(semisort);
        }
    
        const bubble = async (arr, index) => {
            let c = 0;
    
            while(c < arr.length - index - 1){
                if(arr[c] > arr[ c+ 1]){
                    swap(arr, c, c + 1)
                }
                c ++;
            }
    
            await sleep(100)
    
            return arr
        }`,
    },
    insertion: {
        name: 'Insertion Sort',
        bigO: 'O(n^2)',
        red: '...',
        code: `
        const insertion_sort = async (arr, index) => {
            if (index > arr.length - 2) return
    
            let semisorted = await insertion(arr, index);
            setcount(index);
            await insertion_sort(semisorted, index + 1);
            setelements(semisorted)
        }
    
        const insertion = async (arr, index) => {
            if (arr[index] > arr[index + 1]){
                let k = index + 1;
                while (k > 0){
                    if(arr[k] < arr[k - 1]){
                        swap(arr, k, k - 1)
                        k -= 1;
                    }else{
                        k = 0;
                        break
                    }
    
                }
            }
    
            await sleep(100);
    
            return arr
        }`,
    },
    selection: {
        name: 'Selection Sort',
        bigO: 'O(n^2)',
        code: `

        const selection_sort = async (arr, index) => {
            if (index > arr.length ) return
    
            let newArr = await selection(arr, index);
            setelements(newArr);
            selection_sort(newArr, index + 1);
            setcount(index)
        }

        const selection = async (arr, index) => {
            let j = index + 1;
            let inf = arr[index];
        
            while (j < arr.length) {
                if (arr[j] < inf) {
                    inf = arr[j];
                    swap(arr, index, j)
                }
                j ++;
            };
            await sleep(100)
            
            return arr
        }`
    },
    quick: {
        name: 'Quick Sort',
        bigO: 'O(n·Log n)',
        code: `
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
        }
        `,
    },
    heap: {
        name: 'Heap Sort',
        bigO: 'O(n·Log n)',
        red: 'This algorithm is based on graphs, in fact heaps',
        code:`
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
            
        }`
    },
    merge: {
        name: 'Merge Sort',
        bigO: 'O(n·Log n)',
        red: 'This algorithm is recursive end linear methods.',
        code:`
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
        }`,
    },
}

export const info = {
    create: `
    import React, {useState, useEffect} from 'react';
    

    export default const SortingAlgo = () => {
        const [limit, setlimit] = useState(99);
        const [elements, setelements] = useState([]);
        const [background, setbackground] = useState('blue');
        const [curretElement, setcurretElement] = useState(null);
        
        return ()
    }
    `,
    newarray: `
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
    }, [limit])`,
}