const initials = document.getElementById ("initials");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore")

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const MAX_HIGH_SCORES = 22;

finalScore.innerText = mostRecentScore;

initials.addEventListener("storage",function(e) {
    saveScoreBtn.disabled = !initials.value;
});

saveHighScore = e => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: initials.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(22);

    localStorage.setItem("highScores", JSON.stringify(highScores));
};