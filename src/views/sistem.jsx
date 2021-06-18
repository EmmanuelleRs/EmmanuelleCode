import React, { useContext } from 'react';
import {Div} from './hooks/style';
import {GeneralContext} from '../context/generalContext';

const System = () => {
    const {data, system} = useContext(GeneralContext);

    return (
        <Div>
            <h1 className="ui header inverted">Updates and Commits
                <div className="sub header">Here you can find all the updates I have made on my web site</div>
            </h1>
            <label className="ui mini black label"><i className={system === true ? "green circle icon" : "red circle icon"}></i> Server Conection</label>
            
            <div>
                <h2>Next Goals</h2>
                <nav>
                    <li>Path Finder Algorythms</li>
                    <li>Fetching algorythms documentatition from the api</li>
                    <li>Return all semi sorted arrays from the api</li>
                    <li>Return sorthing documentation from API</li>
                    <li>Fix Responsive Design issues</li>
                </nav>
            </div>
            <div>
                <h4>Creating a API</h4>
                <nav>
                    <li>Add the correct documentation for sorting algorithms</li>
                </nav>
            </div>
            <div>
                <h4>Creating a API</h4>
                <nav>
                    <li>Develop an API for downloading all information from my database on <label className="ui tiny black label">firestorage</label></li>
                </nav>
            </div>
            <div>
                <h4>Create a Style Hook</h4>
                <nav>
                    <li>Pick colors for the site and messures</li>
                    <li>Create a style hook to make a homogenius site</li>
                </nav>
            </div>
            <div>
                <h4>First Update</h4>
                <nav>
                    <li>Update the sorting algorithms functions</li>
                    <li>Set the pivot index for vizualizing better</li>
                </nav>
            </div>
            <div>
                <h4>Create the ReactJs app</h4>
                <nav>
                    <li>npx create-react-app</li>
                    <li>npm install <label className="ui tiny black label">react-router-dom</label> </li>
                    <li>use <label className="ui tiny black label">Semantic UI cdn</label></li>
                    <li>Code recursive functions for sortong algorithms</li>
                    <li>Create the animation whit the React UseState</li>
                </nav>
            </div>
        </Div>

    );
}
 
export default System;