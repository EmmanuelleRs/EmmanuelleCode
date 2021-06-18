import React, {useState} from 'react'
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Header = styled.header`
width: 100vw;
height: 7vh;
background-color: #020202;
color: #fff;
display: flex; 
align-items: center;
justify-content: center;
padding: 0 1rem;
position: fixed;


h4 img{
    height: 4vh;
    vertical-align: middle;
}

@media only screen and (min-width: 376px) {
    display: none;
  }
`;

const Socialmedia = styled.div`
width: 98%;
margin: 1rem auto;
list-style: none;
display: flex;
align-items: center;
justify-content: center;
background-color: #010101;
padding: 1rem;
border-radius: 10px;
z-index: 10;
li {
    flex: 1;
    text-align: center;
    color: #fff;

    :hover {
        cursor: pointer;
        text-decoration: underline;
    }
}
`;

const Divider = styled.div`
height: '7vh';
@media only screen and (min-width: 376px) {
    display: block;
}
`;

const Pop = styled.div`
width: 100vw;
height: 93vh;
position: fixed;
top: 7vh;
background-color: rgba(0, 0, 0, .9);
color: #fff;
z-index: 1;
display: flex;
align-items: center;
justify-content: center;

nav {
    list-style: none;
    li {
        margin: 1rem;
    }
}
`;


const Headbar = () => {
    const [menu, setmenu] = useState(false);
    const PopMenu = () => {
        return (
          <Pop>
              <nav>
                <li onClick={() => setmenu(false)}><Link to='/SortingAlgorithms'><i className="sort numeric down icon"></i> Sorting Algorithms</Link></li>
                <li onClick={() => setmenu(false)}><Link to='/SearchAlgorithms'><i class="search icon"></i> Search Algorithms</Link></li>
                <li onClick={() => setmenu(false)}><Link to='/usersData'><i className="chart bar icon"></i> Data Analysis</Link></li>
                <li onClick={() => setmenu(false)}><Link to='/System'><i className="server icon"></i> Server</Link></li>
                <li onClick={() => setmenu(false)}><Link to='/Contact'><i className="fax icon"></i> Contact</Link></li>
              </nav>
          </Pop>
        )
      }

    return (
        <>
        <Header>
            <Link style={{flex: 1}} to='/'><h4 ><img alt="logo" src="https://firebasestorage.googleapis.com/v0/b/emmanuelle-ca5d2.appspot.com/o/logo.svg?alt=media&token=532b018b-7661-44b3-ae90-d44fef7e671e" /> Emmanuelle Code</h4></Link>
            <button onClick={() => setmenu(!menu)} className="ui black icon button"><i className="bars icon"></i></button>
        </Header>
        <Divider>
        <Socialmedia>
            <li><i style={{color:'#FF0000'}} className="youtube icon"></i><a href="https://www.youtube.com/channel/UC1S5VGUh6N0TO9h3m8eB27w">YouTube</a></li>
            <li><i style={{color:'#4267B2'}} className="facebook icon"></i><a href="https://www.facebook.com/EmmanuelleCode">Facebook</a></li>
            <li><i className="github icon"></i><a href="https://github.com/EmmanuelleRs">GitHub</a></li>
        </Socialmedia>
        </Divider>
        {menu === true ? <PopMenu /> : null}
        </>
    );
}
 
export default Headbar;