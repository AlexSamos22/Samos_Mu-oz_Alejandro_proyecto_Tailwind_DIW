let imagenes = document.querySelectorAll('.imagenes');
let img_actual = 0;
let f_derecha = document.getElementById("derecha");
let f_izquierda = document.getElementById("izquierda");

f_derecha.addEventListener("click", siguiente);
f_izquierda.addEventListener("click", anterior);



function siguiente() {
    if (img_actual === imagenes.length - 1) {
        img_actual = 0;
        imagenes[img_actual].classList.toggle('hidden');
        imagenes[imagenes.length -1].classList.toggle('hidden');
    } else {
        img_actual++;
        imagenes[img_actual].classList.toggle('hidden');
        imagenes[img_actual-1].classList.toggle('hidden');
    }
}

function anterior() {
    if (img_actual === 0){
        imagenes[img_actual].classList.toggle('hidden');
        img_actual = imagenes.length - 1;
        imagenes[img_actual].classList.toggle('hidden');
    }else{
        img_actual--;
        imagenes[img_actual].classList.toggle('hidden');
        imagenes[img_actual+1].classList.toggle('hidden');
    }
    
}