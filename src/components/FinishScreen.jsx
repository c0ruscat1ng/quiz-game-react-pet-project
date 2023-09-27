function FinishScreen({ dispatch, points, maxPoints, highscore }) {
  const resultInPercentage = Math.ceil((points / maxPoints) * 100);

  let emoji;

  if (resultInPercentage === 100) emoji = "🥇";
  if (resultInPercentage >= 80 && resultInPercentage < 100) emoji = "🥈";
  if (resultInPercentage >= 50 && resultInPercentage < 80) emoji = "🥉";
  if (resultInPercentage > 0 && resultInPercentage < 50) emoji = "🤨";
  if (resultInPercentage === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>You scored <strong>{points}</strong> out of{" "}
        {maxPoints} ({resultInPercentage}%)
      </p>
      <p className="highscore">(Highscore: {highscore})</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
}

export default FinishScreen;
