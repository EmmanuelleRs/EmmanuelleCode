import React from 'react'
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/midnight.css';
import {Div, Code} from '../../hooks/style';
import {data, info} from './info'

const Doc = ({dataState}) => {
    return (
        <Div>
            <h2>Documentation</h2>
            <div>
                <h3>Create the React Js component</h3>
                <p>Import <label className="ui tiny black label">useState</label> and <label className="ui tiny black label">useEffect</label> Import useState and useEffect, then define some useful states for making the animation</p>
                <nav>
                    <li>Use <label className="ui black mini label">limit</label> for controlling the number of elements into the array</li>
                    <li>Use <label className="ui black mini label">elements</label> to storage the random numbers to sort</li>
                    <li>Use <label className="ui black mini label">background</label> to set the color animation</li>
                    <li>Use <label className="ui black mini label">currentelement</label>to manage the pivot (Where the loop is)</li>
                </nav>
                <Code>
                <CodeMirror
                    value={info.create}
                    options={{
                        theme: 'midnight',
                        keyMap: 'sublime',
                        mode: 'jsx',
                    }}
                />
                </Code>

            </div>
            <div>
                <h3>Creating a new random Array</h3>
                <p>For the first step, we consider that any value into the array is unique. So we add a random number only and only if is not in the <label className="ui tiny black label">elements</label> array. Use <label className="ui black tiny label">includes()</label> method to append if and only if the random item is not inside <label className="ui tiny black label">elements</label></p>
                <p>Change the app state with <label className="ui tiny black label">UseEffect</label> to create new elements on the array when the limit changes</p>
                <Code>
                    <CodeMirror
                        value={info.newarray}
                        options={{
                            theme: 'midnight',
                            keyMap: 'sublime',
                            mode: 'jsx',
                        }}
                    />
                </Code>
            </div>
            <div>
                <h3>{data[dataState].name}</h3>
                <p>This is a <label className="ui tiny green label">{data[dataState].bigO}</label> method, so use the next function:</p>
                <Code>
                    
                    <CodeMirror
                        value={data[dataState].code}
                        options={{
                            theme: 'midnight',
                            keyMap: 'sublime',
                            mode: 'jsx',
                        }}
                    />
                </Code>
            </div>
            </Div>
    );
}
 
export default Doc;