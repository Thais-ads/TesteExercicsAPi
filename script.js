


//declarando uma function para pegar ela no click do botao.
function ApiRequest(){
   fetch("https://jsonplaceholder.typicode.com/todos/")
   .then(Response=>Response.json())
   

   
   //.then(body => console.log(body))
      //pegando o corpo do json.
      //console.log()
   
   
   .then(body => {
      
      const list =document.querySelector("#fill_list");
      //const que pega o item da lista




      //navegando e retornando atraves do map o primeiro indice.
      body.map((item)=>{



         //criando um elemento html
         const li =document.createElement('li');

         //populando o li, e setando na tag o id e o seu conteudo exemplo id="item.id"
         li.setAttribute('id',item.id)
         //inserindo no innerhtml o elemento titulo do json
         li.innerHTML = item.title;
         //atribuindo +1 a list.
         list.appendChild(li);
      })
   })  
}




