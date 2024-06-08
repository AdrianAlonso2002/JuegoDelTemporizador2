// Variables globales
var dialPosition = 0;
var vidas = 3;
var timerId = null;
var targetDate = null;
let clickCount = 0;
// Cargar el guardado al cargar la página
window.onload = cargarGuardado;

function iniciarTemporizador(duracion) {
    targetDate = new Date().getTime() + duracion * 60 * 60 * 1000;
    localStorage.setItem('targetDate', targetDate);
    updateTimer();
    if (timerId) {
        clearInterval(timerId);
    }
    timerId = setInterval(updateTimer, 1000);
}

// Función para calcular el tiempo restante y actualizar el temporizador
function updateTimer() {

    var now = new Date();

    var difference = targetDate - now;

    if (difference <= 0 || vidas == 0) {
        if (vidas > 0 && localStorage.getItem(`password1`) != 'desbloqueada') {
            return;
        } else
            if (vidas > 0 && localStorage.getItem(`password1`) === 'desbloqueada' && localStorage.getItem(`pista12`) != 'desbloqueada') {
                perderVida();
                return;
            } else if (localStorage.getItem(`pista12`) === 'desbloqueada'){
                console.log("No se pierde el juego si se ha ganado");
            } else {
                document.body.classList.add('blackout');
                document.getElementById('gameOverMessage').style.display = 'flex';
                return;
            }
    }

    var hours = Math.floor(difference / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

    //Mostrar imagen o pista al cabo del tiempo
    //Password1 Pista-Imagen
    if (hours < 24 && localStorage.getItem(`password1`) === 'desbloqueada' && localStorage.getItem(`password2`) !== 'desbloqueada') {
        document.querySelectorAll('#images img')[0].src = 'img/foto1.png';

    } else if (localStorage.getItem(`password1`) === 'desbloqueada' && localStorage.getItem(`password2`) === 'desbloqueada') {
        document.querySelectorAll('#images img')[0].src = 'img/foto1.png';
    }
    //Password2 Imagen-Pista
    if (hours < 24 && localStorage.getItem(`password2`) === 'desbloqueada' && localStorage.getItem(`password3`) !== 'desbloqueada') {
        document.querySelectorAll('#images p')[1].innerText = 'CUVWTKCU';
        document.querySelectorAll('#images button')[1].removeAttribute('hidden');
    } else if (localStorage.getItem(`password2`) === 'desbloqueada' && localStorage.getItem(`password3`) === 'desbloqueada') {
        document.querySelectorAll('#images p')[1].innerText = 'CUVWTKCU';
        document.querySelectorAll('#images button')[1].removeAttribute('hidden');
    }
    //Password3 Pista+Imagen
    //Password4 Imagen-Pista
    if (hours < 24 && localStorage.getItem(`password4`) === 'desbloqueada' && localStorage.getItem(`password5`) !== 'desbloqueada') {
        document.querySelectorAll('#images p')[3].innerText = 'Mes';
        document.querySelectorAll('#images button')[3].removeAttribute('hidden');
    } else if (localStorage.getItem(`password4`) === 'desbloqueada' && localStorage.getItem(`password5`) === 'desbloqueada') {
        document.querySelectorAll('#images p')[3].innerText = 'Mes';
        document.querySelectorAll('#images button')[3].removeAttribute('hidden');
    }
    //Password5 Imagen-Pista
    if (hours < 24 && localStorage.getItem(`password5`) === 'desbloqueada' && localStorage.getItem(`password6`) !== 'desbloqueada') {
        document.querySelectorAll('#images p')[4].innerText = '¿Qué sucede en una sola palabra en la foto entre los protagonistas?';
        document.querySelectorAll('#images button')[4].removeAttribute('hidden');
    } else if (localStorage.getItem(`password5`) === 'desbloqueada' && localStorage.getItem(`password6`) === 'desbloqueada') {
        document.querySelectorAll('#images p')[4].innerText = '¿Qué sucede en una sola palabra en la foto entre los protagonistas?';
        document.querySelectorAll('#images button')[4].removeAttribute('hidden');
    }
    //Password6 Pista-Imagen
    if (hours < 24 && localStorage.getItem(`password6`) === 'desbloqueada' && localStorage.getItem(`password7`) !== 'desbloqueada') {
        document.querySelectorAll('#images img')[5].src = 'img/foto6.png';

    } else if (localStorage.getItem(`password6`) === 'desbloqueada' && localStorage.getItem(`password7`) === 'desbloqueada') {
        document.querySelectorAll('#images img')[5].src = 'img/foto6.png';
    }
    //Password7 Pista-Imagen
    if (hours < 24 && localStorage.getItem(`password7`) === 'desbloqueada' && localStorage.getItem(`password8`) !== 'desbloqueada') {
        document.querySelectorAll('#images img')[6].src = 'img/foto7.png';
    } else if (localStorage.getItem(`password7`) === 'desbloqueada' && localStorage.getItem(`password8`) === 'desbloqueada') {
        document.querySelectorAll('#images img')[6].src = 'img/foto7.png';
    }
    //Password8 Imagen-Pista
    if (hours < 24 && localStorage.getItem(`password8`) === 'desbloqueada' && localStorage.getItem(`password9`) !== 'desbloqueada') {
        document.querySelectorAll('#images p')[7].innerText = 'Escucha al demonio';
        document.querySelectorAll('#images button')[7].removeAttribute('hidden');
    } else if (localStorage.getItem(`password8`) === 'desbloqueada' && localStorage.getItem(`password9`) === 'desbloqueada') {
        document.querySelectorAll('#images p')[7].innerText = 'Escucha al demonio';
        document.querySelectorAll('#images button')[7].removeAttribute('hidden');
    }
    //Password9 Pista-Imagen
    if (hours < 24 && localStorage.getItem(`password9`) === 'desbloqueada' && localStorage.getItem(`password10`) !== 'desbloqueada') {
        document.querySelectorAll('#images img')[8].src = 'img/foto9.png';
    } else if (localStorage.getItem(`password9`) === 'desbloqueada' && localStorage.getItem(`password10`) === 'desbloqueada') {
        document.querySelectorAll('#images img')[8].src = 'img/foto9.png';
    }
    //Password10 Pista-Imagen
    //Password11 Pista-Imagen
    //Password12 Pista+Imagen

    // Verificar si la bandera está en localStorage
    if (localStorage.getItem('perderVida') === 'true') {
        localStorage.removeItem('perderVida');
        perderVida();
    }

    if (localStorage.getItem(`pista12`) === 'desbloqueada') {
        document.getElementById('timer').innerText = "Enhorabuena!";
    }else{
        document.getElementById('timer').innerText = formatTime(hours) + "h:" + formatTime(minutes) + "m:" + formatTime(seconds) + "s";
    }
}

// Función para formatear el tiempo
function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

function perderVida() {
    vidas--;
    localStorage.setItem('vidas', vidas);
    actualizarVidas();
    if (vidas == 0) {
        document.body.classList.add('blackout');
        document.getElementById('gameOverMessage').style.display = 'flex';
        Swal.fire({
            icon: 'info',
            title: 'Has Perdido todas las vidas',
            text: 'Se acabó el juego.',
            confirmButtonText: 'NOO',
            customClass: {
                popup: 'my-popup-class',
            }
        });
        return;
    } else if (vidas > 0) {
        // Lista de pistas para cada contraseña
        const pistas = [
            'Pista para password1',
            'Crea una palabra con las letras de la pista',
            'Cada letra está desplazada a dos números a la derecha del alfabeto',
            'Es un muñeco',
            'Es un mes del año literalmente',
            'Tocar labio con labio',
            'Ejericio del gimnasio',
            'Una letra se desplaza a la izquierda y otra a la derecha del alfabeto',
            'Corre solo cuando el demonio no se escuche cerca',
            'Es ruso, ordena y traduce cada letra',
            'Coge 2 números y luego otros dos, luego al hacer el calculo da un número de 6 cifras',
            'Para vencerle debes aumentar tu ataque al máximo y después atacar'
        ];
        // Verificar las primeras 4 contraseñas y luego la caja1
        for (let i = 1; i <= 4; i++) {
            if (localStorage.getItem(`password${i}`) !== 'desbloqueada') {
                Swal.fire({
                    icon: 'success',
                    title: 'Pista Final Contraseña ' + i,
                    text: pistas[i - 1],
                    confirmButtonText: 'Vale',
                    customClass: {
                        popup: 'my-popup-class',
                    }
                });
                iniciarTemporizador(24);
                return;  // Salir de la función si una contraseña no está desbloqueada
            }
        }

        if (localStorage.getItem('caja1') !== 'desbloqueada') {
            Swal.fire({
                icon: 'success',
                title: 'Pista Final Caja 1',
                text: 'Intenta sacar una frase de la pista',
                confirmButtonText: 'Vale',
                customClass: {
                    popup: 'my-popup-class',
                }
            });
            iniciarTemporizador(24);
            return;  // Salir de la función si la caja1 no está desbloqueada
        }

        // Verificar las siguientes 4 contraseñas y luego la caja2
        for (let i = 5; i <= 8; i++) {
            if (localStorage.getItem(`password${i}`) !== 'desbloqueada') {
                Swal.fire({
                    icon: 'success',
                    title: 'Pista Final ' + i,
                    text: pistas[i - 1],
                    confirmButtonText: 'Vale',
                    customClass: {
                        popup: 'my-popup-class',
                    }
                });
                iniciarTemporizador(24);
                return;  // Salir de la función si una contraseña no está desbloqueada
            }
        }

        if (localStorage.getItem('caja2') !== 'desbloqueada') {
            Swal.fire({
                icon: 'success',
                title: 'Pista Final Caja 2',
                text: 'sota?',
                confirmButtonText: 'Vale',
                customClass: {
                    popup: 'my-popup-class',
                }
            });
            iniciarTemporizador(24);
            return;  // Salir de la función si la caja2 no está desbloqueada
        }

        // Verificar las últimas 4 contraseñas y luego la caja3
        for (let i = 9; i <= 12; i++) {
            if (localStorage.getItem(`password${i}`) !== 'desbloqueada') {
                Swal.fire({
                    icon: 'success',
                    title: 'Pista Final ' + i,
                    text: pistas[i - 1],
                    confirmButtonText: 'Vale',
                    customClass: {
                        popup: 'my-popup-class',
                    }
                });
                iniciarTemporizador(24);
                return;  // Salir de la función si una contraseña no está desbloqueada
            }
        }

        if (localStorage.getItem('caja3') !== 'desbloqueada') {
            Swal.fire({
                icon: 'success',
                title: 'Pista Final Caja 2',
                text: 'Suma alfabeticamente los 4 pares y luego los dos impares restantes',
                confirmButtonText: 'Vale',
                customClass: {
                    popup: 'my-popup-class',
                }
            });
            iniciarTemporizador(24);
            return;  // Salir de la función si la caja3 no está desbloqueada
        }
    }
}

function actualizarVidas() {
    const vidasElements = document.querySelectorAll('#vidas .vida');
    vidasElements.forEach((vida, index) => {
        if (index < vidas) {
            vida.style.display = 'inline';
        } else {
            vida.style.display = 'none';
        }
    });
}

//Comprobar enter contraseña1
document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password1");
    function handleEnterKey(event) {
        if (event.key === "Enter" || event.keyCode === 13) {
            event.preventDefault(); 
            checkPassword1();
        }
    }
    passwordInput.addEventListener("keydown", handleEnterKey);
});
//Comprobar enter contraseña2
document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password2");
    passwordInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            checkPassword2();
        }
    });
});
//Comprobar enter contraseña3
document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password3");
    passwordInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            checkPassword3();
        }
    });
});
//Comprobar enter contraseña4
document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password4");
    passwordInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            checkPassword4();
        }
    });
});
//Comprobar enter contraseña5
document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password5");
    passwordInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            checkPassword5();
        }
    });
});
//Comprobar enter contraseña6
document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password6");
    passwordInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            checkPassword6();
        }
    });
});
//Comprobar enter contraseña7
document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password7");
    passwordInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            checkPassword7();
        }
    });
});
//Comprobar enter contraseña8
document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password8");
    passwordInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            checkPassword8();
        }
    });
});
//Comprobar enter contraseña9
document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password9");
    passwordInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            checkPassword9();
        }
    });
});
//Comprobar enter contraseña10
document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password10");
    passwordInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            checkPassword10();
        }
    });
});
//Comprobar enter contraseña11
document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password11");
    passwordInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            checkPassword11();
        }
    });
});
//Comprobar enter contraseña12
document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password12");
    passwordInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            checkPassword12();
        }
    });
});
//Comprobar enter caja2
document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("passwordcaja2");
    passwordInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            abrirCaja2();
        }
    });
});

