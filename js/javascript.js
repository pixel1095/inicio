
//Buscador de contenido

//Ejecutando Funciones

document.getElementById("icon-search").addEventListener("click", mostrar_buscador);
document.getElementById("cover-ctn-search").addEventListener("click", ocultar_buscador);


//Declarando variables
bars_search =       document.getElementById("ctn-bars-search");
cover_ctn_search =  document.getElementById("cover-ctn-search");
inputSearch =       document.getElementById("inputSearch");
box_search =        document.getElementById("box-search");
icon_search =       document.getElementById("icon-search");

//Function para mostrar el buscador
function mostrar_buscador(){

    bars_search.style.top = "80px";
    cover_ctn_search.style.display="block";
    cover_ctn_search.style.top="0%"
    inputSearch.focus();
}
            if (inputSearch.value === ""){
            box_search.style.display = "none"
            }
//Function para ocultar el buscador

function ocultar_buscador(){

    bars_search.style.top="-80px";
        cover_ctn_search.style.top="-100%";
    inputSearch.value="";
    box_search.style.display="none";

}

//Ejecucion de codigo al presionar una tecla 

function presionar_tecla(){
    
    tecla_esc = event.keyCode;
    
    if (tecla_esc == 27) {
        
        return ocultar_buscador();
        
    }
    
    
    tecla_enter = event.keyCode;
    
    if (tecla_enter == 13){
        
        return mostrar_buscador()
        
    }
    
}


window.onkeydown = presionar_tecla;




//creando filtrado de busqueda
document.getElementById("inputSearch").addEventListener("keyup", buscador_interno);


function buscador_interno(){



    
    filter = inputSearch.value.toUpperCase();
    li = box_search.getElementsByTagName("li");
  

    //recorriendo elementos a flitrar mediante los elementos "li"

    for (i = 0; i< li.length; i++){
    
    a = li[i].getElementsByTagName("a")[0];
    
        textValue = a.textContent || a.innerText;
        
        
        if(textValue.toUpperCase().indexOf(filter) > -1){
                
                li[i].style.display = "";
            box_search.style.display = "block"
            
            if (inputSearch.value === ""){
            box_search.style.display = "none"
            }
            
        }else{
        
            li[i].style.display = "none";
            
        
        }
        
    }
}



        //Ocultar popup

//Ejecutando Funciones
document.getElementById("modal2").addEventListener("click", ocultar_popup1);
document.getElementById("button1").addEventListener("click", mostrar_popup1);
document.getElementById("modal1").addEventListener("click", ocultar_popup2);
document.getElementById("button2").addEventListener("click", mostrar_popup2);
document.getElementById("modal3").addEventListener("click", ocultar_popup3);
document.getElementById("button3").addEventListener("click", mostrar_popup3);
document.getElementById("modal4").addEventListener("click", ocultar_popup4);
document.getElementById("button4").addEventListener("click", mostrar_popup4);
document.getElementById("modal5").addEventListener("click", ocultar_popup5);
document.getElementById("button5").addEventListener("click", mostrar_popup5);
document.getElementById("modal6").addEventListener("click", ocultar_popup6);
document.getElementById("button6").addEventListener("click", mostrar_popup6);
//Declarando variables
modal2 =       document.getElementById("modal2");

button1 =       document.getElementById("button1");

button2 =  document.getElementById("button2");
modal1 =       document.getElementById("modal1");

button3 = document.getElementById("button3");

modal3 =       document.getElementById("modal3");

button4 = document.getElementById("button4");

modal4 = document.getElementById("modal4");

button5 = document.getElementById("button5");

modal5 = document.getElementById("modal5");

button5 = document.getElementById("button6");

modal5 = document.getElementById("modal6");

//Function para ocultar el popup

function ocultar_popup1(){
    modal2.style.visibility="hidden";
}
function ocultar_popup2(){
    modal1.style.visibility="hidden";
}
function ocultar_popup3(){
    modal3.style.visibility="hidden";
}
function ocultar_popup4(){
    modal4.style.visibility="hidden";
}
function ocultar_popup5(){
    modal5.style.visibility="hidden";
}

function ocultar_popup6() {
    modal6.style.visibility = "hidden";
}
    //funcion mostrar popup
    function mostrar_popup1(){
    modal2.style.visibility="visible";
}    function mostrar_popup2(){
    modal1.style.visibility="visible";
}    function mostrar_popup3(){
    modal3.style.visibility="visible";
}    function mostrar_popup4(){
    modal4.style.visibility="visible";
}    function mostrar_popup5(){
    modal5.style.visibility="visible";
}
function mostrar_popup5() {
    modal6.style.visibility = "visible";
}

