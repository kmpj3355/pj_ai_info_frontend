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
import { useMediaQuery } from 'react-responsive';

import UserInfoContext from '../member/modules/UserInfoContext';

import { SmallButton } from '../commons/components/Buttons';

const { primary, dark, light, info } = color;

// PC용 검색창 스타일
const SearchForm = styled.form`
  display: flex;
  height: 50px;
  max-width: 400px;
  min-width: 200px;
  width: 100%;
  background: #fff;
  border-radius: 25px;
  padding: 5px 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  flex-grow: 1;

  &:hover {
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }

  input[type='text'] {
    flex-grow: 1;
    border: none;
    border-radius: 25px;
    padding: 0 10px;
    outline: none;
    font-size: ${fontSize.medium};
    min-width: 0;
  }

  button {
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    background: ${info};
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;

    svg {
      color: #fff;
      font-size: 1.2rem;
    }
  }
`;

const MobileSearchBar = styled.form`
  display: flex;
  width: 30%;
  height: 40px;
  background: #fff;
  border-radius: 20px;
  padding: 0 5px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  margin-left: 100px;
  margin-right: auto;

  input[type='text'] {
    flex-grow: 1;
    border: none;
    border-radius: 20px;
    padding: 0 10px;
    outline: none;
    font-size: ${fontSize.small};
  }

  button {
    width: 36px;
    height: 36px;
    background: ${info};
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center; // button이 검색창 높이의 중앙에 위치하도록 설정

    svg {
      color: #fff;
      font-size: 1.2rem;
    }
  }
`;

const HeaderBox = styled.header`
 width: 100%;
  max-width: 1900px; /* 최대 폭 제한 */
  margin: 0 auto; /* 중앙 정렬 */

  .site-top {
    background: #f9f9f9;
    border-bottom: 2px solid #ebebeb;
    height: 25px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
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
        font-weight: 600;
      }

      a {
        color: ${dark};
        font-size: ${fontSize.medium};
        text-decoration: none;
        margin-left: 15px;
        padding: 8px 20px;
        border-radius: 50px;
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
    background: linear-gradient(135deg, #fff, #2193b0);
    color: ${light};
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);

    .layout-width {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
    }
  }
`;

const LogoImage = styled.img`
  width: 80px;
  height: auto;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const Header = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' }); // 모바일 크기 여부 확인
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

  const adminUrl = `${process.env.REACT_APP_ADMIN_URL}?token=${cookies.load(
    'token',
  )}`;

  console.log('Is mobile:', isMobile);

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

      {/* logo-search 섹션을 한 번만 남깁니다 */}
      <section className="logo-search">
        <div className="layout-width">
          <Link to="/">
            <LogoImage src={logo} alt={t('로고')} />
          </Link>

          {/* 데스크탑에서는 SearchForm만, 모바일에서는 MobileSearchBar만 보이게 조건부 렌더링 */}

          {/* 모바일과 PC에 따라 검색창 컴포넌트 교체 */}
          {isMobile ? (
            <MobileSearchBar autoComplete="off">
              <input type="text" placeholder={t('검색어를 입력하세요')} />
              <button type="submit">
                <FaSearch />
              </button>
            </MobileSearchBar>
          ) : (
            <SearchForm autoComplete="off">
              <input type="text" placeholder={t('검색어를 입력하세요')} />
              <button type="submit">
                <FaSearch />
              </button>
            </SearchForm>
          )}
        </div>
      </section>

      <MainMenu />
    </HeaderBox>
  );
};

export default React.memo(Header);
