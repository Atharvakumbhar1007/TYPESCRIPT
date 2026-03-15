const topTracks = ["Blinding Lights", "Levitating", "Stay", "Peaches"];
const newReleases = ["Flowers", "Unholy", "Calm Down"];
const featuredArtist = {
    name: "The Weeknd",
    genre: "Pop/R&B",
    monthlyListeners: 85000000
};
//TASK 1
fullPlaylist = [...topTracks, ...newReleases, "HANUMAN CHALISA"];
console.log(fullPlaylist);

//TASK 2

let [nowplaying, upNext, ...queue] = fullPlaylist;



//TASK 3


