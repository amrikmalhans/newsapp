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
`

const Navbar = () => {
    return (
        <StyledNavbar>
            <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            <div className="input-div">
            <Input />
            </div>
            

        </StyledNavbar>
    )
}

export default Navbar;
