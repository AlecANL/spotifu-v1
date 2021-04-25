export function PlayListArtist({ name, cover, description, type }) {
  return `
        <div class="playlistArtist">
            <div class="playlistArtist-cover ${type}" >
                <img
                src="${cover}"
                width="150"
                height="150"
                alt="cover playlist ${name}"
                />
                <button
                class="buttonIcon is-green"
                title="play"
                aria-label="play"
                >
                <i class="icon-play" aria-hidden="true"></i>
                </button>
            </div>
            <h3 class="playlistArtist-title">${name}</h3>
            <h4 class="playlistArtist-description">
                ${description}
            </h4>
            </div>
  `;
}
