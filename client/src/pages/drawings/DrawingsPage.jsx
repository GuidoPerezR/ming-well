import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getDrawings } from "../../api/drawings.api";
import DrawingCard from "../../components/DrawingCard";

function DrawingsPage() {
  const [drawings, setDrawings] = useState([]);

  useEffect(() => {
    const loadDrawings = async () => {
      const res = await getDrawings();
      setDrawings(res.data);
    };
    loadDrawings();
  }, []);

  return (
    <div>
      <div className="p-4">
        <div>
          <h2>Drawings Catalog</h2>
        </div>
        {/* <div className="text-center pt-1 mb-5 pb-1">
          <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3">
            <Link to="/create_drawing" className="link-dark">
              Create new
            </Link>
          </button>
        </div> */}
      </div>
      <div class="container text-center">
        <div class="row">
          {drawings.map((drawing) => (
            <DrawingCard key={drawing.id} drawing={drawing} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DrawingsPage;
