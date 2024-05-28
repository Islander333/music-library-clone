const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {
const playlists = library.playlists;
for (const playlistID in playlists) {
       const currentPlaylist = playlists[playlistID];
       const trackNumber = currentPlaylist.tracks.length;
       console.log(currentPlaylist.id + ": " + currentPlaylist.name + " - " + trackNumber + " tracks");
}
}


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
const tracks = library.tracks;
for (let tracksID in tracks) {
       const currentTrack = tracks[tracksID];
       console.log(currentTrack.id + ": " + currentTrack.name + " by " + currentTrack.artist + "(" + currentTrack.album + ")");

}
}



// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
       //get playlist with variable using playlistId
       const playlist = library.playlists[playlistId];
       //log playlist stuff needed
  console.log(playlistId + ": " + playlist.name + " - " + playlist.tracks.length + " tracks");
//loop through track ids in playlist with for loop
  for (let i = 0; i < playlist.tracks.length; i++) {
       //find matching track id in tracks object
    const trackId = playlist.tracks[i];
    const track = library.tracks[trackId];
    //if track exists, log info to console
    if (track) {
      console.log(trackId + ": " + track.name + " by " + track.artist + " (" + track.album + ")");
    }
  }
}




// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
       //get playlist and track using parameters
const playlist = library.playlists[playlistId];
const track = library.tracks[trackId];
//check if playlist already has track
if (playlist.tracks.includes(trackId)) {
       console.log("track already in playlist");
}
//if not, push that trackId to the playlist
playlist.tracks.push(trackId);
console.log(`Added track ${trackId} to playlist ${playlistId}`);
}
//testing
addTrackToPlaylist("t03", "p01");
console.log(library.playlists["p01"].tracks);



// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
const addTrack = function(name, artist, album) {

}


// adds a playlist to the library
const addPlaylist = function(name) {

}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}