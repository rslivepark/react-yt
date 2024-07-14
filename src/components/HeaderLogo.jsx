import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HeaderLogo() {
  const nav = useNavigate();

  const goToMain = () => {
    nav('/');
    console.log('메인화면');
  };

  return (
    <div className='flex justify-center'>
      <img
        src='/yt-logo.png'
        alt='youtube'
        className='w-12'
        onClick={goToMain}
      />
      <span>Youtube</span>
    </div>
  );
}
