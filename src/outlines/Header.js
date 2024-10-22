import React, { useContext, useCallback } from 'react';
import cookies from 'react-cookies';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { FaSearch } from 'react-icons/fa';
import fontSize from '../styles/fontSize';
import { color } from '../styles/color';
import logo from '../images/logo.png';
import MainMenu from './MainMenu';

import UserInfoContext from '../member/modules/UserInfoContext';

import { SmallButton } from '../commons/components/Buttons';

const { primary, dark, light, info } = color;

const HeaderBox = styled.header`
  .site-top {
    background: #f9f9f9; /* 밝은 그레이톤 배경 */
    border-bottom: 2px solid #ebebeb; /* 밝은 회색 테두리 */
    height: 25px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05); /* 부드러운 그림자 효과 */
    position: relative;
    z-index: 10;

    div {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      span {
        margin-right: 15px;
        font-size: ${fontSize.medium};
        color: ${dark};
        font-weight: 600; /* 두꺼운 폰트로 강조 */
      }

      a {
        color: ${dark};
        font-size: ${fontSize.medium};
        text-decoration: none;
        margin-left: 15px;
        padding: 8px 20px;
        border-radius: 50px; /* 둥근 버튼 스타일 */
        transition: background-color 0.3s, color 0.3s;
        background-color: transparent;

        &:hover {
          color: ${primary};
        }

        &.on {
          background-color: ${primary};
          color: ${light};
          font-weight: bold;
        }
      }
    }
  }

  .logo-search {
    padding: 20px 0;
    background: linear-gradient(
      135deg,
      #fff,
      #2193b0
    ); /* 부드러운 그라데이션 배경 */
    color: ${light};
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1); /* 살짝 더 강한 그림자 */

    .layout-width {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      max-width: 1200px; /* 중앙에 고정된 넓이 */
      margin: 0 auto;
    }

    form {
      display: flex;
      height: 50px;
      width: 400px;
      background: #fff;
      border-radius: 25px;
      padding: 5px 20px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      transition: box-shadow 0.3s;

      &:hover {
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2); /* 호버 시 그림자 강조 */
      }

      input[type='text'] {
        flex-grow: 1;
        border: none;
        border-radius: 25px;
        padding: 0 15px;
        outline: none;
        font-size: ${fontSize.medium};
      }

      button {
        width: 45px;
        height: 40px;
        background: ${info};
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: background-color 0.3s;

        svg {
          color: #fff;
          font-size: 1.5rem;
        }

        &:hover {
          background-color: ${dark};
        }
      }
    }
  }
`;

const LogoImage = styled.img`
  width: 80px; // 적당한 크기의 로고
  height: auto; // 높이는 자동으로
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1); // 로고에 마우스를 올리면 확대되는 효과
  }
`;

const Header = () => {
  const { t } = useTranslation();
  const {
    states: { isLogin, userInfo, isAdmin },
    actions: { setIsLogin, setIsAdmin, setUserInfo },
  } = useContext(UserInfoContext);

  const onLogout = useCallback(() => {
    setIsLogin(false);
    setIsAdmin(false);
    setUserInfo(null);
    cookies.remove('token', { path: '/' });
  }, [setIsLogin, setIsAdmin, setUserInfo]);

  // 관리자 URL
  const adminUrl =
    process.env.REACT_APP_ADMIN_URL + '?token=' + cookies.load('token');

  return (
    <HeaderBox>
      <section className="site-top">
        <div className="layout-width">
          {isLogin ? (
            <>
              {/* 로그인 상태 */}
              <span>
                {userInfo?.userName}({userInfo?.email}){t('님_로그인')}
              </span>
              <NavLink
                to="/mypage"
                className={({ isActive }) => classNames({ on: isActive })}
              >
                {t('마이페이지')}
              </NavLink>
              {isAdmin && (
                <a href={adminUrl} target="_blank" rel="noopener noreferrer">
                  {t('사이트_관리')}
                </a>
              )}
              <SmallButton color="secondary" width={150} onClick={onLogout}>
                {t('로그아웃')}
              </SmallButton>
            </>
          ) : (
            <>
              {/* 미로그인 상태 */}
              <NavLink
                to="/member/join"
                className={({ isActive }) => classNames({ on: isActive })}
              >
                {t('회원가입')}
              </NavLink>
              <NavLink
                to="/member/login"
                className={({ isActive }) => classNames({ on: isActive })}
              >
                {t('로그인')}
              </NavLink>
            </>
          )}
        </div>
      </section>
      <section className="logo-search">
        <div className="layout-width">
          <Link to="/">
            <LogoImage src={logo} alt={t('로고')} />
          </Link>

          <form autoComplete="off">
            <input type="text" />
            <button type="submit">
              <FaSearch />
            </button>
          </form>
        </div>
      </section>
      <MainMenu />
    </HeaderBox>
  );
};

export default React.memo(Header);
