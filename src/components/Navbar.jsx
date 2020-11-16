import React from 'react';
import Sidebar from './Sidebar';
import styled from 'styled-components';
import Input from './input';

const StyledNavbar = styled.nav`
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .input-div {
        margin-right: 1em;
    }
    .burger-div {
        display: flex;
        align-items: center;
    }
    .burger-div h2 {
        margin-left: 3em;
    }
    @media only screen and (max-width: 600px) {
    height: 9vh;
    .input-div {
        width: 40%;
        font-size: 0.7em;
    }
    .burger-div {
        display: flex;
        align-items: center;
        margin-left: -1em;
    }
    .burger-div h2 {
        font-size: 1em;
    }   
}

`

const Navbar = () => {
    const title = 'Code Geeks </>'
    return (
        <StyledNavbar>
            <div className='burger-div'>
            <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
             <h2>{title}</h2>
            </div>
            <div className="input-div">
            <Input />
            </div>
            

        </StyledNavbar>
    )
}

export default Navbar;
