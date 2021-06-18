import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import {Doughnut, Bar} from 'react-chartjs-2';
import axios from 'axios';

import Code from './code';

const Div = styled.div`

color: #fff;
`;

const Li = styled.div`
display: flex;
align-items: center;
background-color: #010101;
padding: .5rem;
border-radius: 1rem;
font-size: 12px;
margin: .5rem;

> div {
    margin: 0 1rem;

    img{
        clip-path: circle();
    }
}

`;


const Nav = styled.div`
color: #fff;
list-style: none;
width: 100%;
background-color: #010101;
border-radius: 10px;

li{
    display: inline-table;
    margin: 1rem;
}

select {
    background-color: transparent;
    border: none;
    color: #fff;
    outline: none;
}

`;

const Blocks = styled.div`
width: 100%;
display: flex;
align-items: flex-start; 
justify-content: center;

> div{
    flex: 1;
    background-color: #010101;
    margin: .5rem;
    padding: 1rem;
    max-height: 50vh;
    overflow-y: scroll;
    border-radius: 10px;
}

.chart {
    width: 50%;
    margin:auto;
}

.chart-large {
    width: 80%;
    margin: auto;

}
`;

const Block = styled.div`
display: flex;
align-items: flex-end;
justify-content: center;

h3{
    color: #6495ED;
}
> div {
    flex: 1;
    background-color: #010101;
    margin: .5rem;
    padding: 1rem;
    border-radius: 10px;

    nav{
        list-style: none;

        li {
            margin: 1rem;
        }
    }

    label {
        font-size: 11px;
        font-weight: bold;
        color: dimgray;
    }
}
`;


