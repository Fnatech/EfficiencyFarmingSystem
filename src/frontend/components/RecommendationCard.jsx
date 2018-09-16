import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  height: 80px;
  width: 90%;
  background: white;
  border-radius: 10px;
  display: grid;
  grid-template-areas: 'img details';
  grid-auto-rows: 1fr 3fr;
  color: #00b973;
  margin: 20px auto 0 auto;
`;

const ImageContainer = styled.div`
  grid-area: img;
  height: 60px;
  width: 60px;
  margin: 0 auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  background: url(${(props) => props.img});
  background-size: 90% 90%;
  background-repeat: no-repeat;
`;

const Details = styled.div`
  grid-area: details;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  height: 90%;
`;

const CropName = styled.p`
  margin: 0;
  font-size: 1.2em;
  text-align: left;
`;

const CropDetails = styled.div`
  margin: 0;
  text-align: left;
  font-weight: 300;
  font-size: 0.7em;
`;

export default ({ cropName, img, minpHLevel, maxpHLevel, _id }) => (
  <StyledDiv key={id}>
    <ImageContainer img={img} />
    <Details>
      <CropName>{cropName}</CropName>
      <CropDetails>
        pH Level Range: {minpHLevel}-{maxpHLevel}
      </CropDetails>
    </Details>
  </StyledDiv>
);
