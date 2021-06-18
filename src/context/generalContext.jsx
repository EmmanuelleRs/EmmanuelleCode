import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';

export const GeneralContext = createContext();

const GeneralProvider = (props) => {
    const api_domain = 'https://emmanuelle-server.herokuapp.com';
    const [data, setdata] = useState(null);
    const [skills, setskills] = useState([]);
    const [system, setsystem] = useState(false);

    useEffect(() => {
        const getData = async () => {
            const status= await axios.post(api_domain + '/api/status');
            const res = await axios.post(api_domain + '/api/generalData');
            const skills = await axios.post(api_domain + '/api/Skills');
            setskills(skills.data);
            setdata(res.data);
            setsystem(status.data.conection === true ? status.data.conection : false);
        }
        getData();
    }, [])

    return (
        <GeneralContext.Provider
        value={{
            api_domain,
            data,
            skills,
            system,
        }}
        >
            {props.children}
        </GeneralContext.Provider>
    );
}
 
export default GeneralProvider;
