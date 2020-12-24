

module.exports = {
    posts: [
        {
            id: "213421321",
            title: "Título",
            text: "Testando um texto qualquer aqui."
        }
    ],

    getAll(){
        return this.posts;
    },

    newPost(title, text) {
        let id = generateID();
        
        this.posts.push({id, title, text});
    },

    getPost(id){
        let postA = isSameID(this.posts, id)
        return postA;
    }

}

function generateID(){
    return Math.random().toString(10).substr(2, 9);
}

function isSameID(posts, id){

    let postTarget = ''
    posts.forEach((postX) => {
        if(postX.id == id){
            postTarget = postX;
        }
    })
    //For some reason, i needed to put the return here, it was returning undefined.
    return postTarget;
}
