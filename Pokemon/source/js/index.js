const $start = document.getElementById('btnStart');
const $turno = document.getElementById('container__turno');
const $instructions = document.getElementById('container__start');
const $imgCharging = document.getElementById('container__timer1');
const $chosePlayerName = document.getElementById('container__choose-playerName');
const $p1 = document.getElementById('p1');
const $p2 = document.getElementById('p2');
const $btnPlayer = document.getElementById('btnPlayerName');
const $txtPlayer = document.getElementById('txtPlayerName');
const $formName = document.getElementById('formName');
const $playerName1 = document.getElementById('namePlayer1');
const $playerName2 = document.getElementById('namePlayer2');
const $timer = document.getElementById('container__timer2');
const $infoBattle = document.getElementById('container__pokemonInfo--battle');
const $pName1 = document.getElementById('pokemonName1');
const $pType1 = document.getElementById('pokemonType1');
const $pLevel = document.getElementById('pokemonLevel1');
const $pLife1 = document.getElementById('pokemonLife1');
const $pName2 = document.getElementById('pokemonName2');
const $pType2 = document.getElementById('pokemonType2');
const $pLeve2 = document.getElementById('pokemonLevel2');
const $pLife2 = document.getElementById('pokemonLife2');
const $battleMap = document.getElementById('battleMapID');
const $battleButtons1 = document.getElementById('battleButtonsA');
const $battleButtons2 = document.getElementById('battleButtonsB');
const $imgPoke1 = document.getElementById('imgPoke1');
const $imgPoke2 = document.getElementById('imgPoke2');
const $ataque1a = document.getElementById('ataque1a');
const $ataque2a = document.getElementById('ataque2a');
const $ataque3a = document.getElementById('ataque3a');
const $ataque1b = document.getElementById('ataque1b');
const $ataque2b = document.getElementById('ataque2b');
const $ataque3b = document.getElementById('ataque3b');
const $pokemonInicial = document.getElementById('pokemonInicial')
const URL_API_POKEMON = 'https://pokeapi.co/api/v2/pokemon/id'

var namePlayer1;
var namePlayer2 = "Adri";
var turno = 1;
var combate = 1;
var velocidad = 0;
var ataqueEspecial = 0;

$start.addEventListener('click', empezar);
$btnPlayer.addEventListener('click', playerName);
$formName.addEventListener('submit', (ev) => {
	ev.preventDefault();
	playerName();
});

function showInstructions() {
	setTimeout(() => {
		$imgCharging.classList.toggle('hide');
		$instructions.classList.toggle('start');
	}, 2000);
}

function empezar() {
	$instructions.classList.toggle('start');
	$turno.classList.toggle('turno');
	$chosePlayerName.classList.toggle('choosePlayerName');
	setTimeout(() => $p1.classList.toggle('indicator'), 500);
}


//Validará el input, asignará el nombre al player en turno y lo mostrará en el indicador
//Despues de asignar ambos, pasará al contenedor de 'Elige a tu compañero de batalla'
function playerName() {
	if ($txtPlayer.value == '') {
		Swal.fire({
			icon: 'error',
			title: 'Debes ingresar un nombre',
			text: 'Pon Paaolita y te da suerte',
			confirmButtonText: 'Vale',
		});
	} else {
		namePlayer1 = $txtPlayer.value;
		$playerName1.innerHTML = namePlayer1;
		$playerName2.innerHTML = namePlayer2;
		selectPokemon();
	}
}
//Recibe un elemento HTML y los atributos que se le asignarán a este elemento
function setImgAttributes($element, attributes) {
	for (let attribute in attributes)
		$element.setAttribute(attribute, attributes[attribute])
}
//Después de instanciar ambos Pokemon, se asignarán los valores para mostrarlos en elementos HTML
function loadPokemonInfo() {
	$pName1.innerHTML = pokemonSelected1.name
	$pType1.innerHTML = pokemonSelected1.type
	$pLevel.innerHTML = pokemonSelected1.level
	$pLife1.innerHTML = pokemonSelected1.vida

	$pName2.innerHTML = pokemonSelected2.name
	$pType2.innerHTML = pokemonSelected2.type
	$pLeve2.innerHTML = pokemonSelected2.level
	$pLife2.innerHTML = pokemonSelected2.vida
}

