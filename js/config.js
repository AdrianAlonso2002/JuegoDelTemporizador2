// Variables globales
var dialPosition = 0;

// Función para calcular el tiempo restante y actualizar el temporizador
function updateTimer() {

    var now = new Date();
    /*
    if (now > new Date('2024-03-24T12:00:00')) {
        document.querySelectorAll('#images img')[0].src = 'img/foto1.png';
        document.querySelectorAll('#images p')[0].innerText = 'En un rincón de la casa, no llama atención,donde el gato hace su ronda,una sorpresa aguarda, una nota escondida, en un lugar que vas, si con pelotas quieres jugar.';
        document.querySelectorAll('#images button')[0].removeAttribute('hidden');
        if (now > new Date('2024-03-24T16:00:00')) {
            document.querySelectorAll('#images img')[1].src = 'img/foto2.png';
            if (now > new Date('2024-03-25T11:00:00')) {
                document.querySelectorAll('#images img')[2].src = 'img/foto3.png';
                document.querySelectorAll('#images p')[2].innerText = 'En un rincón caliente, en la casa de un fiel amigo,donde descansa y se siente abrigado con mimo, entre vapor y calor,el tiempo transcurre, hay algo oculto';
                document.querySelectorAll('#images button')[2].removeAttribute('hidden');
                if (now > new Date('2024-03-25T16:00:00')) {
                    document.querySelectorAll('#images img')[3].src = 'img/foto4.png';
                    if (now > new Date('2024-03-26T16:00:00')) {
                        document.querySelectorAll('#images img')[5].src = 'img/foto6.png';
                        document.querySelectorAll('#images p')[5].innerText = 'En un lugar de sudor y esfuerzo,donde el cuerpo se moldea con destreza y acierto,compartiendo risas y sueños.';
                        document.querySelectorAll('#images button')[4].removeAttribute('hidden');
                        if (now > new Date('2024-03-27T11:00:00')) {
                            document.querySelectorAll('#images img')[6].src = 'img/foto7.png';
                            if (now > new Date('2024-03-27T17:00:00')) {
                                document.querySelectorAll('#images img')[8].src = 'img/foto9.png';
                                document.querySelectorAll('#images p')[8].innerText = 'En una habitación caótica, donde el orden se perdió,un secreto se esconde, pero solo el brillo lo descubrirá hoy,solo un gran destello revelará dónde está.';
                                document.querySelectorAll('#images button')[7].removeAttribute('hidden');
                                var targetDate = new Date('2024-03-27T17:00:00');
                            } else { var targetDate = new Date('2024-03-27T17:00:00'); }
                        } else { var targetDate = new Date('2024-03-27T11:00:00'); }
                    } else { var targetDate = new Date('2024-03-26T16:00:00'); }
                } else { var targetDate = new Date('2024-03-25T16:00:00'); }
            } else { var targetDate = new Date('2024-03-25T11:00:00'); }
        } else { var targetDate = new Date('2024-03-24T16:00:00'); }
    } else { var targetDate = new Date('2024-03-24T12:00:00'); }
    */
    var difference = targetDate - now;

    if (difference <= 0) {
        document.getElementById('timer').innerText = "Terminado";
        return;
    }

    var hours = Math.floor(difference / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('timer').innerText = formatTime(hours) + "h:" + formatTime(minutes) + "m:" + formatTime(seconds) + "s";
}

setInterval(updateTimer, 1000);

// Función para formatear el tiempo
function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

//Comprobar enter contraseña1
document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.getElementById("password1");
    passwordInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            checkPassword1();
        }
    });
});
//Comprobar enter contraseña2
document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.getElementById("password2");
    passwordInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            checkPassword2();
        }
    });
});
//Comprobar enter contraseña3
document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.getElementById("password3");
    passwordInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            checkPassword3();
        }
    });
});
//Comprobar enter contraseña4
document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.getElementById("password4");
    passwordInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            checkPassword4();
        }
    });
});
//Comprobar enter contraseña5
document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.getElementById("password5");
    passwordInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            checkPassword5();
        }
    });
});
//Comprobar enter contraseña6
document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.getElementById("password6");
    passwordInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            checkPassword6();
        }
    });
});
//Comprobar enter contraseña7
document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.getElementById("password7");
    passwordInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            checkPassword7();
        }
    });
});
//Comprobar enter contraseña8
document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.getElementById("password8");
    passwordInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            checkPassword8();
        }
    });
});
//Comprobar enter contraseña9
document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.getElementById("password9");
    passwordInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            checkPassword9();
        }
    });
});
//Comprobar enter contraseña10
document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.getElementById("password10");
    passwordInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            checkPassword10();
        }
    });
});
//Comprobar enter contraseña11
document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.getElementById("password11");
    passwordInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            checkPassword11();
        }
    });
});
//Comprobar enter contraseña12
document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.getElementById("password12");
    passwordInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            checkPassword12();
        }
    });
});

