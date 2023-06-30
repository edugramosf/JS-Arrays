animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

//Na posição 1, apenas acrescenta o novo peixe 🐠.
animaisDoAquario.splice(1,0,'🐠')

//Retira o golfinho 🐬, o tubarão 🦈 e acrescenta o segundo peixe 🐟
animaisDoAquario.splice(3,2,'🐟')

// Esperado: [ '🐋', '🐠', '🐙', '🐟' ]
console.log(animaisDoAquario)