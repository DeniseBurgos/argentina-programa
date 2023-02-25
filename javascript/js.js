//funcion que me aplica el estilo a la opcion seleccionada en el menu y quita la previamente seleccionada
function seleccionar(link){
    var opciones = document.querySelectorAll ('#links a');
    opciones [0].className = "";
    opciones [1].className = "";
    opciones [2].className = "";
    opciones [3].className = "";
    opciones [4].className = "";
    link.className = "seleccionado";
//desaparece el menu una vez que se ha seleccionado la opcion responsive 
var  x = document.getElementById ("nav");
x.className = "";

} 
//funcion que muestra el menu responsive
function responsiveMenu(){
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}
//para animar las barritas de habilidadesss
window.onscroll = function(){ 
    efectoHabilidades() 
};
//para aplicar animacion en las barritas
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("ps").classList.add("barra-progreso4");
    }

}