import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Levitating', duration: '4:45' },
        { title: 'Walk Em Down', duration: '2:15' },
        { title: 'Glitter', duration: '3:57' },
    ];
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    } 
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer,
});