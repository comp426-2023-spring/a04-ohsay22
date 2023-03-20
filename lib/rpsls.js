export {rps, rpsls}

let outcomes = {
    rock: {
        rock: 'tie',
        paper: 'win',
        scissors: 'lose',
        lizard: 'lose',
        spock: 'win'
    },
    paper: {
        rock: 'lose',
        paper: 'tie',
        scissors: 'win',
        lizard: 'win',
        spock: 'lose'
    },
    scissors: {
        rock: 'win',
        paper: 'lose',
        scissors: 'tie',
        lizard: 'lose',
        spock: 'win'
    },
    lizard: {
        rock: 'win',
        paper: 'lose',
        scissors: 'win',
        lizard: 'tie',
        spock: 'lose'
    },
    spock: {
        rock: 'lose',
        paper: 'win',
        scissors: 'lose',
        lizard: 'win',
        spock: 'tie'
    }
}

function rps(shot) {
    let options = ["rock", "paper", "scissors"];
    let rand = Math.trunc(Math.random() * 3);
    let comp = options[rand];

    if (shot == null) { return { player : comp }; }

    shot = shot.toLowerCase();

    if (!(options.includes(shot))) {
        console.error(`${shot} is out of range.`);
        throw new RangeError();
    }

    return { player: shot,
             opponent: comp,
             result: outcomes[comp][shot] };
}

function rpsls(shot) {
    let options = ["rock", "paper", "scissors", "lizard", "spock"];
    let rand = Math.trunc(Math.random() * 5);
    let comp = options[rand];

    if (shot == null) { return { player : comp }; }

    shot = shot.toLowerCase();

    if (!(options.includes(shot))) {
        throw new RangeError();
    } else {
        return {
            player: shot,
            opponent: comp,
            result: outcomes[comp][shot]
        };
    }
}
