import React, { useState, useCallback } from 'react';
import banner from '../images/banner.png';

const BannerImage = styled.img`
  width: 80px; // 적당한 크기의 로고
  height: auto; // 높이는 자동으로
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1); // 로고에 마우스를 올리면 확대되는 효과
  }
`;

const MainContainer = () => {
  return (
    <Link to="/">
      <BannerImage src={banner} alt={t('배너')} />
    </Link>
  );
};

export default React.memo(MainContainer);
