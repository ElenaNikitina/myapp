window.onload = function()
{

    var config = {
        apiKey: "AIzaSyDd5OMMFN4sQ5W3JhSVLWHKSdMR0KN72hQ",
        authDomain: "myapp-73570.firebaseapp.com",
        databaseURL: "https://myapp-73570.firebaseio.com",
        storageBucket: "myapp-73570.appspot.com",
        messagingSenderId: "182292378404"
      };
    firebase.initializeApp(config);

    // function displayUserPost(name, text) {
    //   $('<div/>').text(text).prepend($('<em/>').text(name+': ')).appendTo($('#PostsDiv'));
    //   $('#PostsDiv')[0].scrollTop = $('#PostsDiv')[0].scrollHeight;
    // }
}