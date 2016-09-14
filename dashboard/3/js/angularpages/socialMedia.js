var app = angular.module("socialMediaApp", []);
app.controller("socialMediaController", function($scope)
{
  $scope.socialMedia =
  [
    {"socialMedias" : "Facebook", "fa": "fa-facebook-square"},
    {"socialMedias" : "Twitter", "fa": "fa-twitter-square"},
    {"socialMedias" : "LinkedIn", "fa": "fa-linkedin-square"},
    {"socialMedias" : "YouTube", "fa": "fa-youtube-play"},
    {"socialMedias" : "Blog", "fa": "fa-rss-square"},
    {"socialMedias" : "GooglePlus", "fa": "fa-google-plus-square"},
    {"socialMedias" : "Pinterest", "fa": "fa-pinterest-square"},
    {"socialMedias" : "Yelp", "fa": "fa-yelp"},
    {"socialMedias" : "Instagram", "fa": "fa-instagram"},
    {"socialMedias" : "Flickr", "fa": "fa-flickr"}
  ]
  ,
  $scope.socialMediaPoster =
  [
    {"socialMediaPoster" : "facebook", "fa": "fa-facebook", "active": true},
    {"socialMediaPoster" : "twitter", "fa": "fa-twitter", "active": false},
    {"socialMediaPoster" : "google", "fa": "fa-google-plus", "active": false},
    {"socialMediaPoster" : "linkedin", "fa": "fa-linkedin", "active": false}
  ]


});
