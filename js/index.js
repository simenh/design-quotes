$.ajaxSetup({ cache: false });

function getContent() {
  $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function(json) {
    var quote = json.shift()
    var quoteContent = quote.content.replace(/<[\/]{0,1}(p)[^><]*>/ig,"");
    var quoteTitle = quote.title.replace(/<[\/]{0,1}(p)[^><]*>/ig,"");
    console.log(quoteContent);
    $('.twitter-share').attr('href', 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(quoteContent + '-' + quoteTitle));
    $("#quote-content").html(quote.content);
    $("#quote-person").html('- ' + quote.title);
    });
}

$(document).ready(function() {
  $("#get-quote").on("click", function() {
   getContent();
  });
  $(".twitter-share").ready(function(){
    var url = "https://twitter.com/intent/tweet?text=" + quoteContent + " -" + quoteTitle;
    $(".twitter-share").attr("href", url);
  })
  getContent();
});