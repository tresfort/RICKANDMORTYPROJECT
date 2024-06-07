// servicio de la api
export const fetchCharacters = (apiURL, page) => {
    return fetch(`${apiURL}?page=${page}`)
        .then(response => response.json());
};