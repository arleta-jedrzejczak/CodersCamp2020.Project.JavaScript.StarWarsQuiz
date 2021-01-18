class Player {
    constructor () {
        this.answers = [];
        this.totalAnswers = 0;
        this.points = 0;
    }

    addPlayerAnswer(answer = null)
    {
        this.answer.push(answer);
        this.totalAnswers++;
    }

    addPlayerPoint()
    {
        this.points++;
    }

    getPlayerData()
    {
        const data = {
            totalPoints: this.points,
            totalAnswers: this.totalAnswers,
            answers: this.answers
        };

        return JSON.stringify(data);
    }
}

export default Player;