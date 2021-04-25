import { render } from './helper/render.js';
import { playListData } from './data.js';
import { MyPlaylist } from './components/MyPlaylilst.js';
import { PlayListArtist } from './components/PlayLIstArtist.js';

const myPlayLists = [...document.querySelectorAll('.plalistYourPlaylist')];
const playListArtists = document.querySelectorAll('.page-block')[1];
const $myPlaylist = document.getElementById('myPlaylist');
const $playListArtist = document.getElementById('playListArtist');

myPlayLists.forEach(playlist => {
  playlist.addEventListener('click', () => {
    location.href = location.origin + '/src/pages/artists.html';
  });
});

playListArtists.addEventListener('click', e => {
  if (!e.target.classList.contains('playlistArtist')) return;
  location.href = location.origin + '/src/pages/playlist.html';
});

function renderDOM() {
  render(playListData, MyPlaylist, $myPlaylist);
  render(playListData, PlayListArtist, $playListArtist);
}

document.addEventListener('DOMContentLoaded', renderDOM);
