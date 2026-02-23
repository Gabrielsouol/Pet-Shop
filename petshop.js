function cadastrarPet(){

    let nomePet= document.write.getElementById("nome");
    
    let especiePet = document.getElementById ("especie").value; 

    let opcaoSexo = document.querySelector('input[name="sexo"]:checked');
    
    let sexoPet="Não informado";

    if (opcaoSexo) { 
        
        sexoPet = opcaoSexo.value

    }

 let servicosSelecionados = document.querySelectorAll("serv:checked")

    let listaServicos = "";

    for (let cont=0; cont < servicosSelecionados.length;cont++){

        let nomeservico = servicosSelecionados[cont].value;

        listaServicos += nomeservico + " ";

        localStorage.setItem("nomePet", nomePet);
        localStorage.setItem("especiePet", especiePet);
        localStorage.setItem("sexoPet", sexoPet);
        localStorage.setItem("listaServicos", listaServicos);

        window.location.href = "comprovante.html";
    }


}

