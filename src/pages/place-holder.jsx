function PlaceHolder(heading) {
  return (
    <div className="container">
      <h1>{heading ?? "PlaceHolder"}</h1>
    </div>
  );
}

export default PlaceHolder;
