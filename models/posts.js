

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
    },

    deletePost(id){
        let postIndex = getIndex(this.posts, id);

        if(postIndex == null){
            return false;
        }else{
            this.posts.splice(postIndex, 1);
            return true;
            
        }
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

function getIndex(posts, id){

    let pos = 0;
    let posPost = undefined;
    posts.forEach((postX) => {
        if(postX.id == id){
            posPost = pos;
            
        }else{
            pos += 1;
        }
    })
    return posPost;

}