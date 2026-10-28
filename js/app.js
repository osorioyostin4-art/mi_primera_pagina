const entrada1 =document.getElementById("entrada1");
const salida1 = document.getElementById("salida1");
entrada1.addEventListener("input",function(){
    let contenido = entrada1.value;
    if(contenido < 67){
        salida1.textContent="te falta"
    }
    else if(contenido > 67){
        salida1.textContent="te pasaste"
    }
    else{
        salida1.textContent="ese es mi numero favorito"
    }

});

const selector = document.getElementById("selector");
const imagen = document.getElementById("imagen");
const texto1 = document.getElementById("texto");

selector.addEventListener("change", function(){
let opcion = selector.value;
if( opcion === "marca"){
    texto1.textContent="mi marca de ropa favorita es: adidas"
    imagen.src ="https://brandemia.org/contenido/subidas/2022/04/adidas-3-1024x551.jpg"
    
    
}
else if( opcion == "jugador"){
    texto1.textContent="mi jugador favorito es: Ronaldinho"
    imagen.src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCnJECVnD2JVqFtBFi98yBZNuk41GvJtr5Y7ePCoT3_A&s=10"
}
else if (opcion == "cancion"){
    texto1.textContent="mi cancion favorita es: En la ciuda de la furia de soda Estereo"
    imagen.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPCzQOOozPQICUPdccBnUEWBcWeJSUtzy88Bt9UlT2yQ&s=10"
}
})
const boton = document.getElementById("deimer")
boton.addEventListener("click", function(){
    alert("al presionar aceptar, acepta pasar la materia a todos")
}
)