import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo';
import Button from '../components/Button';

const StyledDiv = styled.div`
  text-align: center;
  margin-top: 25%;
  font-size: 1.4em;
`;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const ImageContainer = styled.div`
  background: url('${logo}');
  height: 150px;
  width: 150px;
  margin: 20px auto 30px auto;
  background-size: 100% 100%;
  background-position: cover;
`;

const AppName = styled.div`
  text-align: center;
  font-size: 1.1em;
  width: 100%;
  margin: auto;
  text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.55);
  font-weight: 400;
`;

const ButtonContainer = styled.div`
  width: 90%;
  position: absolute;
  bottom: 50px;
  left: 0;
  right: 0;
  margin: auto;
`;

export default () => (
  <StyledDiv>
    <Container>
      <ImageContainer />
      <AppName>Efficient Farming System</AppName>
      <ButtonContainer>
        <Link to="/test">
          <Button
            name="Get Started"
            width="80%"
            action={() => console.log('go to soil testing page')}
          />
        </Link>
      </ButtonContainer>
    </Container>
  </StyledDiv>
);