const MainUsers = () => {

    const [users, setusers] = useState([]);
    //
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
    }

    return (
        <>
        {users.length > 0 ? (
        <Div>
            <h1>{users.length} Users</h1>

            <Nav>
                <li key="natSelect">
                    <select onChange={e => setnat(e.target.value)}>
                        <option value="All" key="all">Nationalitie</option>
                        {Object.keys(nationalities).map(location => <option value={location} key={location}>{location}</option>)}
                    </select>
                </li>
                <li key="rangeInput">Max Age: <input onChange={e => setageRange(e.target.value)} min={minAge} max={maxAge} value={ageRange} type="range"/> {ageRange}</li>
            </Nav>
            
            <div>
                {nat !== 'All' ? (
                    <>
                    <h4>Users from {nat} ({nationalities[nat].length})</h4>

                    <Block>
                        <div>
                            <h3>{nationalities[nat].length} Users</h3>
                            <nav>
                                <li><label>Max Age</label> {getMaxMinAge(nationalities[nat]).max}</li>
                                <li><label>Min Age</label> {getMaxMinAge(nationalities[nat]).min}</li>
                                <li><label>Avarage age</label></li>
                                <li><label>Most Freccuent age</label> {mostFreccuentAge(nationalities[nat])}</li>
                            </nav>
                        </div>

                        <div>
                            <h3>{getGender(nationalities[nat], 'female').length} Women</h3>
                            <nav>
                                <li><label>Max Age</label> {getMaxMinAge(getGender(nationalities[nat], 'female')).max}</li>
                                <li><label>Min Age</label> {getMaxMinAge(getGender(nationalities[nat], 'female')).min}</li>
                                <li><label>Most Freccuent Age</label> {mostFreccuentAge(getGender(nationalities[nat], 'female'))}</li>
                            </nav>
                        </div>

                        <div>
                            <h3>{getGender(nationalities[nat], 'male').length} Men</h3>
                            <nav>
                                <li><label>Max Age</label> {getMaxMinAge(getGender(nationalities[nat], 'male')).max}</li>
                                <li><label>Min Age</label> {getMaxMinAge(getGender(nationalities[nat], 'male')).min}</li>
                                <li><label>Most Freccuent Age</label> {mostFreccuentAge(getGender(nationalities[nat], 'male'))}</li>
                            </nav>
                        </div>
                        
                    </Block>
                    <Blocks>
                        <div>
                            <div className="chart-large">
                                <Bar
                                    data={
                                        {labels: Object.keys(getAges(nationalities[nat])),
                                        datasets: [
                                            {
                                                label: 'Ages',
                                                backgroundColor: ['#DFFF00', '#FFBF00', '#FF7F50', '#DE3163', '#9FE2BF', '#40E0D0', '#6495ED', '#CCCCFF'],
                                                borderWidth: 1,
                                                data: Object.values(getAges(nationalities[nat])),
                                            }
                                        ]}
                                    }
                                />
                            </div>
                        </div>
                    </Blocks>
                    <Blocks>
                        <div>
                            {nationalities[nat].map(user => (
                                <Li key={user.login.uuid}>
                                    <div>
                                        <img alt="profile" src={user.picture.thumbnail}></img>
                                    </div>
                                    <div>
                                        <h4>{user.name.first} {user.name.last}</h4>
                                        <label>{user.nat}</label>, 
                                        <label>{user.dob.age}</label>
                                    </div>
                                </Li>
                            ))}
                        </div>
                        <div>
                            <div className="chart">
                                <Doughnut
                                    data={
                                        {labels: ['males', 'females'],
                                        datasets: [
                                            {
                                                label: 'Gender',
                                                backgroundColor: ['#40E0D0', '#DE3163'],
                                                borderWidth: 1,
                                                data: [getGender(nationalities[nat], 'male').length, getGender(nationalities[nat], 'female').length],
                                                indexAxis: 'y',
                                            }
                                        ]}
                                    }
                                />
                            </div>
                        </div>
                        
                    </Blocks>                    
                    </>
                ):
                <>
                <h4>All users({users.length})</h4>
                <Block>
                    <div>
                        <h3>{users.length} Users</h3>
                        <nav>
                            <li><label>Max Age</label> {getMaxMinAge(users).max}</li>
                            <li><label>Min Age</label> {getMaxMinAge(users).min}</li>
                            <li><label>Avarage age</label></li>
                            <li><label>Most Freccuent age</label> {mostFreccuentAge(users)}</li>
                        </nav>
                    </div>

                    <div>
                        <h3>{getGender(users, 'female').length} Women</h3>
                        <nav>
                            <li><label>Max Age</label> {getMaxMinAge(getGender(users, 'female')).max}</li>
                            <li><label>Min Age</label> {getMaxMinAge(getGender(users, 'female')).min}</li>
                            <li><label>Most Freccuent Age</label> {mostFreccuentAge(getGender(users, 'female'))}</li>
                        </nav>
                    </div>

                    <div>
                        <h3>{getGender(users, 'male').length} Men</h3>
                        <nav>
                            <li><label>Max Age</label> {getMaxMinAge(getGender(users, 'male')).max}</li>
                            <li><label>Min Age</label> {getMaxMinAge(getGender(users, 'male')).min}</li>
                            <li><label>Most Freccuent Age</label> {mostFreccuentAge(getGender(users, 'male'))}</li>
                        </nav>
                    </div>
                    
                </Block>
                <Blocks>
                    <div>
                        <div className="chart-large">
                            <Bar
                                data={
                                    {labels: Object.keys(getAges(users)),
                                    datasets: [
                                        {
                                            label: 'Ages',
                                            backgroundColor: ['#DFFF00', '#FFBF00', '#FF7F50', '#DE3163', '#9FE2BF', '#40E0D0', '#6495ED', '#CCCCFF'],
                                            borderWidth: 1,
                                            data: Object.values(getAges(users)),
                                        }
                                    ]}
                                }
                            />
                        </div>
                    </div>
                </Blocks>
                <Blocks>
                        <div>
                            {users.map(user => (
                                <Li key={user.login.uuid}>
                                    <div>
                                        <img alt="profile" src={user.picture.thumbnail}></img>
                                    </div>
                                    <div>
                                        <h4>{user.name.first} {user.name.last}</h4>
                                        <label>{user.nat}</label>, 
                                        <label>{user.dob.age}</label>
                                    </div>
                                </Li>
                            ))}
                        </div>
                        <div>
                            <div className="chart">
                                <Doughnut
                                    data={
                                        {labels: ['males', 'females'],
                                        datasets: [
                                            {
                                                label: 'Gender',
                                                backgroundColor: ['#40E0D0', '#DE3163'],
                                                borderWidth: 1,
                                                data: [getGender(users, 'male').length, getGender(users, 'female').length],
                                                indexAxis: 'y',
                                            }
                                        ]}
                                    }
                                />
                            </div>
                        </div>
                        
                    </Blocks>
                </>
                }
            </div>
        <Code />
        </Div>
    ) :
        <div class="ui active dimmer">
            <div class="ui loader"></div> Fetching data
        </div>}
    </>
    );
}

export default MainUsers;