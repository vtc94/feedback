var firebaseConfig = {
	apiKey: "AIzaSyAI3DcxcJRHcJkYi9GvFcToIy9cq6QYIfk",
	authDomain: "pteapp-47926.firebaseapp.com",
	databaseURL: "https://pteapp-47926.firebaseio.com",
	projectId: "pteapp-47926",
	storageBucket: "pteapp-47926.appspot.com",
	messagingSenderId: "714326360861",
	appId: "1:714326360861:web:f239473a595d507f6757f4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.database();

function saveBlog(){
	var blogTitle = document.getElementById("newBlogTitle").innerText.trim();
	console.log(blogTitle);
	var blogContent = document.getElementById("newBlogContent").innerText.trim();
	//console.log(blogContent);
	
	if(blogTitle != '' && blogContent != ''){
		//var author = localStorage.getItem("user");
		//console.log(author);
		let date = new Date();
		
		var newBlog = {
			//author: author,
			timestamp: date.getTime().toISOString(),
			title: blogTitle,
			content: blogContent
		};
		console.log(newBlog);
		
		db.ref('feedback/' + date.getTime()).set(newBlog);
	}
}
