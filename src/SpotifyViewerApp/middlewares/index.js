import {fetchSpotifyRequest,fetchSpotifySuccess, fetchSpotifyFailure} from '../actions'
const spotifyFetchingMiddleware = store => next => action => {
    const result = next(action);

    if (action.type === fetchSpotifyRequest().type) {
        fetch('https://api.thecatapi.com/v1/images/search',{method:"GET"})
            .then(response=>response.json())
            .then(spotify => {
                store.dispatch(fetchSpotifySuccess({title:spotify[0].id, src:spotify[0].url}))
            })
            .catch(error => {
                store.dispatch(fetchSpotifyFailure({error}))
            })
    }
    return result;
}
export default spotifyFetchingMiddleware