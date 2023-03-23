const PoemCard = ({ title, author }) => {
  return (
    <div>
      <h2>{title}</h2>
      <small>{author}</small>
    </div>
  );
};

export default PoemCard;