// Función para verificar la contraseña1 (Hoja -> Desbloquea Pista-Imagen)
function checkPassword1() {
    var password1 = document.getElementById('password1').value.toLowerCase();

    // Verifica si las contraseña es correcta
    if (password1 === 'suerte') {
        Swal.fire({
            icon: 'success',
            title: 'Enhorabuena has acertado la primera contraseña',
            text: 'Se ha desbloqueado una pista, cuando le queden 24 horas al temporizador, se desbloqueara una imagen de la misma, tienes 48 horas para resolver el acertijo o perderás una vida!',
            confirmButtonText: 'Vale',
            customClass: {
                popup: 'my-popup-class',
            }
        });
        //Guardado contraseña
        password1.disabled = true;
        const input = document.getElementById(`password1`);
        const img = document.querySelector(`#pass1 img`);
        input.value = "";
        input.placeholder = "Desbloqueada";
        input.disabled = true;
        img.src = "img/candadoA.png";
        localStorage.setItem(`password1`, 'desbloqueada');

        //Nueva Pista
        document.querySelectorAll('#images p')[0].innerText = 'aebtib';
        document.querySelectorAll('#images button')[0].removeAttribute('hidden');
        localStorage.setItem(`pista1`, 'desbloqueada');

        // Iniciar nuevo temporizador de 48 horas
        iniciarTemporizador(48);

    } else if (localStorage.getItem(`pista1`) === 'desbloqueada') {
        Swal.fire({
            icon: 'success',
            title: 'Primera contraseña desbloqueada',
            text: 'Se desbloqueó una pista, cuando le queden 24 horas al temporizador, se desbloquea una imagen de la misma, tienes 48 horas para resolver el acertijo o perderás una vida!',
            confirmButtonText: 'Vale',
            customClass: {
                popup: 'my-popup-class',
            }
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Contraseña Incorrecta',
            text: 'Lee bien la pista',
            confirmButtonText: 'Jo',
            customClass: {
                popup: 'my-popup-class',
            }
        });
    }
}
// Función para verificar la contraseña2 (Anagrama1 -> Desbloquea Imagen-Pista)
function checkPassword2() {
    var password2 = document.getElementById('password2').value.toLowerCase();

    // Verifica si las contraseñas son correctas
    if (password2 === 'bebita') {
        Swal.fire({
            icon: 'success',
            title: 'Enhorabuena has acertado la segunda contraseña',
            text: 'Se ha desbloqueado una imagen, en 24 horas se desbloqueara una pista, tienes de nuevo 48 horas!',
            confirmButtonText: 'Vale',
            customClass: {
                popup: 'my-popup-class',
            }
        });
        //Guardado contraseña
        password2.disabled = true;
        const input = document.getElementById(`password2`);
        const img = document.querySelector(`#pass2 img`);

        input.value = "";
        input.placeholder = "Desbloqueada";
        input.disabled = true;
        img.src = "img/candadoA.png";
        localStorage.setItem(`password2`, 'desbloqueada');

        //Nueva Imagen
        document.querySelectorAll('#images img')[1].src = 'img/foto2.png';
        localStorage.setItem(`pista2`, 'desbloqueada');

        // Iniciar nuevo temporizador de 48 horas
        iniciarTemporizador(48)

    } else if (localStorage.getItem(`pista2`) === 'desbloqueada') {
        Swal.fire({
            icon: 'success',
            title: 'Segunda contraseña desbloqueada',
            text: 'Se desbloqueó una imagen, en 24 horas se desbloqueara una pista, tienes de nuevo 48 horas!',
            confirmButtonText: 'Vale',
            customClass: {
                popup: 'my-popup-class',
            }
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Contraseña Incorrecta',
            text: 'Revisa la pista bien',
            confirmButtonText: 'Jo',
            customClass: {
                popup: 'my-popup-class',
            }
        });
    }
}
// Función para verificar la contraseña3 (Codificado1 -> Desbloquea Pista+Imagen)
function checkPassword3() {
    var password3 = document.getElementById('password3').value.toLowerCase();

    // Verifica si las contraseñas son correctas
    if (password3 === 'asturias') {
        Swal.fire({
            icon: 'success',
            title: 'Enhorabuena, has acertado la tercera contraseña!',
            text: 'Se ha desbloqueado una imagen y una pista',
            confirmButtonText: 'Vale',
            customClass: {
                popup: 'my-popup-class',
            }
        });
        //Guardado contraseña
        password3.disabled = true;
        const input = document.getElementById(`password3`);
        const img = document.querySelector(`#pass3 img`);

        input.value = "";
        input.placeholder = "Desbloqueada";
        input.disabled = true;
        img.src = "img/candadoA.png";
        localStorage.setItem(`password3`, 'desbloqueada');

        //Nueva Pista e Imagen
        document.querySelectorAll('#images p')[2].innerText = 'En dos cuartos me hallo, sin moverme de lugar, un puente entre dos mundos, en uno soy magia, en otro soy deseos. ¿Qué soy? Piénsalo con empeño, este acertijo es un reto.';
        document.querySelectorAll('#images button')[2].removeAttribute('hidden');
        localStorage.setItem(`pista3`, 'desbloqueada');
        document.querySelectorAll('#images img')[2].src = 'img/foto3.png';

        // Iniciar nuevo temporizador de 48 horas
        iniciarTemporizador(48);

    } else if (localStorage.getItem(`pista3`) === 'desbloqueada') {
        Swal.fire({
            icon: 'success',
            title: 'Tercera contraseña desbloqueada!',
            text: 'Se desbloqueó una imagen y una pista',
            confirmButtonText: 'Vale',
            customClass: {
                popup: 'my-popup-class',
            }
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Contraseña Incorrecta',
            text: 'Fíjate bien',
            confirmButtonText: 'Jo',
            customClass: {
                popup: 'my-popup-class',
            }
        });
    }
}
// Función para verificar la contraseña4 (Adivinanza -> Desbloquea Pista de Caja1(Imagen-Pista))
function checkPassword4() {
    var password4 = document.getElementById('password4').value.toLowerCase();

    // Verifica si las contraseña es correcta
    if (password4 === 'funko') {
        Swal.fire({
            icon: 'success',
            title: 'Enhorabuena has acertado la cuarta contraseña, es el turno de abrir la caja de bronce:',
            text: 'salup zadoriropmet choum odaros le',
            confirmButtonText: 'Vale',
            customClass: {
                popup: 'my-popup-class',
            }
        });
        //Guardado contraseña
        password4.disabled = true;
        const input = document.getElementById(`password4`);
        const img = document.querySelector(`#pass4 img`);

        input.value = "";
        input.placeholder = "Desbloqueada";
        input.disabled = true;
        img.src = "img/candadoA.png";
        localStorage.setItem(`password4`, 'desbloqueada');
        document.querySelector('header').style.backgroundColor = '#865a0842';
        document.getElementById('cajas').style.backgroundColor = '#865a0842';
        document.querySelector('main').style.backgroundColor = '#865a0842';

        // Iniciar nuevo temporizador de 120 horas
        iniciarTemporizador(120);

    } else if (localStorage.getItem(`password4`) === 'desbloqueada' && localStorage.getItem(`caja1`) != 'desbloqueada') {
        Swal.fire({
            icon: 'success',
            title: 'Es el turno de abrir la caja de bronce:',
            text: 'salup zadoriropmet choum odaros le',
            confirmButtonText: 'Vale',
            customClass: {
                popup: 'my-popup-class',
            }
        });
    } else if (localStorage.getItem(`pista4`) === 'desbloqueada' && localStorage.getItem(`caja1`) === 'desbloqueada') {
        Swal.fire({
            icon: 'success',
            title: 'Enhorabuena has desbloqueado la cuarta contraseña y abierto la caja de bronce!',
            text: 'Se ha desbloqueado una nueva imagen y más tarde una pista, suerte!',
            confirmButtonText: 'Vale',
            customClass: {
                popup: 'my-popup-class',
            }
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Contraseña Incorrecta',
            text: 'Piensalo bien',
            confirmButtonText: 'Jo',
            customClass: {
                popup: 'my-popup-class',
            }
        });
    }
}
// Función para verificar la contraseña5 (Imagenes -> Desbloquea Imagen-Pista)
function checkPassword5() {
    var password5 = document.getElementById('password5').value.toLowerCase();

    // Verifica si las contraseña es correcta
    if (password5 === 'junio') {
        Swal.fire({
            icon: 'success',
            title: 'Quinta contraseña correcta!',
            text: 'Se ha desbloqueado una imagen y una pista más tarde!',
            confirmButtonText: 'Vale',
            customClass: {
                popup: 'my-popup-class',
            }
        });
        //Guardado contraseña
        password5.disabled = true;
        const input = document.getElementById(`password5`);
        const img = document.querySelector(`#pass5 img`);

        input.value = "";
        input.placeholder = "Desbloqueada";
        input.disabled = true;
        img.src = "img/candadoA.png";
        localStorage.setItem(`password5`, 'desbloqueada');

        //Nueva Imagen+Pista;
        const image = document.querySelectorAll('#images img')[4];
        // Crea un nuevo enlace
        const link = document.createElement('a');
        link.href = 'Rompecabezas/rompecabezas.html';
        // Clona la imagen y añade el nuevo src
        const clonedImage = image.cloneNode(true);
        clonedImage.src = 'img/foto5.png';
        link.appendChild(clonedImage);
        image.parentNode.replaceChild(link, image);
        localStorage.setItem(`pista5`, 'desbloqueada');

        // Iniciar nuevo temporizador de 48 horas
        iniciarTemporizador(48);

    } else if (localStorage.getItem(`pista5`) === 'desbloqueada') {
        Swal.fire({
            icon: 'success',
            title: 'Quinta contraseña correcta!',
            text: 'Se ha desbloqueado una imagen y una pista más tarde!',
            confirmButtonText: 'Vale',
            customClass: {
                popup: 'my-popup-class',
            }
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Contraseña Incorrecta',
            text: 'Revisa las imagenes, es fácil',
            confirmButtonText: 'Jo',
            customClass: {
                popup: 'my-popup-class',
            }
        });
    }
}
// Función para verificar la contraseña6 (Rompecabezas -> Desbloquea Pista-Imagen)
function checkPassword6() {
    var password6 = document.getElementById('password6').value.toLowerCase();

    // Verifica si las contraseña es correcta
    if (password6 === 'beso') {
        Swal.fire({
            icon: 'success',
            title: 'Sexta contraseña correcta!',
            text: 'Se ha desbloqueado una pista y una imagen más tarde!',
            confirmButtonText: 'Vale',
            customClass: {
                popup: 'my-popup-class',
            }
        });
        //Guardado contraseña
        password6.disabled = true;
        const input = document.getElementById(`password6`);
        const img = document.querySelector(`#pass6 img`);

        input.value = "";
        input.placeholder = "Desbloqueada";
        input.disabled = true;
        img.src = "img/candadoA.png";
        localStorage.setItem(`password6`, 'desbloqueada');

        //Nueva Pista e Imagen
        document.querySelectorAll('#images p')[5].innerText = 'Me sostengo con firmeza...Desafía la gravedad...Me elevo como en el aire...El tiempo dará frutos...';
        document.querySelectorAll('#images button')[5].removeAttribute('hidden');
        localStorage.setItem(`pista6`, 'desbloqueada');

        // Iniciar nuevo temporizador de 48 horas
        iniciarTemporizador(48);

    } else if (localStorage.getItem(`pista6`) === 'desbloqueada') {
        Swal.fire({
            icon: 'success',
            title: 'Sexta contraseña correcta!',
            text: 'Se desbloqueó una pista y una imagen más tarde!',
            confirmButtonText: 'Vale',
            customClass: {
                popup: 'my-popup-class',
            }
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Contraseña Incorrecta',
            text: 'Ten paciencia',
            confirmButtonText: 'Jo',
            customClass: {
                popup: 'my-popup-class',
            }
        });
    }
}
// Función para verificar la contraseña7 (Adivinanza -> Desbloquea Pista-Imagen)
function checkPassword7() {
    var password7 = document.getElementById('password7').value.toLowerCase();

    // Verifica si las contraseña es correcta
    if (password7 === 'dominada') {
        Swal.fire({
            icon: 'success',
            title: 'Septima contraseña correcta muy bien',
            text: 'Se ha desbloqueado una pista y una imagen después!',
            confirmButtonText: 'Vale',
            customClass: {
                popup: 'my-popup-class',
            }
        });
        //Guardado contraseña;
        password7.disabled = true;
        const input = document.getElementById(`password7`);
        const img = document.querySelector(`#pass7 img`);

        input.value = "";
        input.placeholder = "Desbloqueada";
        input.disabled = true;
        img.src = "img/candadoA.png";
        localStorage.setItem(`password7`, 'desbloqueada');

        //Nueva Pista e Imagen
        document.querySelectorAll('#images p')[6].innerText = 'YRIÑLZDFWM';
        document.querySelectorAll('#images button')[6].removeAttribute('hidden');
        localStorage.setItem(`pista7`, 'desbloqueada');

        // Iniciar nuevo temporizador de 48 horas
        iniciarTemporizador(48);

    } else if (localStorage.getItem(`pista7`) === 'desbloqueada') {
        Swal.fire({
            icon: 'success',
            title: 'Septima contraseña correcta muy bien',
            text: 'Se ha desbloqueado una pista y una imagen después!',
            confirmButtonText: 'Vale',
            customClass: {
                popup: 'my-popup-class',
            }
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Contraseña Incorrecta',
            text: 'Es más dificil eh',
            confirmButtonText: 'Jo',
            customClass: {
                popup: 'my-popup-class',
            }
        });
    }
}
// Función para verificar la contraseña8 (Codificado2 -> Desbloquea Pista de Caja2(Imagen-Pista))
function checkPassword8() {
    var password8 = document.getElementById('password8').value.toLowerCase();

    // Verifica si las contraseña es correcta
    if (password8 === 'bollicaito') {
        Swal.fire({
            icon: 'success',
            title: 'Octava contraseña correcta, es el turno de abrir la caja de plata:',
            text: 'atos',
            confirmButtonText: 'Vale',
            customClass: {
                popup: 'my-popup-class',
            }
        });
        //Guardado contraseña
        password8.disabled = true;
        const input = document.getElementById(`password8`);
        const img = document.querySelector(`#pass8 img`);

        input.value = "";
        input.placeholder = "Desbloqueada";
        input.disabled = true;
        img.src = "img/candadoA.png";
        localStorage.setItem(`password8`, 'desbloqueada');
        document.querySelector('header').style.backgroundColor = '#8181813d';
        document.getElementById('cajas').style.backgroundColor = '#8181813d';
        document.querySelector('main').style.backgroundColor = '#8181813d';

        // Iniciar nuevo temporizador de 120 horas
        iniciarTemporizador(120);

    } else if (localStorage.getItem(`password8`) === 'desbloqueada' && localStorage.getItem(`caja2`) != 'desbloqueada') {
        Swal.fire({
            icon: 'success',
            title: 'Es el turno de abrir la caja de plata:',
            text: 'atos',
            confirmButtonText: 'Vale',
            customClass: {
                popup: 'my-popup-class',
            }
        });
    } else if (localStorage.getItem(`pista8`) === 'desbloqueada' && localStorage.getItem(`caja2`) === 'desbloqueada') {
        Swal.fire({
            icon: 'success',
            title: 'Enhorabuena has desbloqueado la octava contraseña y abierto la caja de plata!',
            text: 'Se desbloqueó una nueva imagen y más tarde una pista, suerte!',
            confirmButtonText: 'Vale',
            customClass: {
                popup: 'my-popup-class',
            }
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Contraseña Incorrecta',
            text: 'JiJiJi',
            confirmButtonText: 'Jo',
            customClass: {
                popup: 'my-popup-class',
            }
        });
    }
}
// Función para verificar la contraseña9 (Demonio -> Desbloquea Pista-Imagen)
function checkPassword9() {
    var password9 = document.getElementById('password9').value.toLowerCase();

    // Verifica si las contraseña es correcta
    if (password9 === 'correr') {
        Swal.fire({
            icon: 'success',
            title: 'Novena contraseña correcta!',
            text: 'Se ha desbloqueado una pista y una imagen más tarde!',
            confirmButtonText: 'Vale',
            customClass: {
                popup: 'my-popup-class',
            }
        });
        //Guardado contraseña
        password9.disabled = true;
        const input = document.getElementById(`password9`);
        const img = document.querySelector(`#pass9 img`);

        input.value = "";
        input.placeholder = "Desbloqueada";
        input.disabled = true;
        img.src = "img/candadoA.png";
        localStorage.setItem(`password9`, 'desbloqueada');

        //Nueva Pista e Imagen
        document.querySelectorAll('#images p')[8].innerText = 'РИНAMИСOНЮ';
        document.querySelectorAll('#images button')[8].removeAttribute('hidden');
        localStorage.setItem(`pista9`, 'desbloqueada');

        // Iniciar nuevo temporizador de 48 horas
        iniciarTemporizador(48);

    } else if (localStorage.getItem(`pista9`) === 'desbloqueada') {
        Swal.fire({
            icon: 'success',
            title: 'Novena contraseña correcta!',
            text: 'Se desbloqueó una pista y una imagen se desbloqueará más tarde!',
            confirmButtonText: 'Vale',
            customClass: {
                popup: 'my-popup-class',
            }
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Contraseña Incorrecta',
            text: 'Suerte huyendo del demonio',
            confirmButtonText: 'Jo',
            customClass: {
                popup: 'my-popup-class',
            }
        });
    }
}
// Función para verificar la contraseña10 (Codificado3 -> Desbloquea Pista+Imagen)
function checkPassword10() {
    var password10 = document.getElementById('password10').value.toLowerCase();

    // Verifica si las contraseña es correcta
    if (password10 === 'ronymisina') {
        Swal.fire({
            icon: 'success',
            title: 'Décima contraseña correcta!',
            text: 'Se ha desbloqueado una pista y una imagen!',
            confirmButtonText: 'Vale',
            customClass: {
                popup: 'my-popup-class',
            }
        });
        //Guardado contraseña
        password10.disabled = true;
        const input = document.getElementById(`password10`);
        const img = document.querySelector(`#pass10 img`);

        input.value = "";
        input.placeholder = "Desbloqueada";
        input.disabled = true;
        img.src = "img/candadoA.png";
        localStorage.setItem(`password10`, 'desbloqueada');

        //Nueva Pista
        document.querySelectorAll('#images p')[9].innerText = '1.Dos números comunes pero en la posición equivocada. 2.Dos números comunes pero en la posición equivocada. 3.El producto de los tres números al cubo.';
        document.querySelectorAll('#images button')[9].removeAttribute('hidden');
        document.querySelectorAll('#images img')[9].src = 'img/foto10.png';
        localStorage.setItem(`pista10`, 'desbloqueada');

        // Iniciar nuevo temporizador de 48 horas
        iniciarTemporizador(48);

    } else if (localStorage.getItem(`pista10`) === 'desbloqueada') {
        Swal.fire({
            icon: 'success',
            title: 'Décima contraseña correcta!',
            text: 'Se desbloqueó una pista y una imagen!',
            confirmButtonText: 'Vale',
            customClass: {
                popup: 'my-popup-class',
            }
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Contraseña Incorrecta',
            text: 'Es raro, ¿verdad?',
            confirmButtonText: 'Jo',
            customClass: {
                popup: 'my-popup-class',
            }
        });
    }
}
// Función para verificar la contraseña11 (ClaveSecreta -> Desbloquea Pista+Imagen)
function checkPassword11() {
    var password11 = document.getElementById('password11').value.toLowerCase();

    // Verifica si las contraseña es correcta
    if (password11 === '110592') {
        Swal.fire({
            icon: 'success',
            title: 'Undécima contraseña correcta!',
            text: 'Se ha desbloqueado una pista y una imagen!',
            confirmButtonText: 'Vale',
            customClass: {
                popup: 'my-popup-class',
            }
        });
        //Guardado contraseña
        password11.disabled = true;
        const input = document.getElementById(`password11`);
        const img = document.querySelector(`#pass11 img`);

        input.value = "";
        input.placeholder = "Desbloqueada";
        input.disabled = true;
        img.src = "img/candadoA.png";
        localStorage.setItem(`password11`, 'desbloqueada');

        //Nueva Imagen
        document.querySelectorAll('#images p')[10].innerText = 'Te vas a enfrentar a una batalla pokémon contra Adri, solo con un único pokemon, si le ganas te dirá la siguiente contraseña, pero si pierdes, perderás una vida, estudiatelo, solo necesitas un solo ataque para ganar.';
        document.querySelectorAll('#images button')[10].removeAttribute('hidden');
        const image = document.querySelectorAll('#images img')[10];
        // Crea un nuevo enlace
        const link = document.createElement('a');
        link.href = 'Pokemon/pokemon.html';
        // Clona la imagen y añade el nuevo src
        const clonedImage = image.cloneNode(true);
        clonedImage.src = 'img/foto11.png';
        link.appendChild(clonedImage);
        image.parentNode.replaceChild(link, image);
        localStorage.setItem(`pista11`, 'desbloqueada');

        // Iniciar nuevo temporizador de 48 horas
        iniciarTemporizador(48);

    } else if (localStorage.getItem(`pista11`) === 'desbloqueada') {
        Swal.fire({
            icon: 'success',
            title: 'Undécima contraseña correcta!',
            text: 'Se ha desbloqueado una pista y una imagen!',
            confirmButtonText: 'Vale',
            customClass: {
                popup: 'my-popup-class',
            }
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Contraseña Incorrecta',
            text: 'Tendrás que volver a intentarlo',
            confirmButtonText: 'Jo',
            customClass: {
                popup: 'my-popup-class',
            }
        });
    }
}
// Función para verificar la contraseña12 (Pokemon -> Desbloquea Pista de Caja3(Pista+Imagen))
function checkPassword12() {
    var password12 = document.getElementById('password12').value.toLowerCase();

    // Verifica si las contraseña es correcta
    if (password12 === 'recuerdos') {
        Swal.fire({
            icon: 'success',
            title: 'Duodécima contraseña correcta! La caja de oro te espera:',
            text: 'Recoge todas las contraseñas sin contar las cajas, haz la suma de cada letra alfabeticamente, o no, y sumala para que te de una parte del código, las 4 primeras son contraseñas pares y las dos últimas inpares.',
            confirmButtonText: 'Vale',
            customClass: {
                popup: 'my-popup-class',
            }
        });
        //Guardado contraseña
        password12.disabled = true;
        const input = document.getElementById(`password12`);
        const img = document.querySelector(`#pass12 img`);

        input.value = "";
        input.placeholder = "Desbloqueada";
        input.disabled = true;
        img.src = "img/candadoA.png";
        localStorage.setItem(`password12`, 'desbloqueada');
        document.querySelector('header').style.backgroundColor = '#ebd45349';
        document.getElementById('cajas').style.backgroundColor = '#ebd45349';
        document.querySelector('main').style.backgroundColor = '#ebd45349'

        // Iniciar nuevo temporizador de 120 horas
        iniciarTemporizador(120);

    } else if (localStorage.getItem(`password12`) === 'desbloqueada' && localStorage.getItem(`caja3`) != 'desbloqueada') {
        Swal.fire({
            icon: 'success',
            title: 'Duodécima contraseña correcta! La caja de oro te espera:',
            text: 'Recoge todas las contraseñas sin contar las cajas, haz la suma de cada letra alfabeticamente, o no, y sumala para que te de una parte del código, las 4 primeras son contraseñas pares y las dos últimas inpares.',
            confirmButtonText: 'Vale',
            customClass: {
                popup: 'my-popup-class',
            }
        });
    } else if (localStorage.getItem(`pista12`) === 'desbloqueada' && localStorage.getItem(`caja3`) === 'desbloqueada') {
        Swal.fire({
            icon: 'success',
            title: 'Enhorabuena has desbloqueado todas las contraseñas y las tres cajas!',
            text: 'Se desbloqueó la última pista e imagen.',
            confirmButtonText: 'Vale',
            customClass: {
                popup: 'my-popup-class',
            }
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Contraseña Incorrecta',
            text: '¿Qué pruebas? Tienes que ganar a Adri!',
            confirmButtonText: 'Jo',
            customClass: {
                popup: 'my-popup-class',
            }
        });
    }
}

