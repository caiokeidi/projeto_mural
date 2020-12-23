
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

}

function generateID(){
    return Math.random().toString(36).substr(2, 9);
}
