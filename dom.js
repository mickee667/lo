const genererunnombrealéatoire = () => {
    //Génerer un nombre entre 1 et 100
    const nombreDécimal = (Math.random() * 100) + 1
    const nombre = Math.trunc(nombreDécimal)

    // Retourner ce nombre
    return nombre

}

let nombreTentative = 1

const nombreATrouver = genererunnombrealéatoire()

console.log(nombreATrouver)

const proposeNombre = () => {
    // Récupérer le champs avec le nombre
    const input = document.getElementById('input-nombre')

    // Récupérer la valeur du champs
    const valeur = input.value

    console.log(valeur)
 
    // Transformer la valeur text en nombre
    const nombre = parseInt(valeur, 10)

     const divProposition = document.createElement('div')
     divProposition.textContent = 'Essaie' + nombreTentative

     const container = document.getElementById('resultat')
     resultat.appendChild(divProposition)
     

    console.log(nombre)

    // Comparer le nombre à trouver
    //le nombre est égale au nombre trouver
    if (nombre === nombreATrouver) {
        //la partie est finie
        //afficher bravo
        console.log('Bravo')
        //finir
    } else{
    //le nombre est faux
    //si le nombre est plus grand 
      if (nombreATrouver > nombre) {
        //afficher trop grand
        console.log('le nombre est trop petit')
    } else{
    //si le nombre est plus petit
    //afficher trop petit
     console.log('le nombre est trop grand')
    

       nombreTentative += 1
     }

    }
}

// Récupérer le button
//lorsqu'il y a un click, éffectuer une proposition de nombre
const boutton = document.getElementById('boutton-proposer')
boutton.addEventListener('click', proposeNombre)