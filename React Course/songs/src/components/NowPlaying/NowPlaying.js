import React from 'react';
import { connect } from 'react-redux';

const NowPlaying = ({ selectedSong }) => {
    return (
        <div className='ui cards'>
            <div className='card'>
                <div className='content'>
                    <div className='header'>Now Playing</div>
                    <div className='description'>{(selectedSong) ? selectedSong.title : 'No Song Selected'}</div>
                    <div className='meta'>{(selectedSong) ? selectedSong.duration : 'N/A'}</div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { selectedSong: state.selectedSong };
}

export default connect(mapStateToProps)(NowPlaying);