import debounce from 'lodash.debounce';
import './css/styles.css';
import {fetchCountries} from './fetchCountries';

 const DEBOUNCE_DELAY = 300;

 const input = document.querySelector('#search-box');
 const countryList = document.querySelector('.country-list');
 const countryInfo = document.querySelector('.country-info');

 input.addEventListener('input', debounce(onSearchCountry, DEBOUNCE_DELAY));

 function onSearchCountry(event) {
    event.preventDefault();
    
    const inputCountry = event.target.value.trim();

    fetchCountries(inputCountry).then((data) => {
        console.log(data)
    });
  }
 
 


