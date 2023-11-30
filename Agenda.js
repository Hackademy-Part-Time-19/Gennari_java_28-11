let agenda = {

    listacontatti: [{
        nome: "Alessandro",
        numero: "1111111111",
    },
    {
        nome: "Mario",
        numero: "2222222222",
    },
    {
        nome: "Filippo",
        numero: "3333333333",
    },
    {
        nome: "Giovanni",
        numero: "4444444444",
    }],


    mostracontatti: function () {
        console.log(this.listacontatti)
        
    },   

    //agenda.mostracontatti()

    //agenda.listacontatti.forEach((elemento) =>{
    //    console.log("nome: " + elemento.nome + " numero: " + elemento.numero)
    //})

     eliminaContatto: function (contattoDaEliminare) {
        
        let indice = this.listacontatti.findIndex((contatto) => {
            return contatto.nome == contattoDaEliminare
        })

        if (indice != -1) {
            this.listacontatti.splice(indice, 1)

        }else{
            console.log("Contatto non trovato")
        }

    },

    //agenda.eliminaContatto( {
    //    nome: "Filippo",
    //    numero: "3333333333",
    //},)

    aggiungiNuovoContatto: function (elemento) {

        this.listacontatti.push(elemento)
        
    },

    //agenda.aggiungiNuovoContatto( {
    //    nome: "Maria",
    //    numero: "5555555555",
    //},)


    modificaContatto: function (nomeDaModificare, nuovoNome,nuovoNumero) {

        let indice = this.listacontatti.findIndex((contatto) =>{
            return contatto.nome == nomeDaModificare
        })
        
        if (indice != -1) {
            this.listacontatti[indice].nome.nuovoNome
            this.listacontatti[indice].numero.nuovoNumero
        } else {
            console.log("Contatto non trovato")
        }
    }

    //agenda.modificaContatto({
    //    nome: "Giovanni",
    //    numero: "4444444444",
    //}, "Mario", "6666666666") 
}

console.log(agenda)









 














    

    