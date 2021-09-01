import React from 'react';
import OpenweathermapApi from '../../openweathermapApi/openweathermapApi'

class SearchForm extends React.Component {
/*      constructor(props) {
      super(props);
      this.state = {
        searchRequest: '',
        id: null,
        cityName: '',
        temp: null        
      };

      this.onChangeSearch = this.onChangeSearch.bind(this);
      this.onSubmit = this.onSubmit.bind(this)
    }

    weatherApi = new OpenweathermapApi();

    onSubmit(event) {
      this.weatherApi.getCityData(this.state.searchRequest)
        .then(data => this.setState({
          id: data.id,
          cityName: data.name,
          temp: data.temp
        }));
      
      event.preventDefault();
    }
    
    onChangeSearch(event) {
      this.setState({searchRequest: event.target.value})
      
    } */
    

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
  }


  export default SearchForm;