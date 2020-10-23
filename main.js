function saveBlog(){
	var blogTitle = document.getElementById("newBlogTitle").innerText.trim();
	console.log(blogTitle);
	var blogContent = document.getElementById("newBlogContent").innerText.trim();
	//console.log(blogContent);
	
	if(blogTitle != '' && blogContent != ''){
		var author = localStorage.getItem("user");
		//console.log(author);
		var newBlog = {
			author: author,
			title: blogTitle,
			content: blogContent
		};
		console.log(newBlog);
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
			if(this.readyState == 4 && this.status == 200){
				var w = window.open('','','width=100,height=100')
				w.document.write('Saved successfully! Redirecting to blog list...')
				w.focus()
				setTimeout(() => {
					w.close();
					window.history.back();
				}, 1000);
			}
		};
		
		xhttp.open('post', location.pathname, true);
		xhttp.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
		xhttp.send('newBlog=' + JSON.stringify(newBlog));
	}
}
