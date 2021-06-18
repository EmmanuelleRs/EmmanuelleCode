import React from 'react';
import styled from '@emotion/styled';

const Element =  styled.div`
width: 11px;
display: flex;
align-items: center;
justify-content: center;
margin: .5rem;

> div{
    font-size: 11px;
}
`;

const Frac = ({index, num, dem}) => {
    if (dem === 1 ) return 1
    return (
        
        <Element>
            <div>{index%2 === 0 ? '+' : '-'}</div>
            <div>
                <div>{num}</div>
                <div>{dem}</div>
            </div>
        </Element>
    );
}

export default Frac;