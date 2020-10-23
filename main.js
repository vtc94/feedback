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
	} else {
		alert('Feedback needs to have title and content 😒');
	}
}
