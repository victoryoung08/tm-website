export default function Card({ content, position }) {
  const cs = content;
  return (
    <>
      {position === "left" ? (
        <div>
          <div>
            <h2>{cs.name}</h2>
            <p>{cs.resultsSnippet}</p>
          </div>
          <div>
            <img src="https://via.placeholder.com/300" alt="placeholder" />
          </div>
        </div>
      ) : (
        <div>
          <div>
            <img src="https://via.placeholder.com/300" alt="placeholder" />
          </div>
          <div>
            <h2>{cs.name}</h2>
            <p>{cs.resultsSnippet}</p>
          </div>
        </div>
      )}
    </>
  );
}
