import React, {useContext, useState} from 'react';
import SearchStore from '../stores/search.store';

const Search = () => {
    const [searchField, setSearchField] = useState('');
    const searchStore = useContext(SearchStore);

    const submitValue = () => {
        searchStore.search(searchField);
    };

    return (
        <React.Fragment>
            <input type={"text"} placeholder={"Search"} onChange={e => setSearchField(e.target.value)} />
            <button onClick={submitValue}> Submit </button>
        </React.Fragment>
    );
} ;

export default Search;
