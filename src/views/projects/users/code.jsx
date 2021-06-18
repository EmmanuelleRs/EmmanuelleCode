import React from 'react'
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/midnight.css';

const Code = () => {
    const code = `
    const [users, setusers] = useState([]);
    const [maxAge, setmaxAge] = useState(0);
    const [minAge, setminAge] = useState(0);
    const [ageRange, setageRange] = useState(0);
    const [nat, setnat] = useState("All");
    const [nationalities, setnationalities] = useState([]);

    useEffect(() => {
        const url = 'https:randomuser.me/api/?results=1000';

        const getUsers = async () => {
            const res = await axios(url);
            const arr = res.data.results;

            setusers(arr);
            
            let locations = {}
            let c = 0;
            let min_age = arr[0].dob.age;
            let max_age = arr[0].dob.age;

            while(c < arr.length){
                if (arr[c].location.country in locations) {
                    locations[arr[c].location.country].push(arr[c]);
                }
                else{
                    locations[arr[c].location.country] = [arr[c]];
                }
                
                if (arr[c].dob.age < min_age) min_age = arr[c].dob.age;
                if (arr[c].dob.age > max_age) max_age = arr[c].dob.age;

                c++;
            }

            setminAge(min_age);
            setmaxAge(max_age);
            setageRange(max_age);
            setnationalities(locations);
        }

        getUsers();
        
    }, [])
    
    const getGender = (array, gender) => {
        let c = 0;
        let genderArray = [];

        while (c < array.length){
            if(array[c].gender  === gender){
                genderArray.push(array[c])
            }
            c ++;
        }
        return genderArray;
    }

    const getAges = array => {
        let ages = {}

        for(let i = 0; i < array.length; i ++) {
            if(array[i].dob.age in ages){
                ages[array[i].dob.age] += 1;
            } else{
                ages[array[i].dob.age] = 1;
            }
        }

        return ages
    }

    const getMaxMinAge = arr => {
        let c = 0;
        let min_age = arr[0].dob.age;
        let max_age = arr[0].dob.age;

        while(c < arr.length){
            if (arr[c].dob.age < min_age) min_age = arr[c].dob.age;
            if (arr[c].dob.age > max_age) max_age = arr[c].dob.age;

            c ++;
        }
        
        return {max: max_age, min: min_age}
    }

    const mostFreccuentAge = arr => {
        let count = {}
        let max_value = 0;
        let max_index = -1;

        for(let i = 0; i < arr.length; i ++) {
            if(arr[i].dob.age in count){
                count[arr[i].dob.age] += 1;
                
            } else{
                count[arr[i].dob.age] = 1;
            }
            if(count[arr[i].dob.age] > max_index){
                max_index = count[arr[i].dob.age];
                max_value =  arr[i].dob.age
            }
        }

        return max_value
    }`;

    return (
        <>
        <h3>Code</h3>
        <p>Here is a useful part of the code. You can find it complete on Github</p>
        <CodeMirror
            value={code}
            options={{
                theme: 'midnight',
                keyMap: 'sublime',
                mode: 'jsx',
            }}
        />
        </>
    );
}
 
export default Code;