function incrementarContadorCaja1() {
    clickCount++;
    if (clickCount === 10 && localStorage.getItem(`caja1`) != 'desbloqueada' && localStorage.getItem(`pista3`) === 'desbloqueada') {
        abrirCaja1();
    }
}

function abrirCaja1() {
    document.getElementById('cajaImagen1').src = 'img/Caja1A.png';

    Swal.fire({
        icon: 'success',
        title: 'HAS ABIERTO LA CAJA DE BRONCE',
        text: 'Enhorabuena, se ha desbloqueado una imagen y más tarde una pista!',
        confirmButtonText: 'OLE',
        customClass: {
            popup: 'my-popup-class',
        }
    });
    localStorage.setItem(`caja1`, 'desbloqueada');
    document.querySelector('header').style.backgroundColor = '#f0f0f0';
    document.getElementById('cajas').style.backgroundColor = '#c446ff23';
    document.querySelector('main').style.backgroundColor = 'white';

    //Nueva Imagen para contraseña 5
    localStorage.setItem(`pista4`, 'desbloqueada');
    document.querySelectorAll('#images img')[3].src = 'img/foto4.png';

    // Iniciar nuevo temporizador de 48 horas
    iniciarTemporizador(48);
}

function abrirCaja2() {
    const palabra = document.getElementById("passwordcaja2").value.toLowerCase();
    if (palabra === "experta") {
        const input = document.getElementById(`passwordcaja2`);
        const img = document.querySelector(`#caja2 img`);

        input.disabled = true;
        input.placeholder = "!!!Caja 2 abierta,  ya solo te queda una!!!";
        img.src = "img/Caja2A.png";

        Swal.fire({
            icon: 'success',
            title: 'HAS ABIERTO LA CAJA DE PLATA',
            text: 'Enhorabuena! Se ha desbloqueado una nueva imagen y más tarde una pista!',
            confirmButtonText: 'OLE',
            customClass: {
                popup: 'my-popup-class',
            }
        });
        localStorage.setItem(`caja2`, 'desbloqueada');
        document.querySelector('header').style.backgroundColor = '#f0f0f0';
        document.getElementById('cajas').style.backgroundColor = '#c446ff23';
        document.querySelector('main').style.backgroundColor = 'white';

        //Nueva Imagen para contraseña 9
        localStorage.setItem(`pista8`, 'desbloqueada');

        const image = document.querySelectorAll('#images img')[7];
        // Crea un nuevo enlace
        const link = document.createElement('a');
        link.href = 'Demonio/demonio.html';
        // Clona la imagen y añade el nuevo src
        const clonedImage = image.cloneNode(true);
        clonedImage.src = 'img/foto8.png';
        link.appendChild(clonedImage);
        image.parentNode.replaceChild(link, image);

        // Iniciar nuevo temporizador de 48 horas
        iniciarTemporizador(48);

    } else if (palabra === "sota") {
        Swal.fire({
            icon: 'success',
            title: 'Te va a tocar jugar a las cartas',
            text: 'Si ganas al demonio, te dirá la siguiente contraseña.',
            confirmButtonText: 'Ganaré',
            customClass: {
                popup: 'my-popup-class',
            },
            willClose: () => {
                window.location.href = 'Sota/index.html';
            }
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Contraseña incorrecta',
            text: 'La contraseña no es correcta',
            confirmButtonText: ':(',
            customClass: {
                popup: 'my-popup-class',
            }
        });
    }
}

