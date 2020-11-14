import React from 'react';
import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";
const StyledInput = styled.div`
    background-color: white;
    display: flex;
    align-items: center;
    max-width: 25em;
    border-radius: 5px;
    padding-left: 1em;
    padding-right: 1em;
    .input {
        border: none;
        width: 100%;
        font-size: 1.5em;
        border-radius: 5px;
        height: 2em;
    }
    input:focus {
        outline: none;
    }
`;

const Input = () => {
    return (
        <StyledInput>
            <input className="input" placeholder="search" />
            <BiSearchAlt size="2em" />
        </StyledInput>
    )
}

export default Input;