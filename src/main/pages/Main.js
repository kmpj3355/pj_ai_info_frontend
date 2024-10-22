import React from 'react';
import styled from 'styled-components';
import bannerImage from '../../images/banner.jpg'; 


const Banner = styled.div`
  width: 100%;
  height:1300px; /* 배너 높이 설정 */
  background-image: url(${bannerImage});
  background-size: cover;
  background-position: center;
  margin-bottom: 20px; /* 배너와 아래 콘텐츠 사이 여백 */
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Main = () => {
  return (
    <MainContainer>
      <Banner />
      <h1>Main Page</h1>
    
    </MainContainer>
  );
};





export default React.memo(Main);
