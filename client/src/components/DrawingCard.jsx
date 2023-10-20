function DrawingCard({ drawing }) {
  return (
    <div className="col">
      <div className="card w-100 h-100">
        <img src={drawing.image} className="ratio ratio-4x3 object-fit-none" />
        <div className="card-body mt-50">
          <h5 className="card-title">{drawing.name}</h5>
          <p className="card-text">{drawing.author}</p>
        </div>
      </div>
    </div>
  );
}

export default DrawingCard;
