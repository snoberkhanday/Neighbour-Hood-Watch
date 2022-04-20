import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import Group1 from "../../assets/img/group-img/01.jpg";

const Groups = () => {
  return (
    <>
      <section className="section bg-lighter pt--70 pb--70">
        <div className="container">
          {/* Box Nav Start */}
          <div className="box--nav clearfix">
            <h2 className="h2 fw--600 text-center">Most Popular Groups</h2>
          </div>
          <div className="tab-content">
            {/* Tab Pane Start */}
            <div className="tab-pane fade in active" id="boxItemsTab01">
              {/* Box Item Start */}
              <div>
                <OwlCarousel
                  autoPlay={true}
                  autoplayTimeout={5000}
                  items={3}
                  loop
                  className="owl-theme"
                  autoplay={true}
                  margin={8}
                  nav
                >
                  <div className="box--item text-center">
                    <a
                      href="group-home.html"
                      className="img"
                      data-overlay="0.1"
                    >
                      <img src={Group1} alt="" />
                    </a>
                    <div className="info">
                      <div className="icon fs--18 text-lightest bg-primary">
                        <i className="fa fa-user-secret" />
                      </div>
                      <div className="title">
                        <h2 className="h6">
                          <a href="group-home.html">Family 1</a>
                        </h2>
                      </div>
                      <div className="meta">
                        <p>
                          <i className="fa mr--8 fa-clock-o" />
                          Active 8 days ago
                        </p>
                        <p>
                          <i className="fa mr--8 fa-user-o" />
                          Public Group / 250+ Members
                        </p>
                      </div>
                      <div className="desc text-darker">
                        <p
                          style={{
                            fontSize: "12px",
                            lineHeight: "22px",
                            textAlign: "center",
                          }}
                        >
                          Lorem Ipsum is simply dummy text of the printing &amp;
                          typesetting.
                        </p>
                      </div>
                      <div className="action">
                        <a
                          style={{
                            fontSize: "12px",
                            cursor: "pointer",
                            lineHeight: "22px",
                          }}
                          href="group-home.html"
                        >
                          View Group
                          <i className="fa ml--10 fa-caret-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="box--item text-center">
                    <a
                      href="group-home.html"
                      className="img"
                      data-overlay="0.1"
                    >
                      <img src={Group1} alt="" />
                    </a>
                    <div className="info">
                      <div className="icon fs--18 text-lightest bg-primary">
                        <i className="fa fa-user-secret" />
                      </div>
                      <div className="title">
                        <h2 className="h6">
                          <a href="group-home.html">Family 2</a>
                        </h2>
                      </div>
                      <div className="meta">
                        <p>
                          <i className="fa mr--8 fa-clock-o" />
                          Active 8 days ago
                        </p>
                        <p>
                          <i className="fa mr--8 fa-user-o" />
                          Public Group / 250+ Members
                        </p>
                      </div>
                      <div className="desc text-darker">
                        <p
                          style={{
                            fontSize: "12px",
                            lineHeight: "22px",
                          }}
                        >
                          Lorem Ipsum is simply dummy text of the printing &amp;
                          typesetting.
                        </p>
                      </div>
                      <div className="action">
                        <a
                          style={{
                            fontSize: "12px",
                            cursor: "pointer",
                            lineHeight: "22px",
                          }}
                          href="group-home.html"
                        >
                          View Group
                          <i className="fa ml--10 fa-caret-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="box--item text-center">
                    <a
                      href="group-home.html"
                      className="img"
                      data-overlay="0.1"
                    >
                      <img src={Group1} alt="" />
                    </a>
                    <div className="info">
                      <div className="icon fs--18 text-lightest bg-primary">
                        <i className="fa fa-user-secret" />
                      </div>
                      <div className="title">
                        <h2 className="h6">
                          <a href="group-home.html">Family 3</a>
                        </h2>
                      </div>
                      <div className="meta">
                        <p>
                          <i className="fa mr--8 fa-clock-o" />
                          Active 8 days ago
                        </p>
                        <p>
                          <i className="fa mr--8 fa-user-o" />
                          Public Group / 250+ Members
                        </p>
                      </div>
                      <div className="desc text-darker">
                        <p style={{ fontSize: "12px", lineHeight: "22px" }}>
                          Lorem Ipsum is simply dummy text of the printing &amp;
                          typesetting.
                        </p>
                      </div>
                      <div className="action">
                        <a
                          style={{
                            fontSize: "12px",
                            cursor: "pointer",
                            lineHeight: "22px",
                          }}
                          href="group-home.html"
                        >
                          View Group
                          <i className="fa ml--10 fa-caret-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="box--item text-center">
                    <a
                      href="group-home.html"
                      className="img"
                      data-overlay="0.1"
                    >
                      <img src={Group1} alt="" />
                    </a>
                    <div className="info">
                      <div className="icon fs--18 text-lightest bg-primary">
                        <i className="fa fa-user-secret" />
                      </div>
                      <div className="title">
                        <h2 className="h6">
                          <a href="group-home.html">Family 4</a>
                        </h2>
                      </div>
                      <div className="meta">
                        <p>
                          <i className="fa mr--8 fa-clock-o" />
                          Active 8 days ago
                        </p>
                        <p>
                          <i className="fa mr--8 fa-user-o" />
                          Public Group / 250+ Members
                        </p>
                      </div>
                      <div className="desc text-darker">
                        <p
                          style={{
                            fontSize: "12px",
                            lineHeight: "22px",
                          }}
                        >
                          Lorem Ipsum is simply dummy text of the printing &amp;
                          typesetting.
                        </p>
                      </div>
                      <div className="action">
                        <a
                          style={{
                            fontSize: "12px",
                            cursor: "pointer",
                            lineHeight: "22px",
                          }}
                          href="group-home.html"
                        >
                          View Group
                          <i className="fa ml--10 fa-caret-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Box Item End */}
                  {/* Box Item Start */}
                  <div className="box--item text-center">
                    <a
                      href="group-home.html"
                      className="img"
                      data-overlay="0.1"
                    >
                      <img src={Group1} alt="" />
                    </a>
                    <div className="info">
                      <div className="icon fs--18 text-lightest bg-primary">
                        <i className="fa fa-user-secret" />
                      </div>
                      <div className="title">
                        <h2 className="h6">
                          <a href="group-home.html">Family 5</a>
                        </h2>
                      </div>
                      <div className="meta">
                        <p>
                          <i className="fa mr--8 fa-clock-o" />
                          Active 8 days ago
                        </p>
                        <p>
                          <i className="fa mr--8 fa-user-o" />
                          Public Group / 250+ Members
                        </p>
                      </div>
                      <div className="desc text-darker">
                        <p
                          style={{
                            fontSize: "12px",
                            lineHeight: "22px",
                          }}
                        >
                          Lorem Ipsum is simply dummy text of the printing &amp;
                          typesetting.
                        </p>
                      </div>
                      <div className="action">
                        <a
                          style={{
                            fontSize: "12px",
                            cursor: "pointer",
                            lineHeight: "22px",
                          }}
                          href="group-home.html"
                        >
                          View Group
                          <i className="fa ml--10 fa-caret-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
              <div className="box--controls text-center">
                <a
                  href="#"
                  className="btn fs--16 btn-default"
                  data-action="prev"
                >
                  <i className="fa fa-caret-left" />
                </a>
                <a
                  href="groups.html"
                  className="btn ff--primary fw--500 btn-default"
                >
                  View All Groups
                </a>
                <a
                  href="#"
                  className="btn fs--16 btn-default"
                  data-action="next"
                >
                  <i className="fa fa-caret-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Groups;
