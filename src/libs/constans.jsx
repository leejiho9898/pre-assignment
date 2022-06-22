import { FiSend } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';
import { GiNothingToSay } from 'react-icons/gi';
import { AiFillHome } from 'react-icons/ai';
import { BsPlusSquare } from 'react-icons/bs';
import React from 'react';
import UserIcon from '../component/common/UserIcon';
import userStorage from './utils/userStorage';

export const COMMENT_ICONS = [
  { icon: <AiOutlineHeart size={24} /> },
  { icon: <GiNothingToSay size={24} /> },
  { icon: <FiSend size={24} /> },
];

export const ICON_ITEMS = [
  { name: 'home', href: '/feed', icon: <AiFillHome size={20} /> },
  { name: 'send', href: '/feed', icon: <FiSend size={20} /> },
  { name: 'plus', href: '/feed', icon: <BsPlusSquare size={20} /> },
  { name: 'like', href: '/feed', icon: <AiOutlineHeart size={20} /> },
  { name: 'user', href: '/feed', icon: <UserIcon /> },
];

export const INITIAL_COMMENT_STATE = {
  id: '',
  text: '',
  userName: userStorage.get(),
};
