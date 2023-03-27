function fetchCountries(countryName) {
    return fetch(`https://restcountries.com/v3.1/name/{countryName}
    ?fields=name,capital,flags,population,languages`).then((response) => {
       console.log(response);

       if(!response.ok) {
        throw new Error(response.status);
       }
        return response.json()
    }).then((data) => {
        console.log(data);
    }).catch(err => {
        console.warn(err);
    });
}

export default {fetchCountries}