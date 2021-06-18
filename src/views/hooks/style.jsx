import React from 'react'
import styled from '@emotion/styled';

export const Div = styled.div`
margin: 3rem auto;
padding: 1rem;
background-color: #010101;
border-radius: 10px;
overflow: hidden;
color: lightgray;
text-align: justify;
h1, h2{
    color:#fff;
}

h3, h4{
    color:#e1415f;
}

@media only screen and (max-width: 375px) {
    padding: 0;
  }

> div {
    width: 90%;
    margin: 3rem auto;

    @media only screen and (max-width: 375px) {
        width: 100%;
        margin: 3rem 0;
        padding: 1rem;
    }

    nav {
        color: lightgray;

        li {
            margin: .5rem;
            display: flex;
            align-items: center;
            font-size: .9em;

            img{
                width: 15px;
                margin: 1rem;
            }
        }
    }
}
`;

export const Code = styled.div`
width: 90%;
margin: 2rem auto;
p {
    margin: 1rem auto;
}
@media only screen and (max-width: 375px) {
    width: 100%;
  }
`;

export const Demo = styled.div`
width: 100%;
height: 55vh;
margin: auto;
display: flex;
justify-content: center;
background-color: #010101;
padding: 0 20px 20px 20px;
`;

export const Field = styled.div`
    flex-direction: row;
`;