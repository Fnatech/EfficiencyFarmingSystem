import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import soil from '../assets/images/soil';

const StyledDiv = styled.div`
  text-align: center;
  font-size: 1.3em;
`;

const Title = styled.div`
  text-align: center;
  font-size: 1.5em;
  width: 100%;
  margin: 30px auto;
  text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.55);
  font-weight: 400;
`;

const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  margin: 100px auto 0 auto;
  border-radius: 50%;
  border: 1px solid white;
  background: rgba(255, 255, 255, 0.5);
`;

const Image = styled.div`
  background: url(${soil});
  background-size: 100% 100%;
  background-position: center center;
  height: 70%;
  width: 70%;
  margin: auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 50px;
  width: 80%;
  margin: auto;
  left: 0;
  right: 0;
`;

export default () => (
  <StyledDiv>
    <Title>Soil Testing</Title>
    <ImageContainer>
      <Image />
    </ImageContainer>
    <ButtonContainer>
      <Link to="/result">
        <Button name="Test Soil" width="80%" action={() => console.log('go to result page')}/>
      </Link>
    </ButtonContainer>
  </StyledDiv>
);
