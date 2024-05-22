import React from "react";

const Card = () => {
  return (

<div className="card  border-0 p-3 z-0 " style={{ width: "20rem"}}>
      <div className="image-container" style={{ width: "100%"}}>
        <img src="https://th.bing.com/th/id/OIG3.o8heCbcv8NF_ldVioQnJ?pid=ImgGn" className="Frontimg card-img-top img-fluid object-fit-cover rounded-4" alt="..."  />
        <img src="https://th.bing.com/th/id/OIG4.dbx0B996N2tq9JTnPgSL?pid=ImgGn" className="Backimg  card-img-top img-fluid object-fit-cover rounded-4" alt="..."  />
      </div>
      <div className="card-body text-center">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
  </div>
  );
};
export default Card;