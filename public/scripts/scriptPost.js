

document.addEventListener("DOMContentLoaded", () => {
    updateScreen();
})

function updateScreen(){
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('id');
    
    let url = 'http://localhost:3000/api/post/' + myParam;
    fetch(url).then(res => {
        return res.json()
    }).then(json => {
        let postObject = JSON.parse(json);

        let title = document.getElementById("containerTitle");
        let text = document.getElementById("containerText");

        title.innerText = postObject.title;
        text.innerText = postObject.text;
    })
}