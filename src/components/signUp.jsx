import React from 'react';
import styled from 'styled-components'
import signup from '../assets/signup.svg'

const StyledSignUp = styled.div`

`;

const SignUp = () => {
    return (
        <StyledSignUp>
            <form>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" />
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" />
                <label for="email">Password:</label>
                <input type="password" id="password" name="password" />
                <input type="submit" value="Submit"></input>
            </form>
            <img src={signup} alt="illus" />
        </StyledSignUp>
    )
}

export default SignUp;