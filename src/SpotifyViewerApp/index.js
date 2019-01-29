import React from 'react'

import {Provider, connect} from 'react-redux'
import SpotifyViewer from './components/SpotifyViewer'
import {fetchSpotifyRequest} from './actions'
import store from './store'

const mapStateToProps = state => ({
    error: state.error,
    spotify: state.spotify,
    fetchingState: state.fetchingState,
});

const mapDispatchToProps= {
    fetchSpotifyRequest
};
let ConnectedSpotifyViewer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SpotifyViewer);

export default () => (
    <Provider store={store}>
        <ConnectedSpotifyViewer/>
    </Provider>
)