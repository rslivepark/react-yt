import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Video() {
  return (
    <div>
      Video
      <Outlet />
    </div>
  );
}