// Función para girar la manecilla de la caja
function turnCaja(direction) {
    // Solo permitir modificar el siguiente dial después de presionar "Siguiente"
    if (Math.abs(dialPosition) === 1) {
        document.getElementById(`dial2`).innerText = (parseInt(document.getElementById(`dial2`).innerText) + direction + 100) % 100;
    } else if (Math.abs(dialPosition) === 2) {
        document.getElementById(`dial3`).innerText = (parseInt(document.getElementById(`dial3`).innerText) + direction + 100) % 100;
    } else if (Math.abs(dialPosition) === 3) {
        document.getElementById(`dial4`).innerText = (parseInt(document.getElementById(`dial4`).innerText) + direction + 100) % 100;
    } else if (Math.abs(dialPosition) === 4) {
        document.getElementById(`dial5`).innerText = (parseInt(document.getElementById(`dial5`).innerText) + direction + 100) % 100;
    } else if (Math.abs(dialPosition) === 5) {
        document.getElementById(`dial6`).innerText = (parseInt(document.getElementById(`dial6`).innerText) + direction + 100) % 100;
    } else {
        document.getElementById('dial1').classList.remove('incorrecto');
        document.getElementById('dial2').classList.remove('incorrecto');
        document.getElementById('dial3').classList.remove('incorrecto');
        document.getElementById('dial4').classList.remove('incorrecto');
        document.getElementById('dial5').classList.remove('incorrecto');
        document.getElementById('dial6').classList.remove('incorrecto');
        document.getElementById(`dial1`).innerText = (parseInt(document.getElementById(`dial1`).innerText) + direction + 100) % 100;
    }
}

