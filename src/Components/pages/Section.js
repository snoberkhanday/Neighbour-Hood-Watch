import React from "react";
import How1 from "../../assets/img/how-it-works-img/01.jpg";
import How2 from "../../assets/img/how-it-works-img/02.jpg";
import How3 from "../../assets/img/how-it-works-img/03.jpg";
import How4 from "../../assets/img/how-it-works-img/04.jpg";
import Icon1 from "../../assets/img/how-it-works-img/icon-01.png";
import Icon2 from "../../assets/img/how-it-works-img/icon-02.png";
import Icon3 from "../../assets/img/how-it-works-img/icon-03.png";
import Icon4 from "../../assets/img/how-it-works-img/icon-04.png";

const Section = () => {
  return (
    <>
      <section className="section pt--70 pb--40">
        <div className="container">
          <div className="section--title pb--50 text-center">
            <div className="title">
              <h2 className="h2">How It Works?</h2>
            </div>
            <div className="sub-title">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has industry's.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-7 pb--40">
              <div
                className="row gutter--15 AdjustRow"
                data-scroll-reveal="group"
              >
                <div className="col-xs-4 pb--15">
                  <img src={How1} alt="" />
                </div>
                <div className="col-xs-4 pb--15">
                  <img src={How2} alt="" />
                </div>
                <div className="col-xs-4 pb--15">
                  <img src={How3} alt="" />
                </div>
                <div className="col-xs-12">
                  <img src={How4} alt="" />
                </div>
              </div>
            </div>

            <div className="col-md-5 pb--40">
              <div className="info--items" data-scroll-reveal="group">
                <div className="info--item clearfix">
                  <div className="icon">
                    <img src={Icon1} alt="" />
                  </div>
                  <div className="info">
                    <div className="title">
                      <h3 className="h4 fw--700">Create An Account</h3>
                    </div>
                    <div className="desc">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="info--item clearfix">
                  <div className="icon">
                    <img src={Icon2} alt="" />
                  </div>
                  <div className="info">
                    <div className="title">
                      <h3 className="h4 fw--700">
                        Join Community &amp; Add Groups
                      </h3>
                    </div>
                    <div className="desc">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="info--item clearfix">
                  <div className="icon">
                    <img src={Icon3} alt="" />
                  </div>
                  <div className="info">
                    <div className="title">
                      <h3 className="h4 fw--700">Start Discussion</h3>
                    </div>
                    <div className="desc">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="info--item clearfix">
                  <div className="icon">
                    <img src={Icon4} alt="" />
                  </div>
                  <div className="info">
                    <div className="title">
                      <h3 className="h4 fw--700">Share With Watch Members</h3>
                    </div>
                    <div className="desc">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
