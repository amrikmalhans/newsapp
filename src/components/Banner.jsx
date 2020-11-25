import React from 'react';
import styled from 'styled-components';

const StyledBanner = styled.div`
    display: flex;
    background-color: #091A20;
    justify-content: center;
    height: 8vh;
    align-items: center;
    margin-top: 0.5em;
    .source {
        margin-right: 2.5em;
        font-weight: 600;
        background-color: #ffffff;
        padding: 0.4em;
        border-radius: 4px;
        cursor: pointer;
    }

    .source:last-child {
        margin-right: 0;
    }
`;

const Banner = ({sources}) => {
    return (
        <StyledBanner>
            {sources.map(source => {
                return <div className="source">{source.name}</div>
            })}
        </StyledBanner>
    )
}

export default Banner;
