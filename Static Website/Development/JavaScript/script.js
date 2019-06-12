//fetching image from html by its ID:
var myImage=document.getElementById("myPhoto");
//importing images for slider:
var imageArray=["../Images/s2.jpg","../Images/s3.jpg","../Images/1.jpg","../Images/b4.jpg","../Images/4.jpg","../Images/2.jpg","../Images/s4.png",
"../Images/s6.jpg","../Images/intro1.jpg"];

var imageIndex=0;
//function which changes images:
function changeImage () {
	myPhoto.setAttribute("src", imageArray [ imageIndex]);
	imageIndex++;
	if (imageIndex>=imageArray.length) {
		imageIndex=0;
	}
}
//Setting Image change time:
var intervalHandle = setInterval(changeImage,2000);

myPhoto.onclick=function() {
	clearInterval(intervalHandle);
}
//Validating form:
function validateForm(){
	var x = document.forms["signup"] ["Name"].value;
	if(x==""){
		alert("First name must be entered!!!");
		return false;
	}
	var x = document.forms["signup"] ["Address"].value;
	if(x==""){
		alert("Address must be entered!!!");
		return false;
	}
		var x = document.forms["signup"] ["Email"].value;
	if(x==""){
		alert("Please provide your email for us to reply!!!");
		return false;
	}
	var x = document.forms["signup"] ["Gender"].value;
	if(x==""){
		alert("Gender must be selected!!!");
		return false;
	}

}