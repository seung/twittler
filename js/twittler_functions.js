visitor = "me";

var updateFeed = function(){
  var $tweet_feed = $('.tweet_feed');
  $tweet_feed['html']('');
  var index = streams['home']['length'] - 1;
  var append_html = "";
  while(index >= 0){
    var tweet = streams['home'][index];
    console['log']('rendering a tweet:', tweet);
    var html = '<a href="#myModal" class="user_name" role="button" data-toggle="modal">' + 
    tweet['user'] + '</a> : ' + tweet['message'] + '' + '<br/>' + tweet['created_at'] + '<br/>';
    append_html += html;
    index--;
  }
  $tweet_feed['html'](append_html);
};

