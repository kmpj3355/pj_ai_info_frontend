import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { color } from '../styles/color';
import fontSize from '../styles/fontSize';

const { secondary, light } = color;

const MenuBox = styled.nav`
  background: ${secondary};
  padding: 0 10px;

  div {
    display: flex;
    justify-content: flex-start; /* 메뉴를 왼쪽 정렬 */
    align-items: center;
    height: 40px; /* 약간 더 높은 높이 */
    gap: 30px; /* 메뉴 항목 간 간격 */

    a {
      color: ${light};
      padding: 10px 15px;
      font-size: ${fontSize.medium};
      font-weight: 500;
      text-transform: uppercase; /* 대문자 텍스트 */
      letter-spacing: 1px; /* 문자 간격 */
      position: relative;
      text-decoration: none;
      transition: all 0.3s ease; /* 부드러운 모든 전환 */

      &:hover {
       
        transform: scale(1.1); /* 호버 시 크기 약간 확대 */
      }

      &.on {
        color: ${light}; /* 활성화된 메뉴 항목 */
        font-weight: bold;
      }

      /* 밑줄 애니메이션 */
      &::after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: 2px;
        transform: translateX(-50%);
        width: 0;
        height: 2px;
        background: ${light};
        transition: width 0.3s ease;
      }

      &:hover::after,
      &.on::after {
        width: 100%; /* 호버 및 활성화된 메뉴에서 밑줄 확장 */
      }
    }
  }
`;

const MainMenu = () => {
  const { t } = useTranslation();

  return (
    <MenuBox>
      <div className="layout-width">
        <NavLink
          to="/aiinfo"
          className={({ isActive }) => classNames({ on: isActive })}
        >
          {t('AI Info')}
        </NavLink>
      </div>
    </MenuBox>
  );
};

export default React.memo(MainMenu);