function siguienteDial() {
    // Permitir pasar al siguiente dial solo después de modificar el dial actual
    if (Math.abs(dialPosition) === 0) {
        document.getElementById('dial1').classList.remove('incorrecto');
        document.getElementById('dial2').classList.remove('incorrecto');
        document.getElementById('dial3').classList.remove('incorrecto');
        document.getElementById('dial4').classList.remove('incorrecto');
        document.getElementById('dial5').classList.remove('incorrecto');
        document.getElementById('dial6').classList.remove('incorrecto');
        document.getElementById('dial1').classList.add('marcado');
        dialPosition = 1; // Mover al siguiente dial
    } else if (Math.abs(dialPosition) === 1) {
        document.getElementById('dial2').classList.add('marcado');
        dialPosition = 2; // Mover al siguiente dial
    } else if (Math.abs(dialPosition) === 2) {
        document.getElementById('dial3').classList.add('marcado');
        dialPosition = 3; // Mover al siguiente dial
    } else if (Math.abs(dialPosition) === 3) {
        ;
        document.getElementById('dial4').classList.add('marcado');
        dialPosition = 4; // Mover al siguiente dial
    } else if (Math.abs(dialPosition) === 4) {
        document.getElementById('dial5').classList.add('marcado');
        dialPosition = 5; // Mover al siguiente dial
    } else if (Math.abs(dialPosition) === 5) {
        document.getElementById('dial6').classList.add('marcado');
        verificarCodigoCaja3(); // Verificar código al llegar al sexto dial
    }
}

