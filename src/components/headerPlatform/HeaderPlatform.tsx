import React from 'react';
import { 
    StSignIn,
    StWrapper,
    StGameCool,
    StContainer,
 } from './styledComponents';

const HeaderPlatform = () => (
        <StContainer>
            <StGameCool>
                GAME.Cool
            </StGameCool>
            <StSignIn>
                <StWrapper>
                    Sign In
                </StWrapper>
            </StSignIn>
        </StContainer>
);

export default HeaderPlatform
