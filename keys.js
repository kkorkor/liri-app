console.log("api keys are loaded")
exports.spotify = {
    id: process.env.SPOTIFY_ID,
     secret: process.env.SPOTIFY_SECRET

}

exports.ombd = {
    url: process.env.OMBD_APIKEY
}

exports.bandsintown = {
    apikey: process.env.BANDSINTOWN_APIKEY  
}
