import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo';
import Button from '../components/Button';

const StyledDiv = styled.div`
  text-align: center;
  margin-top: 30%;
  font-size: 1.3em;
`;

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const ImageContainer = styled.div`
  background: url('${logo}');
  height: 120px;
  width: 120px;
  margin: 20px auto 50px auto;
  background-size: 100% 100%;
  background-position: cover;
`;

const AppName = styled.div`
  text-align: center;
  font-size: 1.1em;
  width: 100%;
  margin: auto;
`;

const ButtonContainer = styled.div`
  width: 90%;
  margin: 150px auto 0 auto;
  text-align: center;
`;

export default () => (
  <StyledDiv>
    <Container>
      <ImageContainer />
      <AppName>Efficient Farming System</AppName>
      <ButtonContainer>
        <Button name="Get Started" width="80%"/>
      </ButtonContainer>
    </Container>
  </StyledDiv>
);