// Función para verificar la contraseña1
function checkPassword1() {
    var password1 = document.getElementById('password1').value.toLowerCase();

    // Verifica si las contraseña es correcta
    if (password1 === 'juntos' || password1 === 'unidos') {
        password1Unlocked = true;
        Swal.fire({
            icon: 'success',
            title: 'Contraseña1 Correcta',
            text: 'Se ha desbloqueado una pista y una imagen! La imagen se desbloqueará cuando acabe el temporizador!',
            confirmButtonText: 'Vale',
            customClass: {
                popup: 'my-popup-class',
            }
        });
        document.querySelectorAll('#images p')[1].innerText = 'Donde risas y juegos suelen resonar,una pareja se encontró,donde su primer ···· se pudo disfrutar.un recuerdo guardado en aquel rincón.';
        document.getElementById('pass1').getElementsByTagName('img')[0].src = 'img/candadoA.png';
        document.querySelectorAll('#images button')[1].removeAttribute('hidden');
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Contraseña1 Incorrecta',
            text: 'Revisa las pistas',
            confirmButtonText: 'Jo',
            customClass: {
                popup: 'my-popup-class',
            }
        });
    }
}
// Función para verificar la contraseña2
function checkPassword2() {
    var password2 = document.getElementById('password2').value.toLowerCase();

    // Verifica si las contraseñas son correctas
    if (password2 === 'felicidad') {
        password2Unlocked = true;
        Swal.fire({
            icon: 'success',
            title: 'Contraseña2 Correcta',
            text: 'Se ha desbloqueado una pista y una imagen! La imagen se desbloqueará cuando acabe el temporizador!',
            confirmButtonText: 'Vale',
            customClass: {
                popup: 'my-popup-class',
            }
        });
        document.querySelectorAll('#images p')[3].innerText = 'En una casa llena de historias y abrazos,una pareja se cobijó al inicio,pasaron noches juntos, bajo el techo del amor,guardan risas y secretos.';
        document.getElementById('pass2').getElementsByTagName('img')[0].src = 'img/candadoA.png';
        document.querySelectorAll('#images button')[3].removeAttribute('hidden');
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Contraseña2 Incorrecta',
            text: 'Revisa las pistas',
            confirmButtonText: 'Jo',
            customClass: {
                popup: 'my-popup-class',
            }
        });
    }
}
// Función para verificar la contraseña3
function checkPassword3() {
    var password3 = document.getElementById('password3').value.toLowerCase();

    // Verifica si las contraseñas son correctas
    if (password3 === 'fuerza') {
        password3Unlocked = true;
        Swal.fire({
            icon: 'success',
            title: 'Contraseña3 Correcta',
            text: 'Se ha desbloqueado una pista! La imagen se desbloqueará cuando acabe el temporizador!',
            confirmButtonText: 'Vale',
            customClass: {
                popup: 'my-popup-class',
            }
        });
        document.querySelectorAll('#images p')[6].innerText = 'En un rincón de Madrid, lleno de arboleda, copas y bloqueos,entre risas y estrategias, se tejió el primer lazo,guardan el recuerdo de un amor en su primer fulgor.';
        document.getElementById('pass3').getElementsByTagName('img')[0].src = 'img/candadoA.png';
        document.querySelectorAll('#images button')[5].removeAttribute('hidden');
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Contraseña3 Incorrecta',
            text: 'Revisa las pistas',
            confirmButtonText: 'Jo',
            customClass: {
                popup: 'my-popup-class',
            }
        });
    }
}
// Función para verificar la contraseña4
function checkPassword4() {
    var password1 = document.getElementById('password4').value.toLowerCase();

    // Verifica si las contraseña es correcta
    if (password1 === 'juntos' || password1 === 'unidos') {
        password1Unlocked = true;
        Swal.fire({
            icon: 'success',
            title: 'Contraseña1 Correcta',
            text: 'Se ha desbloqueado una pista y una imagen! La imagen se desbloqueará cuando acabe el temporizador!',
            confirmButtonText: 'Vale',
            customClass: {
                popup: 'my-popup-class',
            }
        });
        document.querySelectorAll('#images p')[1].innerText = 'Donde risas y juegos suelen resonar,una pareja se encontró,donde su primer ···· se pudo disfrutar.un recuerdo guardado en aquel rincón.';
        document.getElementById('pass1').getElementsByTagName('img')[0].src = 'img/candadoA.png';
        document.querySelectorAll('#images button')[1].removeAttribute('hidden');
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Contraseña4 Incorrecta',
            text: 'Revisa las pistas',
            confirmButtonText: 'Jo',
            customClass: {
                popup: 'my-popup-class',
            }
        });
    }
}
// Función para verificar la contraseña5
function checkPassword5() {
    var password1 = document.getElementById('password5').value.toLowerCase();

    // Verifica si las contraseña es correcta
    if (password1 === 'juntos' || password1 === 'unidos') {
        password1Unlocked = true;
        Swal.fire({
            icon: 'success',
            title: 'Contraseña1 Correcta',
            text: 'Se ha desbloqueado una pista y una imagen! La imagen se desbloqueará cuando acabe el temporizador!',
            confirmButtonText: 'Vale',
            customClass: {
                popup: 'my-popup-class',
            }
        });
        document.querySelectorAll('#images p')[1].innerText = 'Donde risas y juegos suelen resonar,una pareja se encontró,donde su primer ···· se pudo disfrutar.un recuerdo guardado en aquel rincón.';
        document.getElementById('pass1').getElementsByTagName('img')[0].src = 'img/candadoA.png';
        document.querySelectorAll('#images button')[1].removeAttribute('hidden');
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Contraseña5 Incorrecta',
            text: 'Revisa las pistas',
            confirmButtonText: 'Jo',
            customClass: {
                popup: 'my-popup-class',
            }
        });
    }
}
// Función para verificar la contraseña6
function checkPassword6() {
    var password1 = document.getElementById('password6').value.toLowerCase();

    // Verifica si las contraseña es correcta
    if (password1 === 'juntos' || password1 === 'unidos') {
        password1Unlocked = true;
        Swal.fire({
            icon: 'success',
            title: 'Contraseña1 Correcta',
            text: 'Se ha desbloqueado una pista y una imagen! La imagen se desbloqueará cuando acabe el temporizador!',
            confirmButtonText: 'Vale',
            customClass: {
                popup: 'my-popup-class',
            }
        });
        document.querySelectorAll('#images p')[1].innerText = 'Donde risas y juegos suelen resonar,una pareja se encontró,donde su primer ···· se pudo disfrutar.un recuerdo guardado en aquel rincón.';
        document.getElementById('pass1').getElementsByTagName('img')[0].src = 'img/candadoA.png';
        document.querySelectorAll('#images button')[1].removeAttribute('hidden');
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Contraseña6 Incorrecta',
            text: 'Revisa las pistas',
            confirmButtonText: 'Jo',
            customClass: {
                popup: 'my-popup-class',
            }
        });
    }
}
// Función para verificar la contraseña7
function checkPassword7() {
    var password1 = document.getElementById('password7').value.toLowerCase();

    // Verifica si las contraseña es correcta
    if (password1 === 'juntos' || password1 === 'unidos') {
        password1Unlocked = true;
        Swal.fire({
            icon: 'success',
            title: 'Contraseña7 Correcta',
            text: 'Se ha desbloqueado una pista y una imagen! La imagen se desbloqueará cuando acabe el temporizador!',
            confirmButtonText: 'Vale',
            customClass: {
                popup: 'my-popup-class',
            }
        });
        document.querySelectorAll('#images p')[1].innerText = 'Donde risas y juegos suelen resonar,una pareja se encontró,donde su primer ···· se pudo disfrutar.un recuerdo guardado en aquel rincón.';
        document.getElementById('pass1').getElementsByTagName('img')[0].src = 'img/candadoA.png';
        document.querySelectorAll('#images button')[1].removeAttribute('hidden');
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Contraseña7 Incorrecta',
            text: 'Revisa las pistas',
            confirmButtonText: 'Jo',
            customClass: {
                popup: 'my-popup-class',
            }
        });
    }
}
// Función para verificar la contraseña8
function checkPassword8() {
    var password1 = document.getElementById('password8').value.toLowerCase();

    // Verifica si las contraseña es correcta
    if (password1 === 'juntos' || password1 === 'unidos') {
        password1Unlocked = true;
        Swal.fire({
            icon: 'success',
            title: 'Contraseña1 Correcta',
            text: 'Se ha desbloqueado una pista y una imagen! La imagen se desbloqueará cuando acabe el temporizador!',
            confirmButtonText: 'Vale',
            customClass: {
                popup: 'my-popup-class',
            }
        });
        document.querySelectorAll('#images p')[1].innerText = 'Donde risas y juegos suelen resonar,una pareja se encontró,donde su primer ···· se pudo disfrutar.un recuerdo guardado en aquel rincón.';
        document.getElementById('pass1').getElementsByTagName('img')[0].src = 'img/candadoA.png';
        document.querySelectorAll('#images button')[1].removeAttribute('hidden');
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Contraseña8 Incorrecta',
            text: 'Revisa las pistas',
            confirmButtonText: 'Jo',
            customClass: {
                popup: 'my-popup-class',
            }
        });
    }
}
// Función para verificar la contraseña9
function checkPassword9() {
    var password1 = document.getElementById('password9').value.toLowerCase();

    // Verifica si las contraseña es correcta
    if (password1 === 'juntos' || password1 === 'unidos') {
        password1Unlocked = true;
        Swal.fire({
            icon: 'success',
            title: 'Contraseña1 Correcta',
            text: 'Se ha desbloqueado una pista y una imagen! La imagen se desbloqueará cuando acabe el temporizador!',
            confirmButtonText: 'Vale',
            customClass: {
                popup: 'my-popup-class',
            }
        });
        document.querySelectorAll('#images p')[1].innerText = 'Donde risas y juegos suelen resonar,una pareja se encontró,donde su primer ···· se pudo disfrutar.un recuerdo guardado en aquel rincón.';
        document.getElementById('pass1').getElementsByTagName('img')[0].src = 'img/candadoA.png';
        document.querySelectorAll('#images button')[1].removeAttribute('hidden');
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Contraseña9 Incorrecta',
            text: 'Revisa las pistas',
            confirmButtonText: 'Jo',
            customClass: {
                popup: 'my-popup-class',
            }
        });
    }
}
// Función para verificar la contraseña10
function checkPassword10() {
    var password1 = document.getElementById('password10').value.toLowerCase();

    // Verifica si las contraseña es correcta
    if (password1 === 'juntos' || password1 === 'unidos') {
        password1Unlocked = true;
        Swal.fire({
            icon: 'success',
            title: 'Contraseña10 Correcta',
            text: 'Se ha desbloqueado una pista y una imagen! La imagen se desbloqueará cuando acabe el temporizador!',
            confirmButtonText: 'Vale',
            customClass: {
                popup: 'my-popup-class',
            }
        });
        document.querySelectorAll('#images p')[1].innerText = 'Donde risas y juegos suelen resonar,una pareja se encontró,donde su primer ···· se pudo disfrutar.un recuerdo guardado en aquel rincón.';
        document.getElementById('pass1').getElementsByTagName('img')[0].src = 'img/candadoA.png';
        document.querySelectorAll('#images button')[1].removeAttribute('hidden');
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Contraseña10 Incorrecta',
            text: 'Revisa las pistas',
            confirmButtonText: 'Jo',
            customClass: {
                popup: 'my-popup-class',
            }
        });
    }
}
// Función para verificar la contraseña11
function checkPassword11() {
    var password1 = document.getElementById('password11').value.toLowerCase();

    // Verifica si las contraseña es correcta
    if (password1 === 'juntos' || password1 === 'unidos') {
        password1Unlocked = true;
        Swal.fire({
            icon: 'success',
            title: 'Contraseña1 Correcta',
            text: 'Se ha desbloqueado una pista y una imagen! La imagen se desbloqueará cuando acabe el temporizador!',
            confirmButtonText: 'Vale',
            customClass: {
                popup: 'my-popup-class',
            }
        });
        document.querySelectorAll('#images p')[1].innerText = 'Donde risas y juegos suelen resonar,una pareja se encontró,donde su primer ···· se pudo disfrutar.un recuerdo guardado en aquel rincón.';
        document.getElementById('pass1').getElementsByTagName('img')[0].src = 'img/candadoA.png';
        document.querySelectorAll('#images button')[1].removeAttribute('hidden');
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Contraseña11 Incorrecta',
            text: 'Revisa las pistas',
            confirmButtonText: 'Jo',
            customClass: {
                popup: 'my-popup-class',
            }
        });
    }
}
// Función para verificar la contraseña12
function checkPassword12() {
    var password1 = document.getElementById('password12').value.toLowerCase();

    // Verifica si las contraseña es correcta
    if (password1 === 'juntos' || password1 === 'unidos') {
        password1Unlocked = true;
        Swal.fire({
            icon: 'success',
            title: 'Contraseña1 Correcta',
            text: 'Se ha desbloqueado una pista y una imagen! La imagen se desbloqueará cuando acabe el temporizador!',
            confirmButtonText: 'Vale',
            customClass: {
                popup: 'my-popup-class',
            }
        });
        document.querySelectorAll('#images p')[1].innerText = 'Donde risas y juegos suelen resonar,una pareja se encontró,donde su primer ···· se pudo disfrutar.un recuerdo guardado en aquel rincón.';
        document.getElementById('pass1').getElementsByTagName('img')[0].src = 'img/candadoA.png';
        document.querySelectorAll('#images button')[1].removeAttribute('hidden');
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Contraseña12 Incorrecta',
            text: 'Revisa las pistas',
            confirmButtonText: 'Jo',
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
    }else if (Math.abs(dialPosition) === 4) {
        document.getElementById(`dial5`).innerText = (parseInt(document.getElementById(`dial5`).innerText) + direction + 100) % 100;
    }else if (Math.abs(dialPosition) === 5) {
        document.getElementById(`dial6`).innerText = (parseInt(document.getElementById(`dial6`).innerText) + direction + 100) % 100;
    }else {
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
    } else if (Math.abs(dialPosition) === 3) {;
        document.getElementById('dial4').classList.add('marcado');
        dialPosition = 4; // Mover al siguiente dial
    } else if (Math.abs(dialPosition) === 4) {
        document.getElementById('dial5').classList.add('marcado');
        dialPosition = 5; // Mover al siguiente dial
    } else if (Math.abs(dialPosition) === 5) {
        document.getElementById('dial6').classList.add('marcado');
        verificarCodigo(); // Verificar código al llegar al sexto dial
    }
}

