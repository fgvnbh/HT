import {createActions} from 'redux-actions'
const {fetchSpotifyRequest,
    fetchSpotifySuccess,
    fetchSpotifyFailure}=createActions(
    {
        FETCH_Spotify_REQUEST:undefined,
        FETCH_Spotify_SUCCESS:undefined,
        FETCH_Spotify_FAILURE:undefined
    }
)

export {fetchSpotifyRequest,fetchSpotifySuccess, fetchSpotifyFailure}