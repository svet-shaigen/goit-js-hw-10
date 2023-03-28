export default function fetchCountries(name) {
    const BASE_URL = 'https://restcountries.com/';

    return fetch(`${BASE_URL}v3.1/name/${name}?fields=name,capital,flags,population,languages`)
    .then(response => {
        if(!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
     })
}

    

