export default class OpenweathermapApi {

    _apiBase = 'https://api.openweathermap.org/data/2.5/weather?q=';
    _apiKey = 'b223100244007ae7859a71e52eeea4c1';

    
    async getResource(cityName) {
      const res = await fetch(`${this._apiBase}${cityName}&units=metric&appid=${this._apiKey}`);
  
      if (!res.ok) {
        throw new Error(`Could not fetch ${cityName}` +
          `, received ${res.status}`)
      }
      return await res.json();
    }

    async getCityData(cityName) {
        const res = await this.getResource(cityName);
        const data = {
            id: res.id,
            name: res.name,
            temp: Math.round(res.main.temp)
        }    
        return data;
    }
}
  