function verificarCodigoCaja3() {
    var now = new Date();
    // Verificar si el código es correcto
    if (document.getElementById('dial1').innerText === '39' && document.getElementById('dial2').innerText === '67' && document.getElementById('dial3').innerText === '41' && document.getElementById('dial4').innerText === '98' && document.getElementById('dial5').innerText === '77' && document.getElementById('dial6').innerText === '15') {
        // Cambios caja al abrirse.
        document.getElementById('dial1').classList.remove('marcado');
        document.getElementById('dial2').classList.remove('marcado');
        document.getElementById('dial3').classList.remove('marcado');
        document.getElementById('dial4').classList.remove('marcado');
        document.getElementById('dial5').classList.remove('marcado');
        document.getElementById('dial6').classList.remove('marcado');
        document.getElementById('dial1').classList.add('correcto');
        document.getElementById('dial2').classList.add('correcto');
        document.getElementById('dial3').classList.add('correcto');
        document.getElementById('dial4').classList.add('correcto');
        document.getElementById('dial5').classList.add('correcto');
        document.getElementById('dial6').classList.add('correcto');
        document.getElementById('botones-container').style.display = 'none';
        document.getElementById('cajaImagen3').src = 'img/Caja3A.png';

        Swal.fire({
            icon: 'success',
            title: 'HAS ABIERTO LA CAJA DE ORO!',
            text: 'Enhorabuena!',
            confirmButtonText: 'OLE',
            customClass: {
                popup: 'my-popup-class',
            }
        });

        localStorage.setItem(`caja3`, 'desbloqueada');
        document.querySelector('header').style.backgroundColor = '#f0f0f0';
        document.getElementById('cajas').style.backgroundColor = '#c446ff23';
        document.querySelector('main').style.backgroundColor = 'white';

        //Nueva Imagen y Comentario Regalos
        document.querySelectorAll('#images p')[11].innerText = 'Enhorabuena, ya puedes recoger tus regalos!';
        document.querySelectorAll('#images button')[11].removeAttribute('hidden');
        document.querySelectorAll('#images img')[11].src = 'img/foto12.png';
        localStorage.setItem(`pista12`, 'desbloqueada');

        // Finalizar temporizador
        localStorage.removeItem('targetDate');

    } else {
        // Mostrar alerta de código incorrecto
        document.getElementById('dial1').classList.remove('marcado');
        document.getElementById('dial2').classList.remove('marcado');
        document.getElementById('dial3').classList.remove('marcado');
        document.getElementById('dial4').classList.remove('marcado');
        document.getElementById('dial5').classList.remove('marcado');
        document.getElementById('dial6').classList.remove('marcado');
        document.getElementById('dial1').classList.add('incorrecto');
        document.getElementById('dial2').classList.add('incorrecto');
        document.getElementById('dial3').classList.add('incorrecto');
        document.getElementById('dial4').classList.add('incorrecto');
        document.getElementById('dial5').classList.add('incorrecto');
        document.getElementById('dial6').classList.add('incorrecto');
        resetDiales();
    }
}

