var visitor = "me";

// Renders tweets to be displayed from twitter_data.js to tweet_feed
var updateFeed = function(){
  var $tweet_feed = $('.tweet_feed');
  $tweet_feed.html('');
  var index = streams.home.length - 1;
  var append_html = "";
  while(index >= 0){
    var tweet = streams.home[index];
    console['log']('rendering a tweet:', tweet);
    var html = 
      '<a href="#myModal" class="user_name" role="button" data-toggle="modal">' 
        + tweet.user 
      + '</a>' 
      + ' : ' + tweet.message + '' + '<br/>' + 
      '<small>' +
        '<i>' + moment(tweet.created_at).fromNow() + '</i>' +
      '</small>' + '<br/>';      
    append_html += html;
    index--;
  }
  $tweet_feed['html'](append_html);
};

// Creates a modal label & modal body for any given username that is clicked. 
$('body').on('click', '.user_name', function(e){
    var selected_user = $(e.target).text();
    $("#myModalLabel").html(selected_user);   
    var tweet_count = streams.users[selected_user].length;
    selected_user_tweets = "";
    for (var i=0; i < tweet_count; i++) {
      var time_ago = streams.users[selected_user][i].created_at;
      var now = moment(time_ago).fromNow();
      selected_user_tweets += 
        '<p>' + 
          streams.users[selected_user][i].message + ' ' +  '<br>'
            + '<small>' + 
              '<i>' + now + '</i>' +
            '</small>' +
        '</p>';
    }
    $(".modal-body").html(selected_user_tweets);
});
 
// Posts a tweet and refreshes feed 
$('.send_tweet').click(function() {
  var user_input = $('.tweet_text').val();
  writeTweet(user_input);
  updateFeed();
});

// Refreshes feed
$('.refresh').click(function(){
  updateFeed();
});

// On document load, populates feed
$(function(){
  updateFeed();
});