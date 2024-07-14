import React from 'react';
import HeaderLogo from './HeaderLogo';
import HeaderSearch from './HeaderSearch';

export default function Header() {
  return (
    <header className='flex justify-evenly '>
      <HeaderLogo />
      <HeaderSearch />
    </header>
  );
}

/*
1. 로고 클릭하면 홈으로 이동
2. 검색어 입력 후 videos/:keyword 경로 만들기
*/
