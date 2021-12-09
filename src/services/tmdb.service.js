import Api from '../components/api.js' ;

const collectData = (response) => response.data ;

export const getMovie = (query) => {
    return Api.get(`movie?api_key=f6356f71a0245cd8ea4f701475aa8c45&language=nl-BE&query=${query}&page=1&include_adult=false`)
        .then(collectData);
} ;