async function selectPokemon() {
	const pokemon1ID = 25; // ID de Pikachu
	const pokemon2ID = 6;  // ID de Charizard

	pokemonSelected1 = await makePokemon(pokemon1ID);
	pokemonSelected2 = await makePokemon(pokemon2ID);

	loadPokemonInfo();
	imgTurnPokemon1();
	turnButtonsA();

	$chosePlayerName.classList.toggle('choosePlayerName');
	$turno.classList.toggle('turno');
	$timer.classList.toggle('hide');

	setTimeout(() => {
		loadAttacks(pokemonSelected1, pokemonSelected2);
		$timer.classList.toggle('hide');
		$turno.classList.toggle('turno');
		$infoBattle.classList.toggle('pokemonInfoBattle');
		$p1.classList.toggle('indicator');
		$battleButtons1.classList.toggle('turnButtons');
		$imgPoke1.classList.toggle('imgEnd');
	}, 2000);
}

//Obtendrá 2 valores de forma sincrona e instanciará a los Pokemon elegidos notificando el resultado
async function makePokemon(n) {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${n}`);
	const poke = await response.json();
	const typeEsp = poke.types.map(type => type.type.name).join(', ');
	// Modifico la lista de movimientos para cada Pokémon
	const movesPokemon = poke.moves.slice(0, 3).map(move => ({ name: move.move.name }));
	// Reemplazo los ataques por los nuevos movimientos asignados
	if (n === 25) { // Pikachu
		movesPokemon[0].name = "Thunderbolt";
		movesPokemon[1].name = "Quick Attack";
		movesPokemon[2].name = "Nasty Plot";
	} else if (n === 6) { // Charizard
		movesPokemon[0].name = "Agility";
		movesPokemon[1].name = "Wing Attack";
		movesPokemon[2].name = "Flamethrower";
	}
	return new Pokemon(poke.id, poke.name, typeEsp, movesPokemon, poke.base_experience, 100, poke.sprites.front_default, poke.sprites.back_default);
}

//Cambiara tamaño y orientación de las imagenes/botones de la batalla de acuerdo al turno
function nextTurn() {
	switch (turno) {
		case 1:
			imgTurnPokemon2();
			turnButtonsB();
			$imgPoke1.classList.toggle('rotar');
			$imgPoke2.classList.toggle('rotar');
			turno++;
			setTimeout(() => {
				automaticoAtaque();
			}, 2000);
			break;
		case 2:
			imgTurnPokemon1();
			turnButtonsA();
			$imgPoke1.classList.toggle('rotar');
			$imgPoke2.classList.toggle('rotar');
			turno--;
			break;
	}
}
//El Pokemon1 será más grande y de espaldas. El Pokemon2 estará de frente
function imgTurnPokemon1() {
	setImgAttributes($imgPoke1, {
		src: `${pokemonSelected1.imgBack}`,
		width: 150,
		height: 150,
	})
	setImgAttributes($imgPoke2, {
		src: `${pokemonSelected2.imgFront}`,
		width: 120,
		height: 120,
	})
}
//El Pokemon2 será más grande y de espaldas. El Pokemon1 estará de frente
function imgTurnPokemon2() {
	setImgAttributes($imgPoke1, {
		src: `${pokemonSelected1.imgFront}`,
		width: 120,
		height: 120,
	})
	setImgAttributes($imgPoke2, {
		src: `${pokemonSelected2.imgBack}`,
		width: 150,
		height: 150,
	})
}
//Cargará en cada boton, los ataques de ambos Pokemon elegidos 
function loadAttacks(ps1, ps2) {
	let a = ps1.attacks//simplifica la selección del atributo attack del Pokemon
	let b = ps2.attacks
	setImgAttributes($ataque1a, { value: `${a[0].name}` })
	setImgAttributes($ataque2a, { value: `${a[1].name}` })
	setImgAttributes($ataque3a, { value: `${a[2].name}` })

	setImgAttributes($ataque1b, { value: `${b[0].name}` })
	setImgAttributes($ataque2b, { value: `${b[1].name}` })
	setImgAttributes($ataque3b, { value: `${b[2].name}` })
}
//Cambia los atributos del Pokemon ganador y lo notifica con una alerta
async function ganador($img, ganador, _user) {
	setImgAttributes($img, {
		src: `${ganador.imgFront}`,
		width: 250,
		height: 250,
	});
	console.log(_user);
	$txtBattle.innerHTML += ' ha sido un golpe letal<br/>Fin de la batalla !!';
	if (_user === 'Adri') {
		Swal.fire({
			icon: 'error',
			title: 'Lo siento!',
			text: 'Has perdido una vida!',
			confirmButtonText: 'Vaya...',
		}).then((result) => {
			// Después de que el usuario cierre la alerta, redirigir a ../index.html
			if (result.isConfirmed) {
				localStorage.setItem('perderVida', 'true');
				window.location.href = '../index.html';
			}
		});
	} else {
		Swal.fire({
            title: "Enhorabuena!",
            text: "La contraseña es: recuerdos",
            imageUrl: "source/images/miau.jpg",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Miau",
            confirmButtonText: 'Toma ya!'
          });
	}
}
//finaliza el juego con una animación al Pokemon perdedor y muestra el boton para volver a jugar
function perdedor($img, { name }, user) {
	$txtBattle.innerHTML = `<strong>${name}:</strong> No me quiero ir Sr. ${user}....`
	$img.classList.add('pokeByeBye')
	setTimeout(() => {
		$txtBattle.innerHTML = `Fin de la batalla !!`
	}, 4000)
}
//Despues de cada ataque se validará que la vida de cada Pokemon no sea 0 o menos para continuar
async function validarGanador() {
	if (pokemonSelected1.vida < 1) {
		$p2.classList.toggle('indicator')
		await ganador($imgPoke2, pokemonSelected2, namePlayer2)
		setTimeout(() => perdedor($imgPoke1, pokemonSelected1, namePlayer1), 1100)
	} else if (pokemonSelected2.vida < 1) {
		$p1.classList.toggle('indicator')
		await ganador($imgPoke1, pokemonSelected1, namePlayer1)
		setTimeout(() => perdedor($imgPoke2, pokemonSelected2, namePlayer2), 1100)
	} else {
		nextTurn()
		setTimeout(() => $txtBattle.innerHTML += `<br />La battalla continua...`, 500)
		$battleButtons1.classList.toggle('turnButtons')
		$battleButtons2.classList.toggle('turnButtons')
		$p1.classList.toggle('indicator')
		$p2.classList.toggle('indicator')
		$battleMap.classList.toggle('map2')
		$imgPoke1.classList.toggle('imgEnd')
		$imgPoke2.classList.toggle('imgEnd')
	}
}
//Ejecutará las los efectos del atacante, atacado, defensa, evadir ataque
//Condicionará el valor de daño de acuerdo al nivel de ambos pokemon y actualizará el marcador de vida despues del ataque
function pokeAtack(attack) {

	turnButtonsOf()
	var powerAtack
	var $atacante
	var $atacado
	var $marcador
	var $imgPokeAtacado
	var $imgPokeAtacante
	//Switch asignará valores a las variables locales de acuerdo al turno
	switch (turno) {
		case 1:
			$atacante = pokemonSelected1
			$atacado = pokemonSelected2
			$marcador = $pLife2
			$imgPokeAtacante = $imgPoke1
			$imgPokeAtacado = $imgPoke2
			break
		case 2:
			$atacante = pokemonSelected2
			$atacado = pokemonSelected1
			$marcador = $pLife1
			$imgPokeAtacante = $imgPoke2
			$imgPokeAtacado = $imgPoke1
			break
	}

	// Verifica si el ataque es "Agility" o "Nasty Plot"
	if (attack.target.value === "Agility") {
		// Solo aumenta la velocidad del Pokémon atacante
		velocidad += 10;
		// Muestra un mensaje indicando el aumento de la velocidad
		$txtBattle.innerHTML = `<strong>${$atacante.name}:</strong> Ha aumentado su velocidad.`;
	} else if (attack.target.value === "Nasty Plot") {
		// Solo aumenta el ataque especial del Pokémon atacante
		ataqueEspecial += 10;
		// Muestra un mensaje indicando el aumento del ataque especial
		if (ataqueEspecial > 30) {
			$txtBattle.innerHTML = `<strong>${$atacante.name}:</strong> Tiene su ataque especial al MAXIMO.`;
		} else {
			$txtBattle.innerHTML = `<strong>${$atacante.name}:</strong> Ha aumentado su ataque especial.`;
		}
	} else {
		if (ataqueEspecial > 30) {
			console.log(80);
			powerAtack = 150
		}
		else if (ataqueEspecial > 20) {
			console.log(50);
			powerAtack = 50
		}
		else if (ataqueEspecial > 10) {
			console.log(30);
			powerAtack = 30
		}
		else if ($atacante.level > $atacado.level) {
			//si el nivel del atacante es mayor al nivel del atacado
			powerAtack = 30
		}
		else if (($atacante.level / 2) > $atacado.level) {
			//si la mitad del nivel del atacante sigue siendo mayor al nivel del atacado
			powerAtack = 50
		}
		else {
			//si el nivel del atacante no es mayor al nivel del atacado
			powerAtack = 15
		}

		$atacante.movimientoAtacar($imgPokeAtacante, $atacante)//Ejecutará el efecto del Pokemon atacante
		$atacante.atacar($atacante, $atacado, attack)//Llama al mensaje de batalla y devuelve un valor verdadero
		/*
		Despues de atacar(), se evaluará la variable booleana verdadera y se ejectutará la animación correspondiente
		para el pokemon atacado, dependiendo la condición cambiará el valor de powerAtack 
		y se devolvera nuevamente a false el valor de la variable booleana*/
		if (evadAtaque) {
			powerAtack = 0
			$atacado.evadirAtaque($imgPokeAtacado)
			evadAtaque = false
		}
		if (useDefense) {
			powerAtack -= 10
			$atacado.defensaEspecial($imgPokeAtacado)
			useDefense = false
		}
		if (pokeAtacado) {
			$atacado.atacado($imgPokeAtacado)
			pokeAtacado = false
		}

		$atacado.vida -= powerAtack
		if ($atacado.vida < 0) { $atacado.vida = 0 }
		$marcador.innerHTML = $atacado.vida
	}


	//Después de ejecutar las animaciones se validará si hay ganador o si la batalla continua
	setTimeout(() => validarGanador(), 1200)
}
//Habilita los ataques del Pokemon1 e inhabilita los del Pokemon2
function turnButtonsA() {
	$ataque1a.addEventListener('click', pokeAtack)
	$ataque2a.addEventListener('click', pokeAtack)
	$ataque3a.addEventListener('click', pokeAtack)

}
//Habilita los ataques del Pokemon2 e inhabilita los del Pokemon1
function turnButtonsB() {

	$ataque1a.removeEventListener('click', pokeAtack)
	$ataque2a.removeEventListener('click', pokeAtack)
	$ataque3a.removeEventListener('click', pokeAtack)
}
//inhabilita los ataques de ambos Pokemon
function turnButtonsOf() {

	$ataque1a.removeEventListener('click', pokeAtack)
	$ataque2a.removeEventListener('click', pokeAtack)
	$ataque3a.removeEventListener('click', pokeAtack)
}

// Función para ataques automáticos del jugador 2
function automaticoAtaque() {
	const ataque1 = pokemonSelected2.attacks[0];
	const ataque2 = pokemonSelected2.attacks[1];
	const ataque3 = pokemonSelected2.attacks[2];

	let attack;

	if (pokemonSelected2.vida > 80 && ataqueEspecial < 60) {
		attack = {
			target: {
				value: ataque1.name
			}
		};
	} else if (pokemonSelected2.vida > 40) {
		attack = {
			target: {
				value: ataque2.name
			}
		};
	} else {
		attack = {
			target: {
				value: ataque3.name
			}
		};
	}

	// Llama a la función pokeAtack con el objeto attack
	pokeAtack(attack);
}

showInstructions()