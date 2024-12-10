import {useState} from "react";
export default function FilterSection({handleFilter}){
    const [filter, setFilter] = useState({
        minPrice: 0,
        maxPrice: 0
    });
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);
    function handleFiltrado(){
        setFilter({minPrice: min, maxPrice: max});
        handleFilter(filter);
    }
    return(
        <section id="filter-form" className="container py-4">
            <h2 className="mb-3">Filter by Price</h2>
            <div className="row">
              <div className="col-md-4 mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="filter-min-price"
                  name="filter-min-price"
                  placeholder="Minimum Price"
                  value={min}
                  onChange={(e) => setMin(e.target.value)}
                />
              </div>
              <div className="col-md-4 mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="filter-price"
                  name="filter-price"
                  placeholder="Maximum Price"
                  value={max}
                  onChange={(e) => setMax(e.target.value)}
                />
              </div>
              <div className="col-md-4">
                <button type="button" id="btn-filter" className="btn btn-primary w-100" onClick={handleFiltrado}>
                  Filter
                </button>
              </div>
            </div>
        </section>
    )
}