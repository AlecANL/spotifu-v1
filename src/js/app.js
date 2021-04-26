import { render } from './helper/render.js';
import { playListData } from './data.js';
import { MyPlaylist } from './components/MyPlaylilst.js';
import { PlayListArtist } from './components/PlayLIstArtist.js';

const $myPlayListList = document.querySelectorAll('.playlistList')[0];
const $playListArtists = document.querySelectorAll('.page-block')[1];
const $myPlaylist = document.getElementById('myPlaylist');
const $playListArtist = document.getElementById('playListArtist');

$myPlayListList.addEventListener('click', e => {
  if (!e.target.classList.contains('plalistYourPlaylist')) return;
  location.href =
    location.origin + location.pathname + 'src/pages/artists.html';
});

$playListArtists.addEventListener('click', e => {
  if (!e.target.classList.contains('playlistArtist')) return;
  location.href =
    location.origin + location.pathname + 'src/pages/playlist.html';
});

function renderDOM() {
  render(playListData, MyPlaylist, $myPlaylist);
  render(playListData, PlayListArtist, $playListArtist);
}

document.addEventListener('DOMContentLoaded', renderDOM);
