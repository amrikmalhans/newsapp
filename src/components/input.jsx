import React, { useState } from 'react';
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

const Input = ({handleFormSubmit}) => {

    const [inputValue, setInputValue] = useState("");
    const handleChange = (e) => {
        setInputValue(e.target.value)
    }
    const handleSubmit = () => {
        handleFormSubmit(inputValue);
        setInputValue("");
    }

    return (
        <StyledInput>
            <input value={inputValue} onSubmit={handleSubmit} onChange={handleChange} className="input" placeholder="search" />
            <BiSearchAlt onClick={handleSubmit} style={{cursor:' pointer'}} size="2em" />
        </StyledInput>
    )
}

export default Input;