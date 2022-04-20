import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import Slider1 from "../../assets/img/banner-img/home-version-1/slider-bg-01.jpg";
import Slider2 from "../../assets/img/banner-img/home-version-1/slider-bg-02.jpg";
import Slider3 from "../../assets/img/banner-img/home-version-1/slider-bg-03.jpg";

const Banner = () => {
  return (
    <section className="banner--section">
      <div>
        <OwlCarousel
          autoPlay={true}
          autoplayTimeout={5000}
          items={3}
          loop
          className="owl-theme"
          autoplay={true}
          margin={50}
        >
          <div
            className="banner--item"
            data-bg-img={Slider1}
            data-overlay="0.75"
          >
            <div className="vc--parent">
              <div className="vc--child">
                <div className="container">
                  <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                      {/* Banner Content Start */}
                      <div className="banner--content pt--70 pb--80 text-center">
                        <div className="title">
                          <h1 className="h1 text-lightgray">
                            Neighbourhood Watch Safer and Stronger Communities.
                          </h1>
                        </div>
                        <div className="sub-title">
                          <h2 className="h2 text-lightgray">
                            Connect, Share &amp; Engage
                          </h2>
                        </div>
                        <div className="desc text-gray fs--16">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries.
                          </p>
                        </div>
                        <div className="action text-uppercase">
                          <a href="#" className="btn btn-white">
                            Learn More
                          </a>
                          <a href="#" className="btn btn-primary">
                            See Members
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="banner--item"
            data-bg-img={Slider2}
            data-overlay="0.75"
          >
            <div className="vc--parent">
              <div className="vc--child">
                <div className="container">
                  <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                      {/* Banner Content Start */}
                      <div className="banner--content pt--70 pb--80 text-center">
                        <div className="title">
                          <h1 className="h1 text-lightgray">
                            Getting Started with Neighbourhood Watch
                          </h1>
                        </div>
                        <div className="sub-title">
                          <h2 className="h2 text-lightgray">
                            Connect, Share &amp; Engage
                          </h2>
                        </div>
                        <div className="desc text-gray fs--16">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries.
                          </p>
                        </div>
                        <div className="action text-uppercase">
                          <a href="#" className="btn btn-white">
                            Learn More
                          </a>
                          <a href="#" className="btn btn-primary">
                            See Members
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="banner--item"
            data-bg-img={Slider3}
            data-overlay="0.75"
          >
            <div className="vc--parent">
              <div className="vc--child">
                <div className="container">
                  <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                      {/* Banner Content Start */}
                      <div className="banner--content pt--70 pb--80 text-center">
                        <div className="title">
                          <h1 className="h1 text-lightgray">
                            Know News and Events About Neighborhood Watch
                          </h1>
                        </div>
                        <div className="sub-title">
                          <h2 className="h2 text-lightgray">
                            Connect, Share &amp; Engage
                          </h2>
                        </div>
                        <div className="desc text-gray fs--16">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries.
                          </p>
                        </div>
                        <div className="action text-uppercase">
                          <a href="#" className="btn btn-white">
                            Learn More
                          </a>
                          <a href="#" className="btn btn-primary">
                            See Members
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Banner Item End */}
        </OwlCarousel>
      </div>
      {/* Banner Slider End */}
    </section>
  );
};

export default Banner;
