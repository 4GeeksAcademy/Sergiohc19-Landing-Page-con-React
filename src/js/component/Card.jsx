import React from "react";

const Card = () => {
  return (


    <div className="col-sm-12 col-md-6 col-lg-5 col-xl-3 col-xxl-3 p-4 d-flex justify-content-center">
      <div className="card border-0 p-2" style={{ width: "20rem" }}>
        <div className="image-container img-fluid object-fit-cover rounded-2" style={{ with: "500px", height: "300px" }}>
          <img src="https://th.bing.com/th/id/OIG3.o8heCbcv8NF_ldVioQnJ?pid=ImgGn" className="Frontimg card-img-top img-fluid object-fit-cover rounded-2" alt="..." />
          <img src="https://th.bing.com/th/id/OIG4.dbx0B996N2tq9JTnPgSL?pid=ImgGn" className="Backimg  card-img-top img-fluid object-fit-cover rounded-2" alt="..." />
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Find out More!</a>
        </div>
      </div>
    </div>


  );
};
export default Card;