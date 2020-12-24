
document.addEventListener("DOMContentLoaded", () => {
    updatePosts();
})



function updatePosts(){

    fetch('http://localhost:3000/api/allPosts').then(res => {
        return res.json()
    }).then(json => {
        let allPosts = JSON.parse(json);

        let postsHTML = ""

        allPosts.forEach(post => {
            let id = post.id;
            let title = post.title;
            let text = post.text;

            let postElements = `<div id="${id}" class="post">
                                    <div class="title">${title}</div>
                                    <div class="text">${text}</div>
                                    <div class="leia_mais" onclick="enterPost(${id})">+</div>
                                </div>`
            

            postsHTML += postElements;
        })

        document.getElementById('posts').innerHTML = postsHTML;
    })
}

function enterPost(id){
    console.log(id)
    window.location.href = "http://localhost:3000/post?id=" + id;
}