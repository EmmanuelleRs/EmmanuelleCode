import React from 'react';
import SearchOnArray from './1d';

const BinarySearch = () => {

    // const createMatrix = () => {
    //     let i = 0;
    //     let arr = new Array(limit);
    //     let num = 0;
    //     for (let c = 0; c < limit; c ++) {
    //         arr[c] = new Array(limit)
    //     }

    //     while (i < limit) {
    //         let j = 0;
            
    //         while (j < limit) {
    //             arr[i][j] = num += getRandomInt();
    //             j += 1;
    //         }
    //         i += 1;
    //     }
    //     setmatrix(arr)
    // }

    // const searchTwoD = async (arr, target) => {
    //     let i = 0;
    //     let j = limit - 1;

    //     while (i < arr.length && j < arr.length) {
    //         if (arr[i][j] < target) {
    //             await sleep(200)
    //             setcurrentMatrix(arr[i][j])
    //             i ++;
    //         }
    //         else if (arr[i][j] > target) {
    //             await sleep(200);
    //             setcurrentMatrix(arr[i][j]);
    //             j --;
    //         }
    //         else {
    //             setcurrentMatrix(arr[i][j]);
    //             break 
    //         }
    //     }
    //     setcurrentMatrix(arr[i][j])
    // }


    return (
            <SearchOnArray/>
    );
}

export default BinarySearch;