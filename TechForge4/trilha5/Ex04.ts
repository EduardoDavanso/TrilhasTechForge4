// 4. Sistema de Votação
// Crie uma classe abstrata VoteSystem que gerencie votos em uma competição. Ela deve ter métodos abstratos voteFor(candidate: string): void e getResults(): object.

// Crie duas subclasses: Election e Poll.
// Election deve permitir adicionar votos para um candidato específico e retornar o total de votos por candidato em um objeto.
//Poll deve retornar uma lista dos candidatos em ordem de votos (do mais votado para o menos votado).

// Classe abstrata VoteSystem
abstract class VoteSystem {
    abstract voteFor(candidate: string): void;
    abstract getResults(): object;
}

// Subclasse Election
class Election extends VoteSystem {
    private votes: Record<string, number> = {}; 

    voteFor(candidate: string): void {
        if (this.votes[candidate]) {
            this.votes[candidate] += 1; 
        } else {
            this.votes[candidate] = 1; 
        }
    }

    getResults(): object {
        return this.votes; 
    }
}

// Subclasse Poll
class Poll extends VoteSystem {
    private votes: Record<string, number> = {}; 

    voteFor(candidate: string): void {
        if (this.votes[candidate]) {
            this.votes[candidate] += 1; 
        } else {
            this.votes[candidate] = 1; 
        }
    }

    getResults(): object {
    
        const sortedCandidates = Object.entries(this.votes).sort((a, b) => b[1] - a[1]);
        return sortedCandidates.map(([candidate, votes]) => ({ candidate, votes })); 
    }
}

const election = new Election();
election.voteFor("Eduardo");
election.voteFor("João");
election.voteFor("Pedro");

console.log("Resultados da Eleição:");
console.log(election.getResults());

const poll = new Poll();
poll.voteFor("Eduardo");
poll.voteFor("João");
poll.voteFor("Eduardo");
poll.voteFor("Pedro");
poll.voteFor("Eduardo");

console.log("Resultados da Pesquisa:");
console.log(poll.getResults());