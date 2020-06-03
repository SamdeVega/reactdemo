export const average = (scores) => totalScore(scores) / scores.length

const totalScore = (scores) => scores.reduce((score, count) => score + count)
