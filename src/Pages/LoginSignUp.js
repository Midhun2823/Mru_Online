import React from "react";

const LoginSignUp = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 text-center bg-secondary my-4 py-4 bg-opacity-25">
          <h1 className="m-3">Sign Up</h1>
          <br></br>
          <div className="container px-5">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                @
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="input-group mb-3">
              <input
                type="mail"
                class="form-control"
                placeholder="College Mail Id"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <span class="input-group-text" id="basic-addon2">
                @mallareddyuniversity.ac.in
              </span>
            </div>
            <div class="input-group mb-3">
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>

          <p> Already have an account? </p>
          <div className="d-flex ms-5">
            <input type="checkbox" className="p-5"/>
            <span className="m-2">Agree Terms a conditions</span>
          </div>
          <br></br>
          <button className="btn btn-outline-success px-5">Continue</button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
