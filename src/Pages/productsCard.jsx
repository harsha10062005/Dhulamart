import "../css/products.css";
import { Loader } from "../Loaders/loader";
import { useNavigate } from "react-router-dom";

export const ProductsCards = ({
  products,
  page,
  setPage,
  totalPages,
  load,
}) => {

  const navigate = useNavigate()
  
  return (
    <>
      {load ? (<Loader />
      ) : (
        <>
          <div className="products-container mt-4">
            <div className="row">
              {products.map((item) => (
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={item.id}>
                  <div className="card h-100">
                    <img
                      src={item.thumbnail}
                      className="card-img-top"
                      alt={item.title}
                    />

                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>

                      <p className="card-text">{item.description}</p>

                      <h5 className="text-success">${item.price}</h5>

                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => navigate(`/products/${item.id}`)}
                      >
                        View Product
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                className={page === index + 1 ? "active" : ""}
                onClick={() => setPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </>
  );
};