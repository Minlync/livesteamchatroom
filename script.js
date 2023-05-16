
setTimeout(function() {
  document.getElementById('chat-box').style.display = 'block';
}, 3000); // display the chat box after 3 seconds

document.querySelector('#chat-box .btn-accept').addEventListener('click', function() {
  // handle accept button click
  document.getElementById('chat-box').style.display = 'none';
});

document.querySelector('#chat-box .btn-deny').addEventListener('click', function() {
  // handle deny button click
  document.getElementById('chat-box').style.display = 'none';
});
