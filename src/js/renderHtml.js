import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function renderHtml(countries) {
   let amountCountries = countries.length;
   const countryList = document.querySelector('.country-list');
   const countryInfo = document.querySelector('.country-info');
   let countryLi = [];

   if(amountCountries > 10) {
    Notify.info("Too many matches found. Please enter a more specific name.");
   } else if(amountCountries >=2 && amountCountries <=10) {
    countries.map(country => {
        countryLi += `
        <li>
            <img src="${country.flags.svg}" width=30 alt="прапор країни" />
            <span>${country.name.official}</span>
        </li>
        `
        countryList.innerHTML = countryLi;
     })
     countryInfo.innerHTML = '';
   } else {
      let country = countries[0];
       
      countryInfo.innerHTML = `
      <div class="country-flag">
        <img class="country-img" src="${country.flags.svg}" width=30 alt="прапор країни" />
        <span class="country-name">${country.name.official}</span>
      </div>
      <ul class="country-data">
          <li>
               <span>Capital: </span>${country.capital}
          </li>
          <li>
               <span>Population: </span>${country.population}
          </li>
          <li>
               <span>Languages: </span>${Object.values(country.languages).join(', ')}
          </li>
         
      </ul>`;
     

    countryList.innerHTML = ''
   }
}
