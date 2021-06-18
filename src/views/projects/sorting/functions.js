export const swap = (arr, a, b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

export const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export const getRandomInt = () => {
    let min = 0;
    let max = 100;

    return Math.floor(Math.random() * (max - min) + min);
}

export const bubble = async (arr, index) => {
    let c = 0;

    while(c < arr.length - index - 1){
        if(arr[c] > arr[ c+ 1]){
            swap(arr, c, c + 1)
        }
        c ++;
    }

    await sleep(100)

    return arr
}

export const insertion = async (arr, index) => {
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
}

export const selection = async (arr, index) => {
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
}

export const partition = async (arr, start, end) => {
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

export const color = (rgb, element, curretElement) => {
    let style = {height: `${element}%`, backgroundColor:`rgb(0, ${255 - element * 5 / 2}, 255`};
    

    if (rgb === 'red') style = {height: `${element}%`, backgroundColor:`rgb(255, ${255 - element * 5 / 2}, ${0}`};

    else if (rgb === 'green')  style = {height: `${element}%`, backgroundColor:`rgb(${0}, ${255- element*2}, ${element}`};
    
    if(element === curretElement) style= {height: `${element}%`, backgroundColor: 'red'}
    return style
}