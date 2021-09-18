import React from 'react';


/* class SearchForm extends React.Component { 

    render() {
      return (
        <div>
          <form onSubmit = {this.props.onSubmit}>
            <label> Search: 
              <input type="text" name="search" 
                    value = {this.props.state.searchRequest}
                    onChange = {this.props.onChangeSearch}
                    placeholder="City"/>
              <button type='submit'>Search</button>
            </label>
          </form>
        </div>
      );
    }
  } */


function SearchForm(props) {

  return (
    <div>
      <form onSubmit = {props.onSubmit}>
        <label> Search: 
          <input type="text" name="search" 
                value = {props.searchRequest}
                onChange = {props.onChangeSearch}
                placeholder="City"/>
          <button type='submit'>Search</button>
        </label>
      </form>
    </div>
  );
}



  export default SearchForm;