function verificarCodigo() {
    var now = new Date();
    // Verificar si el código es correcto
    if (document.getElementById('dial1').innerText === '7' && document.getElementById('dial2').innerText === '29' && document.getElementById('dial3').innerText === '2' && document.getElementById('dial4').innerText === '2' && document.getElementById('dial5').innerText === '2' && document.getElementById('dial6').innerText === '2' && now > new Date('2024-03-27T11:40:00')) {
        // Cambiar imagen de la caja
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
            title: 'HAS ABIERTO LA CAJA',
            text: 'Te quedan 2 temporizadores más!',
            confirmButtonText: 'OLE',
            customClass: {
                popup: 'my-popup-class',
            }
        });

        document.querySelectorAll('#images img')[4].src = 'img/foto5.png';
        document.querySelectorAll('#images p')[4].innerText = 'TQ';
        document.querySelectorAll('#images p')[4].removeAttribute('hidden');
        document.querySelectorAll('#images img')[7].src = 'img/foto8.png';
        document.querySelectorAll('#images p')[7].innerText = 'A comer al Vips';
        document.querySelectorAll('#images button')[6].removeAttribute('hidden');
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
    document.getElementById('dial1').innerText = '0';
    document.getElementById('dial2').innerText = '0';
    document.getElementById('dial3').innerText = '0';
    document.getElementById('dial4').innerText = '0';
    document.getElementById('dial5').innerText = '0';
    document.getElementById('dial6').innerText = '0';
    dialPosition = 0;
}

function mostrarPista(index) {
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
