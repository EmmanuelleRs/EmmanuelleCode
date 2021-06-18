import React from 'react'
import styled from '@emotion/styled';
import {Link} from 'react-router-dom';

const Side = styled.div`
width: 10vh;
height: 100vh;
position: fixed;
background-color: #010101;

> nav {
    width: 80%;
    margin: 1rem auto;
    color: #fff;
    font-size: 13px;
    text-align: center;

    li {
        list-style: none;
        margin: 2rem auto;

        a {
            color:#fff;
            text-decoration: none;

            :hover {
                color: #e1415f;
            }

        }
    }
}

@media only screen and (max-width: 375px) {
    display: none;
  }

`;

const Logo = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
margin: 2rem 0;
transition: .5s ease;

:hover {
    transform: rotate(90deg);
    transition: .5s ease;
}
img{
    width: 40%;
}
`;

const Sidebar = () => {
    return (
        <Side>
            <Link to='/'>
                <Logo>
                    <img alt="logo" src="https://firebasestorage.googleapis.com/v0/b/emmanuelle-ca5d2.appspot.com/o/logo.svg?alt=media&token=532b018b-7661-44b3-ae90-d44fef7e671e" />
                </Logo>
            </Link>
            
            <nav>
                <li><Link to='/SortingAlgorithms'><i className="sort numeric down icon"></i></Link></li>
                <li><Link to='/SearchAlgorithms'><i className="code icon"></i></Link></li>
                <li><Link to='/usersData'><i className="chart bar icon"></i></Link></li>
                <li><Link to='/System'><i className="server icon"></i></Link></li>
                <li><Link to='/Contact'><i className="fax icon"></i></Link></li>
            </nav>

        </Side>
    );
}

export default Sidebar;