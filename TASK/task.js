const topTracks = ["Blinding Lights", "Levitating", "Stay", "Peaches"];
const newReleases = ["Flowers", "Unholy", "Calm Down"];
const featuredArtist = {
    name: "The Weeknd",
    genre: "Pop/R&B",
    monthlyListeners: 85000000
};
//TASK 1
fullPlaylist = [...topTracks, ...newReleases, ...topTracks];
console.log(fullPlaylist);

//TASK 2

let [nowplaying, upNext, ...queue] = fullPlaylist;
console.log("Nowplaying: ", nowplaying);
console.log("UpNext", upNext);
console.log("")


//TASK 3


