//@ts-nocheck
import React from 'react';
import Button from '../Button/Button';

const Search = ({ text }) => {
  return (
    <form action="#" className="search roundes-lg ">
      <input
        className="w-[700px] h-10 bg-white-100 rounded-tl-lg rounded-bl-lg  pl-3 placeholder:text-black"
        type="text"
        placeholder="O Que Você Busca?"
        required
      />
      <input
        type="submit"
        value="Buscar"
        className="w-28 h-10 bg-orange text-white-default rounded-tr-lg rounded-br-lg cursor-pointer"
      />
    </form>
  );
};
export default Search;
