function gerarTimes() {
	const nomesJogadoresInput = document.getElementById('nomesJogadores');
	const resultadoDiv = document.getElementById('resultado');

	const nomesJogadores = nomesJogadoresInput.value
		.split('\n')
		.map(nome => nome.trim()); // Não é mais necessário filtrar entradas vazias

	// Se houver pelo menos 2 jogadores, continuar
	if (nomesJogadores.length < 2) {
		resultadoDiv.innerHTML = 'Insira pelo menos 2 jogadores para formar 2 times.';
		return;
	}

	// Embaralhar os jogadores
	for (let i = nomesJogadores.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[nomesJogadores[i], nomesJogadores[j]] = [nomesJogadores[j], nomesJogadores[i]];
	}

	// Formar os dois times
	const time1 = nomesJogadores.slice(0, 5);
	const time2 = nomesJogadores.slice(5, 10);
	const time3 = nomesJogadores.slice(10); // Jogadores restantes

	resultadoDiv.innerHTML = `
		<h2>Time 1:</h2>
		<ul>${time1.map(jogador => `<li>${jogador}</li>`).join('')}</ul>

		<h2>Time 2:</h2>
		<ul>${time2.map(jogador => `<li>${jogador}</li>`).join('')}</ul>
	`;

	if (time3.length > 0) {
		// Se houver jogadores restantes, formar um terceiro time
		resultadoDiv.innerHTML += `<h2>Reservas:</h2><ul>${time3.map(jogador => `<li>${jogador}</li>`).join('')}</ul>`;
	}
}