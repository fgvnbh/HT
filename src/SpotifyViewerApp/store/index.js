import spotifyFetchingMiddleware from '../middlewares'
import {createStore,applyMiddleware} from "redux";
import reducer from "../reducers";

let initState={spotify:[{title:"first",src:'sdfdsg'}]};
const store = createStore(reducer, initState,
    applyMiddleware(spotifyFetchingMiddleware));

export default store;