import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    
`;

const Headline = ({headlineData}) => {
    return (
        <StyledDiv>
           <h1>{headlineData.title}</h1>
           <p>{headlineData.content}</p>
        </StyledDiv>
    )
}

export default Headline;
