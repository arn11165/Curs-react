import React from 'react';

function SearchBar({ setSearch }) {

    const handleChange = (event) => {
        setSearch(event.target.value);
    
    }

    return (
        <section>
          <input
            type="text"
            onChange={handleChange}
            placeholder="Busca un usuario"
          />
        </section>
      );
}

export default SearchBar;