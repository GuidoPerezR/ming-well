function AudioBooks() {
  return (
    <div className="p-4">
      <div className="p-4">
        <div>
          <h2>AudioBooks Catalog</h2>
        </div>
      </div>
      <div class="container text-center">
        <div class="row">
          <div className="col">
            <div className="card w-100 h-100">
              <img
                src="audiobook1.jpg"
                className="ratio ratio-4x3 object-fit-none"
              />
              <div className="card-body mt-50">
                <h5 className="card-title">Ansiedad y Estres</h5>
                <p className="card-text">Christopher Paez</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card w-100 h-100">
              <img
                src="/audiobook2.jpg"
                className="ratio ratio-4x3 object-fit-none"
              />
              <div className="card-body mt-50">
                <h5 className="card-title">
                  Salud Mental y Medicina Psicologica
                </h5>
                <p className="card-text">Juan Ramon de la Fuente</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card w-100 h-100">
              <img src="audiobook3.jpg" alt="" />
              <div className="card-body mt-50">
                <h5 className="card-title">El Poder de las Palabras</h5>
                <p className="card-text">Mariano Sigman</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AudioBooks;
