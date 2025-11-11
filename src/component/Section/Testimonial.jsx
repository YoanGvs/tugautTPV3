import React from "react";

const Testimonial = () => {
  return (
    <section>
      <div className="container">
        <div className="text-center mb-5">
          <p className="semi-bold font__size--14 text__14-1024 color__orange text-uppercase">
            testimoni
          </p>
          <h3 className="bold font__size--58 text__50-1024 text__50-sm text__50-xs text-uppercase mb-4">
            Check Our Clients Review
          </h3>
          <p className="normal font__size--16 color__gray-1 roboto">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequat duis <br className="d-none d-md-block" /> enim velit mollit.
            Exercitation veniam consequat sunt nostrud amet.
          </p>
        </div>

        <div className="row justify-content-center mb-5">
          <div className="col-xl-11">
            <div className="row">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <div className="wrapper__card-testimonial">
                  <div className="d-flex align-items-start flex-wrap flex-sm-nowrap">
                    <img src="./../images/Rectangle 2.png" className="img" alt="" />
                    <div className="ms-sm-4 mt-4 mt-sm-0">
                      <h5 className="emdium font__size--20 text__20-1024 text-uppercase mb-0">
                        Arlene Mccoy
                      </h5>
                      <p className="normal font__size--12 text__12-1024 color__gray-1 roboto mb-3">
                        -sm@b mb-1rooklysim
                      </p>

                      <p className="normal font__size--16 color__gray-1 roboto mb-0">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        Velit officia consequat duis enim velit mollit. Exercitation veniam
                        consequat sunt nostrud amet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="wrapper__card-testimonial">
                  <div className="d-flex align-items-start flex-wrap flex-sm-nowrap">
                    <img src="./../images/Rectangle 2 (1).png" className="img" alt="" />
                    <div className="ms-sm-4 mt-4 mt-sm-0">
                      <h5 className="emdium font__size--20 text__20-1024 text-uppercase mb-0">
                        maroon 3
                      </h5>
                      <p className="normal font__size--12 text__12-1024 color__gray-1 roboto mb-sm-3 mb-1">
                        @marmar
                      </p>

                      <p className="normal font__size--16 color__gray-1 roboto mb-0">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        Velit officia consequat duis enim velit mollit. Exercitation veniam
                        consequat sunt nostrud amet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="wrapper__brand-testimonial d-flex flex-wrap flex-lg-nowrap align-items-center justify-content-lg-between justify-content-center">
              <img src="./../images/8.png" alt="" />
              <img src="./../images/1.png" alt="" />
              <img src="./../images/6.png" alt="" />
              <img src="./../images/7.png" alt="" />
              <img src="./../images/8.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
