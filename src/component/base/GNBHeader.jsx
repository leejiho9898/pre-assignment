import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AiFillHome, AiOutlineHeart } from 'react-icons/ai';
import { FiSend } from 'react-icons/fi';
import { FaRegUserCircle } from 'react-icons/fa';
import { BsPlusSquare, BsSearch } from 'react-icons/bs';
import { Input } from '../common/Input';
import { FlexBox } from '../../styles/commomComponents';
import { Link, Outlet } from 'react-router-dom';
import media from '../../styles/media';
import UserIcon from '../common/UserIcon';

const ICOM_ITEMS = [
  { name: 'home', href: '/feed', icon: <AiFillHome size={20} /> },
  { name: 'send', href: '/feed', icon: <FiSend size={20} /> },
  { name: 'plus', href: '/feed', icon: <BsPlusSquare size={20} /> },
  { name: 'like', href: '/feed', icon: <AiOutlineHeart size={20} /> },
  { name: 'user', href: '/feed', icon: <UserIcon /> },
];

const GNBHeader = () => {


  return (
    <>
      <Header>
        <Logo src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" />
        <SearchBox>
          <SearchIcon size={12} />
          <SearchInput
            validated={true}
            placeholder="검색"
            variant="secondary"
          />
        </SearchBox>
        <IconBox>
          {ICOM_ITEMS.map(({ name, href, icon }) => (
            <Link to={href} key={name}>
              {icon}
            </Link>
          ))}
        </IconBox>
      </Header>
      <Outlet />
    </>
  );
};

const Logo = styled.img`
  height: 30px;
`;
const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  height: 60px;
  justify-content: space-between;
  padding: 0 30px;
  background-color: #ffff;
  border: 1px solid #e5e5e5;
`;
const IconBox = styled(FlexBox)`
  min-width: 278px;
  justify-content: space-evenly;
  text-decoration: none;
`;
const SearchBox = styled.div`
  ${media.small} {
    display: none;
  }
`;
const SearchInput = styled(Input)`
  width: 268px;
  max-width: 316px;
`;
const SearchIcon = styled(BsSearch)`
  position: absolute;
  top: 24px;
  margin-left: 14px;
  color: #8d8d8d;
`;
export default GNBHeader;
