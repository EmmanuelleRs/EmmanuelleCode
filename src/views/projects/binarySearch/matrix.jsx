import React from 'react';
import styled from '@emotion/styled';

const Sqr = styled.div`
    width: 50px;
    height:50px;
    margin: 1px;
    position: absolute;
    background-color: royalblue;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const SearchOnMatrix = ({matrix, setcurrentMatrix, setmatrixTarget, currentMatrix, matrixTarget}) => {
    return (
        <div>
            {
            matrix.length > 0 ? (
                matrix.map((currElement_x, index_x) => (
                    currElement_x.map((currElement_y, index_y) => (
                        <Sqr onClick={() => {setcurrentMatrix(null); setmatrixTarget(null); setmatrixTarget(currElement_y)}} style={currentMatrix === currElement_y || matrixTarget === currElement_y ? {backgroundColor: 'red', top: 50 + (50 * index_x), left: 50 + (50 * index_y)} : {backgroundColor:`rgb(${0},${255 - currElement_y*2/3}, ${255 - currElement_y/2})`, top: 50 + (50 * index_x), left: 50 + (50 * index_y)}}>{currElement_y}</Sqr>
                    ))
                ))
            ) : null
            }
        </div>
    );
}

export default SearchOnMatrix;