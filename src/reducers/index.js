import { combineReducers } from 'redux';
import { reducer } from 'redux-form';
import fetchReducer from './fetchReducer';
import selectReducer from './selectReducer';
import defineTrackListReducer from './deFineTrackListReducer';
import showTrackListReducer from './showTrackListReducer';
import favoritesReducer from './favoritesReducer';
import changeCurrentSongReducer from './changeCurrentSongReducer';
import playPauseReducer from './playPauseReducer';
import updateTimeReducer from './updateTimeReducer';

export default combineReducers({
  form: reducer,
  currentSong: changeCurrentSongReducer,
  playPause: playPauseReducer,
  currentTime: updateTimeReducer,
  songs: fetchReducer,
  favorites: favoritesReducer,
  selected: selectReducer,
  trackList: defineTrackListReducer,
  showTrackList: showTrackListReducer,
});
