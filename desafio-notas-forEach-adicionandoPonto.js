const notas = [10, 9.5, 8, 7, 6];

notas.forEach((nota) => {
  const notasAtualizadas = nota+1 >= 10 ? 10:nota+1;
  console.log(notasAtualizadas);
});


