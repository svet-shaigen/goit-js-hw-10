import debounce from 'lodash.debounce';
import './css/styles.css';
import fetchCountries from './js/fetchCountries';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import renderHtml from './js/renderHtml';

const DEBOUNCE_DELAY = 2000;
const inputCountry = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

inputCountry.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput() {
  let nameCountry = inputCountry.value.trim()
  if(nameCountry) {
  fetchCountries(nameCountry)
    .then(dataCountries => {
        renderHtml(dataCountries)
    })
    .catch(() => {
        Notify.failure("Oops, there is no country with that name");
    })
  } else {
    countryList.innerHTML = ''
    countryInfo.innerHTML = ''
  }
}