function resetDiales() {
    //Resetea los diales al errar la combinación.
    document.getElementById('dial1').innerText = '0';
    document.getElementById('dial2').innerText = '0';
    document.getElementById('dial3').innerText = '0';
    document.getElementById('dial4').innerText = '0';
    document.getElementById('dial5').innerText = '0';
    document.getElementById('dial6').innerText = '0';
    dialPosition = 0;
}

function mostrarPista(index) {
    //Muestra la pista de la imagen
    var mensaje = document.querySelectorAll('#images p')[index].innerText;
    Swal.fire({
        title: 'Pista:',
        text: mensaje,
        confirmButtonText: 'Entiendo',
        customClass: {
            popup: 'my-popup-class',
        }
    });
}

//Guardar avances
function cargarGuardado() {
    for (let i = 1; i <= 12; i++) {
        //Guardado contraseñas
        if (localStorage.getItem(`password${i}`) === 'desbloqueada') {
            const input = document.getElementById(`password${i}`);
            const img = document.querySelector(`#pass${i} img`);

            input.disabled = true;
            input.placeholder = "Desbloqueada";
            img.src = "img/candadoA.png";
        }
    }

    //Guardado pistas
    if (localStorage.getItem(`pista1`) === 'desbloqueada') {
        document.querySelectorAll('#images p')[0].innerText = 'aebtib';
        document.querySelectorAll('#images button')[0].removeAttribute('hidden');
    }
    if (localStorage.getItem(`pista2`) === 'desbloqueada') {
        document.querySelectorAll('#images img')[1].src = 'img/foto2.png';
    }
    if (localStorage.getItem(`pista3`) === 'desbloqueada') {
        document.querySelectorAll('#images p')[2].innerText = 'En dos cuartos me hallo, sin moverme de lugar, un puente entre dos mundos, en uno soy magia, en otro soy deseos. ¿Qué soy? Piénsalo con empeño, este acertijo es un reto.';
        document.querySelectorAll('#images button')[2].removeAttribute('hidden');
        document.querySelectorAll('#images img')[2].src = 'img/foto3.png';
    }
    if (localStorage.getItem(`pista4`) === 'desbloqueada') {
        document.querySelectorAll('#images img')[3].src = 'img/foto4.png';
    }
    if (localStorage.getItem(`pista5`) === 'desbloqueada') {
        const image = document.querySelectorAll('#images img')[4];
        // Crea un nuevo enlace
        const link = document.createElement('a');
        link.href = 'Rompecabezas/rompecabezas.html';
        // Clona la imagen y añade el nuevo src
        const clonedImage = image.cloneNode(true);
        clonedImage.src = 'img/foto5.png';
        link.appendChild(clonedImage);
        image.parentNode.replaceChild(link, image);
    }
    if (localStorage.getItem(`pista6`) === 'desbloqueada') {
        document.querySelectorAll('#images p')[5].innerText = 'Me sostengo con firmeza...Desafía la gravedad...Me elevo como en el aire...El tiempo dará frutos...';
        document.querySelectorAll('#images button')[5].removeAttribute('hidden');
    }
    if (localStorage.getItem(`pista7`) === 'desbloqueada') {
        document.querySelectorAll('#images p')[6].innerText = 'YRIÑLZDFWM';
        document.querySelectorAll('#images button')[6].removeAttribute('hidden');
    }
    if (localStorage.getItem(`pista8`) === 'desbloqueada') {
        const image = document.querySelectorAll('#images img')[7];
        // Crea un nuevo enlace
        const link = document.createElement('a');
        link.href = 'Demonio/demonio.html';
        // Clona la imagen y añade el nuevo src
        const clonedImage = image.cloneNode(true);
        clonedImage.src = 'img/foto8.png';
        link.appendChild(clonedImage);
        image.parentNode.replaceChild(link, image);
    }
    if (localStorage.getItem(`pista9`) === 'desbloqueada') {
        document.querySelectorAll('#images p')[8].innerText = 'РИНAMИСOНЮ';
        document.querySelectorAll('#images button')[8].removeAttribute('hidden');
    }
    if (localStorage.getItem(`pista10`) === 'desbloqueada') {
        document.querySelectorAll('#images p')[9].innerText = '1.Dos números comunes pero en la posición equivocada. 2.Dos números comunes pero en la posición equivocada. 3.El producto de los tres números al cubo.';
        document.querySelectorAll('#images button')[9].removeAttribute('hidden');
        document.querySelectorAll('#images img')[9].src = 'img/foto10.png';
    }
    if (localStorage.getItem(`pista11`) === 'desbloqueada') {
        document.querySelectorAll('#images p')[10].innerText = 'Te vas a enfrentar a una batalla pokémon contra Adri, solo con un único pokemon, si le ganas te dirá la siguiente contraseña, pero si pierdes, perderás una vida, estudiatelo, solo necesitas un solo ataque para ganar';
        document.querySelectorAll('#images button')[10].removeAttribute('hidden');
        const image = document.querySelectorAll('#images img')[10];
        // Crea un nuevo enlace
        const link = document.createElement('a');
        link.href = 'Pokemon/pokemon.html';
        // Clona la imagen y añade el nuevo src
        const clonedImage = image.cloneNode(true);
        clonedImage.src = 'img/foto11.png';
        link.appendChild(clonedImage);
        image.parentNode.replaceChild(link, image);
    }
    if (localStorage.getItem(`pista12`) === 'desbloqueada') {
        document.querySelectorAll('#images p')[11].innerText = 'Enhorabuena, ya puedes recoger tus regalos!';
        document.querySelectorAll('#images button')[11].removeAttribute('hidden');
        document.querySelectorAll('#images img')[11].src = 'img/foto12.png';
    }

    //Guardado cajas
    if (localStorage.getItem(`caja1`) === 'desbloqueada') {
        const img = document.querySelector(`#caja1 img`);
        img.src = "img/Caja1A.png";

        if (localStorage.getItem(`caja2`) === 'desbloqueada') {
            const input = document.getElementById(`passwordcaja2`);
            const img = document.querySelector(`#caja2 img`);

            input.disabled = true;
            input.placeholder = "!!!Caja 2 abierta,  ya solo te queda una!!!";
            img.src = "img/Caja2A.png";
            if (localStorage.getItem(`caja3`) === 'desbloqueada') {
                document.getElementById('dial1').classList.add('correcto');
                document.getElementById('dial2').classList.add('correcto');
                document.getElementById('dial3').classList.add('correcto');
                document.getElementById('dial4').classList.add('correcto');
                document.getElementById('dial5').classList.add('correcto');
                document.getElementById('dial6').classList.add('correcto');
                document.getElementById('botones-container').style.display = 'none';
                document.getElementById('cajaImagen3').src = 'img/Caja3A.png';
            }
        }
    }

    //Guardado vidas
    if (localStorage.getItem('vidas')) {
        vidas = parseInt(localStorage.getItem('vidas'), 10);
    } else {
        localStorage.setItem('vidas', vidas);
    }

    //Guardado temporizador
    if (localStorage.getItem('targetDate')) {
        targetDate = parseInt(localStorage.getItem('targetDate'), 10);
        timerId = setInterval(updateTimer, 1000);
    }

    //Temporizador la primera vez
    if (targetDate == null && vidas == 3 && localStorage.getItem(`pista12`) !== 'desbloqueada') {
        document.getElementById('timer').innerText = "¿Preparada?";
    } else if (localStorage.getItem(`pista12`) === 'desbloqueada') {
        document.getElementById('timer').innerText = "Enhorabuena!";
    }


    if (localStorage.getItem(`password4`) === 'desbloqueada' && localStorage.getItem(`caja1`) != 'desbloqueada') {
        document.querySelector('header').style.backgroundColor = '#865a0842';
        document.getElementById('cajas').style.backgroundColor = '#865a0842';
        document.querySelector('main').style.backgroundColor = '#865a0842';
    } else if (localStorage.getItem(`password8`) === 'desbloqueada' && localStorage.getItem(`caja2`) != 'desbloqueada') {
        document.querySelector('header').style.backgroundColor = '#8181813d';
        document.getElementById('cajas').style.backgroundColor = '#8181813d';
        document.querySelector('main').style.backgroundColor = '#8181813d';
    } else if (localStorage.getItem(`password12`) === 'desbloqueada' && localStorage.getItem(`caja3`) != 'desbloqueada') {
        document.querySelector('header').style.backgroundColor = '#ebd45349';
        document.getElementById('cajas').style.backgroundColor = '#ebd45349';
        document.querySelector('main').style.backgroundColor = '#ebd45349';
    } else {
        document.querySelector('header').style.backgroundColor = '#f0f0f0';
        document.getElementById('cajas').style.backgroundColor = '#c446ff23';
        document.querySelector('main').style.backgroundColor = 'white';
    }


}
