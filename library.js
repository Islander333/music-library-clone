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
             },
            
       printPlaylists() {
              const playlists = this.playlists;
              for (const playlistID in playlists) {
                     const currentPlaylist = playlists[playlistID];
                     const trackNumber = currentPlaylist.tracks.length;
                     console.log(currentPlaylist.id + ": " + currentPlaylist.name + " - " + trackNumber + " tracks");
              }
              },

              printTracks() {
                     const tracks = this.tracks;
                     for (let tracksID in tracks) {
                            const currentTrack = tracks[tracksID];
                            console.log(currentTrack.id + ": " + currentTrack.name + " by " + currentTrack.artist + "(" + currentTrack.album + ")");
                     
                     }
                     },

                     printPlaylist(playlistId) {
                            //get playlist with variable using playlistId
                            const playlist = this.playlists[playlistId];
                            //log playlist stuff needed
                            if (playlist) {
                       console.log(playlistId + ": " + playlist.name + " - " + playlist.tracks.length + " tracks");
                     //loop through track ids in playlist with for loop
                       for (let i = 0; i < playlist.tracks.length; i++) {
                            //find matching track id in tracks object
                         const trackId = playlist.tracks[i];
                         const track = this.tracks[trackId];
                         //if track exists, log info to console
                         if (track) {
                           console.log(trackId + ": " + track.name + " by " + track.artist + " (" + track.album + ")");
                         }
                       } 
                     }
                     },

                     addTrackToPlaylist(trackId, playlistId) {
                            //get playlist and track using parameters
                     const playlist = this.playlists[playlistId];
                     const track = this.tracks[trackId];
                     //check if playlist already has track
                     if (playlist.tracks.includes(trackId)) {
                            console.log("track already in playlist");
                     }
                     //if not, push that trackId to the playlist
                     playlist.tracks.push(trackId);
                     console.log(`Added track ${trackId} to playlist ${playlistId}`);
                     },

                     // generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
              generateUid() {
              return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
                     },

                     addTrack(name, artist, album) {
                            //use generateUid to generate unique id
                     const newTrackId = generateUid();
                     //add new track to library using newTrackId: include id, name, artist, album
                     this.tracks[newTrackId] = {
                            id: newTrackId,
                            name: name,
                            artist: artist,
                            album:  album,
                     }
                     },

                     addPlaylist(name) {
                            const newPlaylistId = generateUid();
                            this.playlists[newPlaylistId] = {
                                   id: newPlaylistId,
                                   name: name,
                                   tracks: []
                            }
                            }
                     };


                     



              

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks



// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)




// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)













// adds a track to the library

//log message showing song has been added 



// adds a playlist to the library



// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}