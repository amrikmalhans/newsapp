import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    
`;

const Headline = ({headlineData}) => {
    return (
        <StyledDiv>
           {headlineData.title}
        </StyledDiv>
    )
}

export default Headline;
