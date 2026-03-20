const topTracks = ["Blinding Lights", "Levitating", "Stay", "Peaches"];
const newReleases = ["Flowers", "Unholy", "Calm Down"];

const featuredArtist = {
    name: "The Weeknd",
    genre: "Pop/R&B",
    monthlyListeners: 85000000
};
//TASK 1
const fullPlaylist = [...topTracks, ...newReleases, "My track"];
console.log(fullPlaylist);
//TASK2
let [nowPlaying, upNext, ...queue] = fullPlaylist;
console.log("Now Playing: ", nowPlaying);
console.log("Up Next: ", upNext);
console.log("Queue: ", queue);
//TASK3
const { name, genre, monthlyListeners: listener } = featuredArtist;
console.log(`${name} | ${genre} | ${listener} listners`);
//TASK 4
const updatedArtist = { ...featuredArtist, monthlyListeners: 90000000, latestAlbum: "Dawn FM" };
console.log("Original: ", featuredArtist);
console.log("Updated: ", updatedArtist);

//TASK 5
function chartStats(...nums) {
    console.log(`Best position: ${Math.min(...nums)} | Worst Position: ${Math.max(...nums)}`);
}

chartStats(3, 1, 7, 2, 5, 4);


const lastWeek = ["Flowers", "Blinding Lights", "Stay"];
const thisWeek = ["Unholy", "Flowers", "Levitating"];


const [rank1, rank2, rank3] = thisWeek;
const remainingSongs = lastWeek.filter(song => !thisWeek.includes(song));
combinedChart = [...thisWeek, ...remainingSongs];

console.log(`rank1: ${rank1} | rank2: ${rank2} | rank3: ${rank3}`);
console.log(combinedChart);