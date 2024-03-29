const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Fallin", artist: "Alicia Keys" , genre: "R&B" },
    { title: "We belong together", artist: "mariah carey" , genre: "R&B" },
    { title: "Say my name", artist: "Beyonce" , genre: "R&B" },
    { title: "Without you", artist: "Chris Brown" , genre: "R&B" },
    { title: "So Sick ", artist: "Ne-yo" , genre: "R&B" },
    { title: "Shape of you ", artist: "Ed sheeran" , genre: "Pop" },
    { title: "Diamonds", artist: "Rihanna" , genre: "Pop" },
    { title: "Imagine dragons", artist: "Bad liar" , genre: "Pop" },
    { title: "Clean Bandits",artist: "Rockabye" , genre: "Pop" },
    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock", 
    "Gamora": "Pop",
    "Drax" : "R&B",
    "Rocket":"Rock",
    "Groot":"Pop"
    // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Initialize an empty object to store playlists for each Guardian
    const playlists = {};

    // Iterate over each Guardian
    Object.keys(guardians).forEach(guardian => {
        // Get the preferred genre for the current Guardian
        const preferredGenre = guardians[guardian];
        
        // Filter songs based on the preferred genre
        const playlist = songs.filter(song => song.genre === preferredGenre);
        
        // Store the playlist for the current Guardian
        playlists[guardian] = playlist.map(song => song.title); // Only storing song titles in the playlist
    });

    // Return the playlists object
    return playlists;
}

// Call generatePlaylist and display the playlists for each Guardian
const playlists = generatePlaylist(guardians, songs);

// Display the playlists for each Guardian
const playlistsDiv = document.getElementById('playlists');
Object.keys(playlists).forEach((guardian) => {
  const playlistContainer = document.createElement("div");
  playlistContainer.classList.add("playlist");

  const playlistTitle = document.createElement("h1");
  playlistTitle.textContent = `${guardian}'s Playlist:`;
  playlistContainer.appendChild(playlistTitle);

  const playlistList = document.createElement("ul");
  playlists[guardian].forEach((song) => {
    const listItem = document.createElement("li");
    const songTitle = document.createElement("span");
    songTitle.textContent = song;
    songTitle.style.textDecoration = "underline";
    songTitle.style.color = "yellow";
    songTitle.style.fontWeight = "bold";
    listItem.appendChild(songTitle);
    listItem.classList.add("song");

    // Adding artist name
    const songArtist = document.createElement("span");
    const artistName = songs.find((s) => s.title === song).artist;
    songArtist.textContent = " by " + artistName;

    // Appending artist name to the list item
    listItem.appendChild(songArtist);

    // Appending list item to the playlist list
    playlistList.appendChild(listItem);
  });
  playlistContainer.appendChild(playlistList);

  playlistsDiv.appendChild(playlistContainer);
});



