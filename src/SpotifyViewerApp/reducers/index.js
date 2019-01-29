import {FETCH_STATUS} from "../constants"
import {handleActions} from 'redux-actions'
import {fetchSpotifyRequest,fetchSpotifySuccess, fetchSpotifyFailure} from '../actions'
const initialState = {
    fetchingState: FETCH_STATUS.IS_PASSIVE,
    spotify: [{title:undefined,src:undefined}],
    error: null
};
const reducer = handleActions(
    {
        [fetchSpotifyRequest]: state => ({
                 ...state,
                fetchingState: FETCH_STATUS.IS_FETCHING
        }),
        [fetchSpotifySuccess]: (state,action) => ({
                 ...state,
                 fetchingState: FETCH_STATUS.FETCHED_DATA,
                 spotify: [...state.spotify, action.payload]
        }),
        [fetchSpotifyFailure]: (state,action) => ({
                ...state,
                fetchingState: FETCH_STATUS.FETCHING_ERROR,
                error: action.payload.error
        })

    },
    initialState
);

export  default reducer