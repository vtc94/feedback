function saveFeedback(){
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
		
		document.getElementById('notice').innerHTML = "Feedback has been sent, return to PTELT in 2s...";
		document.getElementById('notice').style.display = 'initial';
		setTimeout(() => {
			window.location.back();
		}, 2000);
	} else {
		alert('Feedback needs to have title and content 😒');
		
		document.getElementById('notice').innerHTML = "Cannot send feedback, something is missing...";
		document.getElementById('notice').style.display = 'initial';
		setTimeout(() => {
			document.getElementById('notice').style.display = 'none';
		}, 2000);
	}
}
