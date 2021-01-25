class Player {
    constructor () {
        this.answers = [];
        this.totalAnswers = 0;
        this.points = 0;
    }

    addPlayerAnswer(answer = null)
    {
        this.answers.push({
            id: answer.id,
            correct_answer: answer.correct,
            player_answer: answer.name,
            computer_answer: answer.name,
            img: `../static/assets/img/modes/people/${answer.id}.jpg`,
            is_correct: answer.isCorrect
        });

        this.totalAnswers++;
    }

    addPlayerPoint()
    {
        this.points++;
    }

    getPlayerData(mode)
    {
        const data = {
            game_type: mode,
            player_total_points: this.points,
            player_total_answers: this.totalAnswers,
            answers: this.answers
        };

        console.log(data);

        return data;
    }
}

export default Player;