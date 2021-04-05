import React from 'react';
import SongList from './SongList/SongList';
import NowPlaying from './NowPlaying/NowPlaying';

const App = () => {
    return (
        <div>
            <SongList />
            <NowPlaying />
        </div>
    );
}

export default App;