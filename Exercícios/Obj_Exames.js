class Answer {
    constructor(value) {
        this.value = value;
    }

    isCorrect(other) {
        return other instanceof Answer
            ? this.value === other.value
            : this.value === other;
    }
}
class Exam {
    constructor(answer, weight) {
        this.answer = answer;
        this.weight = weight;  
        this.exams = [];
    }

    add(exam) {
        if (!(exam instanceof Answer)) {
            throw new Error("O argumento deve ser uma instância de Answer.");
        }
        this.exams.push(exam);
    }

    avg() {
        if (this.exams.length === 0) return 0;
        const total = this.exams.length * this.weight;
        const correct = this.exams.filter(e => this.answer.isCorrect(e)).length * this.weight;
        return (correct / total) * 10;
    }

    _scores() {
        return this.exams.map(e => this.answer.isCorrect(e) ? this.weight : 0);
    }

    min(count = this.exams.length) {
        return this._scores().sort((a, b) => a - b).slice(0, count);
    }

    max(count = this.exams.length) {
        return this._scores().sort((a, b) => b - a).slice(0, count);
    }

    lt(limit) {
        return this._scores().filter(score => score < limit);
    }

    gt(limit) {
        return this._scores().filter(score => score > limit);
    }
}

const questoes = [
    new Exam(new Answer('a'), 2),
    new Exam(new Answer('b'), 2),
    new Exam(new Answer('a'), 2),
    new Exam(new Answer('c'), 2),
    new Exam(new Answer('d'), 2)
];

const respostasAluno = ['a', 'b', 'b', 'b', 'b'];

for (let i = 0; i < questoes.length; i++) {
    questoes[i].add(new Answer(respostasAluno[i]));
}

let notaFinal = 0;
for (const q of questoes) {
    notaFinal += q.avg() * (q.weight / 10);
}
console.log(`Nota final: ${notaFinal.toFixed(1)}`); // Esperado: 4.0
