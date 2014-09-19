post-comment-to-youtube-api
===========================

Post a comment to youtube using v2 and v3 api

You need to modify auth.js line number 38 loadAPIClientInterfaces(); add parameter to method like  loadAPIClientInterfaces(authResult);

similarly replace the method "loadAPIClientInterfaces" with below code:

function loadAPIClientInterfaces(authResult) {
  gapi.client.load('youtube', 'v3', function() {
	 
    handleAPILoaded(authResult);
  });
}

