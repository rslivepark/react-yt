import React, { useRef, useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { useNavigate, useParams } from 'react-router-dom';

export default function HeaderSearch() {
  const { keyword } = useParams();
  const nav = useNavigate();
  const inputRef = useRef();
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newInput = inputRef.current.value;
    setInput(newInput);
    goToKeyword(newInput);
    inputRef.current.value = '';
  };

  const goToKeyword = (keyword) => {
    nav(`/videos/${keyword}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Search...' ref={inputRef} />
        <button>
          <ImSearch />
        </button>
      </form>
    </div>
  );
}
