import React from "react";

const Jumbotron = () => {
  return (

    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 p-4">
      <div className="jumbotron p-3">
        <h1 className="display-4 d-flex justify-content-start col-6">A Warm Welcome !</h1>
        <p className="d-flex justify-content-start col-12">It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <div className="pb-1">
          <button type="button" class="btn btn-primary d-flex justify-content-start">Primary</button>
        </div>
      </div>
    </div>

  );
};

export default Jumbotron;