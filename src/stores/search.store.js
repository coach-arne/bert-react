import { observable, action } from 'mobx' ;
import { createContext } from 'react';
import {getMovie} from "../services/tmdb.service";

// Maak een store SearchStore aan in /src/stores/search.store.js
class SearchStore {
    @observable results = [] ;

    @action search(query) {
        getMovie(query)
            .then((data) => this.results = data.results);
    }
}

const SearchStoreInstance = new SearchStore();
export default createContext(SearchStoreInstance);


