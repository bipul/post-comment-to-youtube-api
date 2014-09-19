var access_token= ''; 
// After the API loads, call a function to enable the video rating
function handleAPILoaded(authResult) {
	access_token = authResult.access_token;
  enableForm();
}

function enableForm() {
}
 
 


function postComment(){
	 
	var comment = $('#comment').val();
    var VIDEO_ID = $('#video_id').val();
    var key = 'XXXXX';
	var Url = 'https://gdata.youtube.com/feeds/api/videos/'+VIDEO_ID+'/comments';
	var XMLData = '<?xml version="1.0" encoding="UTF-8"?><entry xmlns="http://www.w3.org/2005/Atom" xmlns:yt="http://gdata.youtube.com/schemas/2007"><content>'+ comment +'</content></entry>';
	 
	$.ajax({
        url: Url,
        type: "POST",
        contentType: 'application/atom+xml',
        processData: false,
        data: XMLData,
        beforeSend: function(xhr){
			 xhr.setRequestHeader('X-GData-Key', 'key="' + key + '"');
			 xhr.setRequestHeader('Authorization', 'Bearer "' + access_token + '"');
		  }
		, error: function(XMLHttpRequest, textStatus, errorThrown){
		   alert(errorThrown);
		}, success: function(data, textStatus, XMLHttpRequest){
		   alert("Succeeded");
		}
	  }
	);


}
