import React from 'react';
import styled from 'styled-components';
import {GrAdd} from 'react-icons/gr';

const StyledBanner = styled.div`
    display: flex;
    background-color: #091A20;
    justify-content: center;
    height: 8vh;
    align-items: center;
    margin-top: 1em;
    .source {
        margin-right: 2.5em;
        font-weight: 600;
        background-color: #fbfbfb;
        padding: 0.4em;
        border-radius: 4px;
        cursor: pointer;
    }

    .source:last-child {
        margin-right: 0;
    }
    button {
        background-color: #fbfbfb;
        border: none;
        display: grid;
        grid-template-columns: auto auto;
        column-gap: 0.2em;
        align-items: center;
        padding: 0.4em;
        border-radius: 4px;
        font-weight: 700;
        cursor: pointer;
    }
`;

const Banner = ({sources}) => {
    return (
        <StyledBanner>
            {sources.map(source => {
                return <div className="source">{source.name}</div>
            })}
            <button>Add <GrAdd /></button>
        </StyledBanner>
    )
}

export default Banner;
