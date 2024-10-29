import React from 'react';
import styled from 'styled-components';
import bannerImage from '../../images/banner.jpg';

const Banner = styled.div`
  width: 100%;
  max-width: 1900px; /* 최대 폭 설정 */
  height: 500px; /* 배너 높이 고정 */
  background-image: url(${bannerImage});
  background-size: cover;
  background-position: center;
  margin: 2px auto 3px; /* 상단 2px, 하단 3px 마진 추가 및 중앙 정렬 */
`;

const MainContainer = styled.div`
  width: 100%;
  max-width: 1900px; /* 헤더와 동일한 최대 너비 */
  margin: 0 auto; /* 중앙 정렬 */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0; /* 전체 패딩 제거 */
`;

const Main = () => {
  return (
    <MainContainer>
      <Banner />
      <h3>Main Page</h3>
    </MainContainer>
  );
};

export default React.memo(Main);
