import React from 'react'
import LinkedIn from "../Components/Assests/LinkedIn_Icon.png"
import GitHub from "../Components/Assests/Github_Icon.png"

const About = () => {
  return (
    <div className="container">
      <div className="container m-5">
        <h4>Developed By : </h4>
        <div className="row mt-5">
          <div className="col-md-4 p-3">
            <div class="card" style={{ width: "18rem" }}>
              <div class="card-body">
                <h5 class="card-title">M. Midhun Naga Sai</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">
                  MRUH B.Tech CSE
                </h6>
                <p class="card-text">Java | Android | Jetpack Compose | DSA</p>
                <a
                  href="https://www.linkedin.com/in/midhunnagasai/"
                  class="card-link"
                >
                  <img src={LinkedIn} width="60" />
                </a>
                <a href="https://github.com/Midhun2823" class="card-link">
                  <img src={GitHub} width="100" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-3">
            <div class="card" style={{ width: "18rem" }}>
              <div class="card-body">
                <h5 class="card-title">R. Muralidhar Reddy</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">
                  MRUH B.Tech CSE
                </h6>
                <p class="card-text">Python | Java | ML | DSA | MERN | HTML</p>
                <a
                  href="https://www.linkedin.com/in/muralidhar-reddy-remala-086304248/"
                  class="card-link"
                >
                  <img src={LinkedIn} width="60" />
                </a>
                <a href="" class="card-link">
                  <img src={GitHub} width="100" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-3">
            <div class="card" style={{ width: "18rem" }}>
              <div class="card-body">
                <h5 class="card-title">S. Madhav</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">
                  MRUH B.Tech CSE
                </h6>
                <p class="card-text">Java | Android | Python | HTML | CSS </p>
                <a href="" class="card-link">
                  <img src={LinkedIn} width="60" />
                </a>
                <a href="" class="card-link">
                  <img src={GitHub} width="100" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-3">
            <div class="card" style={{ width: "18rem" }}>
              <div class="card-body">
                <h5 class="card-title">N. Ajay</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">
                  MRUH B.Tech CSE
                </h6>
                <p class="card-text">
                  Java | PowerBI | Jetpack Compose | Python
                </p>
                <a href="" class="card-link">
                  <img src={LinkedIn} width="60" />
                </a>
                <a href="" class="card-link">
                  <img src={GitHub} width="100" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-3">
            <div class="card" style={{ width: "18rem" }}>
              <div class="card-body">
                <h5 class="card-title">S. Murali Krishna</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">
                  MRUH B.Tech CSE
                </h6>
                <p class="card-text">Java | Android | HTML | CSS | Python</p>
                <a
                  href="https://www.linkedin.com/in/murali-krishna-928629255/"
                  class="card-link"
                >
                  <img src={LinkedIn} width="60" />
                </a>
                <a href="" class="card-link">
                  <img src={GitHub} width="100" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container m-5">
          <h4>Under Guidance Of :</h4>
          <div className="row mt-5">
            <div className="col-md-4 p-3">
              <div class="card" style={{ width: "18rem" }}>
                <div class="card-body">
                  <h5 class="card-title">Adgaonker Shashank Sir</h5>

                  <a
                    href="https://www.linkedin.com/in/androidshashank/"
                    class="card-link"
                  >
                    <img src={LinkedIn} width="40" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 p-3"></div>
            <div className="col-md-4 p-3"></div>
            <div className="col-md-12 p-3"></div>

            <div className="col-md-4 p-3">
              <div class="card" style={{ width: "18rem" }}>
                <div class="card-body">
                  <h5 class="card-title">Dr. M. Santhosh Kumar</h5>
                  <h6 class="card-subtitle mb-2 text-body-secondary">
                    MRUH Professor
                  </h6>

                  {/* <a href="" class="card-link">
                    <img src={LinkedIn} width="60" />
                  </a>
                  <a href="" class="card-link">
                    <img src={GitHub} width="100" />
                  </a> */}
                </div>
              </div>
            </div>
            <div className="col-md-4 p-3">
              <div class="card" style={{ width: "18rem" }}>
                <div class="card-body">
                  <h5 class="card-title">Dr. Raviteja Kocherla</h5>
                  <h6 class="card-subtitle mb-2 text-body-secondary">
                    MRUH Professor
                  </h6>

                  {/* <a href="" class="card-link">
                    <img src={LinkedIn} width="60" />
                  </a>
                  <a href="" class="card-link">
                    <img src={GitHub} width="100" />
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About
