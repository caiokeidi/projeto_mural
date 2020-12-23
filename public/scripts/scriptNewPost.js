
function submit(){
    console.log("Aqui")
    let title = document.getElementById("inputTitle").value;
    let text = document.getElementById("inputText").value;

    let post = {title, text};

    const options = {
        method: "POST",
        headers: new Headers({"content-type" : "application/json"}),
        body: JSON.stringify(post)
    }

    fetch('http://localhost:3000/api/newPost', options).then(res => {
        if(res.status == 200){
            let aviso = document.getElementById("aviso");
            aviso.className = "black"
            aviso.innerText =  "Post realizado com sucesso";

            document.getElementById("inputTitle").value = '';
            document.getElementById("inputText").value = '';
        }else{

            let aviso = document.getElementById("aviso");
            aviso.className = "red"
            aviso.innerText = "Erro: " + res.status +  " no envio de dados";
        }
    })
}
