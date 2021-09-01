import React from 'react';
import OpenweathermapApi from '../../openweathermapApi/openweathermapApi'

class SearchForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {searchRequest: ''};

      this.onChangeSearch = this.onChangeSearch.bind(this);
      this.onSubmit = this.onSubmit.bind(this)
    }
    weatherApi = new OpenweathermapApi();

    onSubmit(event) {
      this.weatherApi.getCityData(this.state.searchRequest)
        .then(data => console.log(data));
      // сохранить данные в стайт
      //alert(this.state.searchRequest);
      event.preventDefault();
    }

    onChangeSearch(event) {
      this.setState({searchRequest: event.target.value})
      
    }
    

    render() {
      return (
        <div>
          <form onSubmit = {this.onSubmit}>
            <label> Search: 
              <input type="text" name="search" 
                    value = {this.state.searchRequest}
                    onChange = {this.onChangeSearch}
                    placeholder="City"/>
              <button type='submit'>Search</button>
            </label>
          </form>
        </div>
      );
    }
  }


  export default SearchForm;