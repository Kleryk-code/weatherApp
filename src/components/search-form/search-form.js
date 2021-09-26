import React from 'react';

const SearchForm = (props) => {
  const {onSubmit, searchRequest, onChangeSearch} = props; 

  return (
    <div>
      <form onSubmit = {onSubmit}>
        <label> Search: 
          <input type="text" name="search" 
                value = {searchRequest}
                onChange = {onChangeSearch}
                placeholder="City"/>
          <button type='submit'>Search</button>
        </label>
      </form>
    </div>
  );
}



export default SearchForm;