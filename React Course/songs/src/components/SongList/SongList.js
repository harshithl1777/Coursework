import React from 'react';
import { connect } from 'react-redux';

import { selectSong } from '../../actions';

const SongList = ({ songs, selectSong }) => {

    const renderSongs = () => {
        return songs.map((song, index) => {
            return (
                <div className="item" key={index}>
                    <div className="right floated content">
                        <button onClick={() => selectSong(song)} className="ui button">Play</button>
                    </div>
                    <div className="content">
                        <div className="header">{song.title}</div>
                        <div className="description">{song.duration}</div>
                    </div>
                </div>
            );
        });
    }

    return (
        <div className='ui divided list'>
            {renderSongs()}
        </div>
    );
}

const mapStateToProps = (state) => {
    return { songs: state.songs };
}

export default connect(mapStateToProps, { selectSong })(SongList);