import React from 'react';

export const Searchbox = ({ placeholder, handleChange}) => (
    <input 
        className='search'
        type="search" 
        placeholder={placeholder} 
        onChange={handleChange}
    />
)