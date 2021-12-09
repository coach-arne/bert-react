import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import SearchStore from '../stores/search.store';
import {Styles, ImgContainer, ContentContainer, Card, CardTitle, CardBody, CardImage, ReleaseDate} from './Styles/styles';


const Result = () => {
    const searchStore = useContext(SearchStore);

    const renderResult = (result) =>
        <React.Fragment>
            <Styles>
                <ImgContainer>
                    <CardImage src={`https://image.tmdb.org/t/p/original/${result.poster_path }`} />
                </ImgContainer>
                <ContentContainer>
                    <Card>
                        <CardTitle>{result.title} <ReleaseDate> ( {result.release_date.substring(0,4)} ) </ReleaseDate></CardTitle>
                        <CardBody> <h2> Omschrijving </h2>
                        {result.overview}
                        </CardBody>
                    </Card>
                </ContentContainer>
            </Styles>
        </React.Fragment>;

    return (
        <React.Fragment>
            <h1>Overzicht Films</h1>
            {searchStore.results.map(renderResult)}
        </React.Fragment>
    );
} ;
export default observer(Result);
