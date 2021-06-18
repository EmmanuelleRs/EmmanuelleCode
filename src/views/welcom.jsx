import React, {createContext, useContext} from 'react';
import styled from '@emotion/styled';
import {Div} from './hooks/style';
import {GeneralContext} from '../context/generalContext';
import { Link } from 'react-router-dom';

const Card = styled.div`
margin: 1rem auto;
padding: 1rem;
display: flex;
align-items: center;
color: white;
background-color: #010101;
border-radius: 10px;
overflow: hidden;
box-shadow: 0px -1px 14px 0px rgba(0,0,0,0.7);
-webkit-box-shadow: 0px -1px 14px 0px rgba(0,0,0,0.7);
-moz-box-shadow: 0px -1px 14px 0px rgba(0,0,0,0.7);

@media only screen and (max-width: 375px) {
    flex-direction: column;
    >div {
        width: 90%;
        text-align: center;
    }
}

`;

const Title = styled.div`
    margin: 2rem;
    background: linear-gradient(to right, #010101, #010101 100%);

    h1{
        margin: 0;
        font-size: 72px;
        text-transform: uppercase;
        background: linear-gradient(to right, #e1415f 0%, red 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    @media only screen and (max-width: 375px) {
        h1 {
            font-size: 30px;
        }
    }

`;

const Img = styled.img`
clip-path: circle();
width: 250px;
`;

const BTN = styled.button`
background-color: #ffee00;
border: none;
font-weight: bold;
border-radius: 5px;
padding: .3rem 1rem;
cursor: pointer;
`;

const Welcome = () => {
    const {data, skills, api_domain} = useContext(GeneralContext);
    return (
        <>
        <Card>
            <Img alt="profile" src="https://firebasestorage.googleapis.com/v0/b/emmanuellecode.appspot.com/o/EmmanuelleRaya.jpg?alt=media&token=4275bca1-d51b-4d71-8627-5097ceeb8527"/>
            <Title>
                <label>Hi! Im</label>
                <h1>Emmanuelle Raya</h1>
                <p>I don't code because I have to, I code cause I love it <i className="heart icon"></i></p>
            </Title>
        </Card>
        <div className="ui red message">
            <h3>Attention</h3>
            <p>There are many bugs on the responsive desing. Please watch this site on a computer.</p>
        </div>
        
        <Div>
            {
            data !== null ? (
                <div>
                    <h1>Brief Resume</h1>
                    <h4>About Me</h4>
                    <p>{data.about}</p>
                    <BTN onClick={() => window.location = api_domain + '/api/downloadresume'}>Dowloads Resume</BTN>
                    <h4>Education and how did I learn to code</h4>
                    <p>{data.education}</p>
                    <h4>Contact</h4>
                    <nav>
                        <li><i className="map marker alternate icon"></i>{data.contactInfo.adress}</li>
                        {data.contactInfo['emails'].map(email => <li><i className="envelope icon"></i> {email}</li>)}
                        <li><i className="phone square icon"></i>{data.contactInfo.tel}</li>
                    </nav>
                    <Link to='/Contact'><BTN><i className="phone icon"></i> Contacto</BTN></Link>
                    <h4>About English</h4>
                    <nav>
                        <li><i className="comment alternate outline icon"></i> Speak: 50%</li>
                        <li><i className="assistive listening systems icon"></i> Listen: 80%</li>
                        <li><i className="paragraph icon"></i> Read: 80%</li>
                        <li><i className="pencil alternate icon"></i> Write: 80%</li>
                    </nav>
                    <h4>Some Courses</h4>
                    <nav>
                        <li>HTML desde cero: 100%</li>
                        <li>Python desde cero: 100%</li>
                        <li>Algoexpert: 20%</li>
                    </nav>
                    <h4>Some Code Skills</h4>
                    <nav>
                        {skills.map(skill => <li><img alt={skill.name} src={skill.img} />{skill.name}</li>)}
                    </nav>
                </div>
            ) : 
            (
            <div class="ui active dimmer">
                <div class="ui loader"></div> Fetching data
            </div>
            )
            }
            
        </Div>
        
        </>
    );
}

export default Welcome;