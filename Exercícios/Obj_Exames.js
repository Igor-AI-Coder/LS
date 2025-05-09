class Exams {
    /**O this permite que os métodos acessem e modifiquem as propriedades do objeto
     * ANOTAÇÃO PARA GUARDAR NA MENTE!!!
     */
    constructor() {
        this.questoes = [];
    }

    addQuestao(numero, peso, respostaCorreta) {
        this.questoes.push({numero, peso, respostaCorreta});
    }

    calcularNota(respostasAluno) {
        let total = 0;
        let certas = 0;

        for (const q of this.questoes) {
            total += q.peso;
            if (respostasAluno[q.numero] === q.respostaCorreta) {
                certas += q.peso;
            }
        }
        return (certas / total) * 10;
    }
}

const prova = new Exams();

prova.addQuestao(2, 2, 'b');
prova.addQuestao(3, 2, 'a');
prova.addQuestao(4, 2, 'c');
prova.addQuestao(5, 2, 'd');
prova.addQuestao(1, 2, 'a');

const respostasAluno = {
    1: 'a',
    2: 'b',
    3: 'b',
    4: 'b',
    5: 'b'
};

/**toFixed retorna a string em um número em um ponto denominado 
 * ANOTAÇÃO PARA GUARDAR NA MENTE!!!
*/
const nota = prova.calcularNota(respostasAluno);
console.log(`Nota: ${nota.toFixed(1)}`);