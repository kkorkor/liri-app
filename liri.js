require("dotenv").config({path: "variables.env"})
var Spotify = require("node-spotify-api")
var axios = require("axios")
var fs = require("fs")
var keys = require("./keys.js");

// spotify
function spotify(song){
 
var spotify = new Spotify({
  id: keys.spotify.id,
  secret: keys.spotify.secret
});
 
spotify.search({ type: 'track', query: song }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(JSON.stringify(data.tracks.items[0].artists[0].name,null,2)); 
});
}
spotify ("ASTROWORLD")

// omdb
axios.get('/http://www.omdbapi.com/?i=tt3896198&apikey=386a9967')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  var omdb = require('omdb');
 
omdb.search('Get Out', function(err, movies) {
    if(err) {
        return console.error(err);
    }
 
    if(movies.length < 1) {
        return console.log('No movies were found!');
    }
 
    movies.forEach(function(movie) {
        console.log('%s (%d)', movie.title, movie.year);
    });
 
 
});
 
omdb.get({ title: 'Get Out', year: 2017 }, true, function(err, movie) {
    if(err) {
        return console.error(err);
    }
 
    if(!movie) {
        return console.log('Movie not found!');
    }
 
    console.log('%s (%d) %d/10', movie.title, movie.year, movie.imdb.rating);
    console.log(movie.plot);

omdb("Get Out")    
 
// Bands in town 
  axios.get('/92f0c658-e1c1-4a8d-96c9-992b02c72395')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
