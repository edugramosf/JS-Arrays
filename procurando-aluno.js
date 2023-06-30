const alunos = ['João', 'Juliana', 'Caio', 'Ana']
const medias = [10, 8, 7.5, 9]

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
    if(listaDeAlunosEMedias[0].includes(aluno)){
   
        const [alunos, medias] = listaDeAlunosEMedias

        const indice = alunos.indexOf(aluno);

        const mediaDoAluno = medias[indice];

        console.log(`A média de ${aluno} é ${mediaDoAluno}.`);
    } else {
        console.log(`Aluno não encontrado!`);
    }
}

exibeNomeENota("João");