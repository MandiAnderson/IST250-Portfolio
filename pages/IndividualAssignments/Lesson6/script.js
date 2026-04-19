const albums = document.querySelectorAll('.Album');
const records = document.querySelectorAll('.Record');
const albumArt = document.querySelectorAll('.AlbumCover');


records.forEach(records => {
    records.style.boxShadow = '0px 0px 12px rgba(0, 0, 0, 0.5)';
});

albumArt.forEach(albumArt => {
    albumArt.style.boxShadow = '0px 0px 12px rgba(0, 0, 0, 0.5)';
});

