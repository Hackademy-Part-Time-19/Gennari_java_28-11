
let persona = {

    nome: "Alessandro",

    cognome: "Gennari",

    età: 32,

    saluta: function() {
        
        console.log("ciao sono " + this.nome)
    }

}
persona.saluta();