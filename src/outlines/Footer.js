import React from 'react';
import styled from 'styled-components';

const FooterBox = styled.footer`
  min-height: 100px;
  background: #f8f8f8;
  margin-top: 0; /* 상단 마진 30픽셀 추가 */
  padding: 0; /* 필요시 패딩 조정 */
`;

const Footer = () => {
  return <FooterBox></FooterBox>;
};

export default React.memo(Footer);
