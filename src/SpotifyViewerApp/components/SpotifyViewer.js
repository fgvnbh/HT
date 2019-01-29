import React, {PureComponent} from 'react';
import {FETCH_STATUS} from "../constants"
import Spotify from './Spotify'

class SpotifyViewer extends PureComponent {
    render() {
        const {fetchingState, error, spotify,fetchSpotifyRequest} = this.props;
        if (fetchingState===FETCH_STATUS.IS_FETCHING)
            return <p>Завантаження даних ...</p>;
        if (error != null)
            alert("Помилка при зчитуванні даних")
        return <div>
            {spotify.length? spotify.map((spotify,i) => <Spotify key={i} spotify={spotify} />):
             "Немає даних"
            }
            <button onClick={()=>fetchSpotifyRequest()}>Додати</button>
        </div>;
    }
}
export default SpotifyViewer
