export function MyPlaylist({ name, cover }) {
  return `
    <div class="plalistYourPlaylist">
        <div class="playlistYourPlaylist-cover">
            <img
            src="${cover}"
            width="76"
            height="76"
            alt="cover your playlist ${name}"
            />
        </div>
        <div class="playlistYourPlaylist-description">
            <h3 class="palylistYourPlaylist-title">
            ${name}
            </h3>
            <div class="playlistYourPlaylist-control">
            <button
                aria-label="play"
                title="play"
                class="buttonIcon is-green"
            >
                <i
                class="icon-play"
                aria-hidden="true"
                title="play"
                aria-label="play"
                ></i>
            </button>
            </div>
        </div>
        </div>
    `;
}
