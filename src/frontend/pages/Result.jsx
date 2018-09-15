import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import soil from '../assets/images/soil';

const StyledDiv = styled.div`
  text-align: center;
  font-size: 1.5em;
`;

const Title = styled.div`
  text-align: center;
  font-size: 1.5em;
  width: 100%;
  margin: 30px auto 0 auto;
  text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.55);
  font-weight: 400;
`;

const ResultContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 150px;
  display: grid;
  grid-template-areas: 'image phLevel';
  grid-auto-columns: 120px 1fr;
  border-bottom: 2px solid white;
`;

const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  grid-area: image;
  border-radius: 50%;
  border: 1px solid white;
  background: rgba(255, 255, 255, 0.5);
  margin: auto;
  position: relative;
  top: 50%;
  transform: translateY(-75%);
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

const PHLevelContainer = styled.div`
  grid-area: phLevel;
  height: 100%;
`;

const TextContainer = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 90%;
  margin: auto;
`;

const PHLabel = styled.p`
  font-weight: bold;
  font-size: 1.3em;
`;

const PHValue = styled.p`
  font-size: 1.3em;
  letter-spacing: 3px;
`;

const Recommendations = styled.div`
  border: 1px solid white;
  height: 50vh;
  width: 90%;
  margin: 30px auto;
`;

export default inject('store')(observer(({ store }) => (
  <StyledDiv>
    <Title>Results</Title>
    {console.log('CROP:', store)}
    <ResultContainer>
      <ImageContainer>
        <Image />
      </ImageContainer>
      <PHLevelContainer>
        <TextContainer>
          <PHLabel>pH Level</PHLabel>
          <PHValue>{store.currentPhLevel.toFixed(2)}</PHValue>
        </TextContainer>
      </PHLevelContainer>
    </ResultContainer>
    <Recommendations />
  </StyledDiv>
)));
