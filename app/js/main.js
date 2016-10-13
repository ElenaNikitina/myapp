window.onload = function()
{
    var myDataRef = new Firebase('https://myapp-73570.firebaseio.com/');
    myDataRef.on('child_added', function(snapshot) {
      var post = snapshot.val();
      displayUserPost(post.name, post.text);
    });

    function submitPost(e){
      var myDataRef = new Firebase('https://myapp-73570.firebaseio.com/');
      var name = $('#titleInput').val();
      var text = $('#postInput').val();
      myDataRef.push({name: name, text: text});
      $('#postInput').val('');
      e.preventDefault();
    };

    function displayUserPost(name, text) {
      $('<div/>').text(text).prepend($('<em/>').text(name+': ')).appendTo($('#PostsDiv'));
      $('#PostsDiv')[0].scrollTop = $('#PostsDiv')[0].scrollHeight;
    }
}