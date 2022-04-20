import Post1 from "../../assets/img/posts-img/post-item-01.jpg";

const Community = () => {
  return (
    <>
      <section className="section  pt--70 pb--20">
        <div className="container">
          <div className="row">
            {/* Main Content Start */}
            <div
              className="main--content col-md-12 pb--30"
              data-trigger="stickyScroll"
            >
              <div className="main--content-inner">
                <div className="related--posts">
                  <h2 className="h2 fw--600 pb--30 text-center">
                    Community News &amp; Events{" "}
                  </h2>
                  <div className="row AdjustRow">
                    <div className="col-md-4 pb--30">
                      {/* Post Item Start */}
                      <div className="post--item">
                        {/* Post Image Start */}
                        <div className="post--img">
                          <a href="blog-details.html">
                            <img src={Post1} alt="" />
                          </a>
                        </div>
                        <div className="post--info bg-default">
                          {/* Post Meta Start */}
                          <div className="post--title mt--10">
                            <h3
                              style={{
                                fontSize: "14px",
                                lineHeight: "24px",
                              }}
                              className="h6"
                            >
                              <a href="#" className="btn-link">
                                This Is the Place I Was Telling You About
                              </a>
                            </h3>
                          </div>
                          <div className="post--meta">
                            <ul className="nav">
                              <li>
                                <a href="#">
                                  <i className="mr--8 fa fa-calendar-o" />
                                  <span>01 Aug 2019</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* Post Content Start */}
                          <div className="post--content text-darker mt--10">
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley.
                            </p>
                          </div>
                          {/* Post Content End */}
                          {/* Post Action Start */}
                          <div className="post--action text-darkest mt--8">
                            <a href="#" className="btn-link">
                              Continue Reading
                              <i className="ml--10 text-primary fa fa-caret-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 pb--30">
                      {/* Post Item Start */}
                      <div className="post--item">
                        {/* Post Image Start */}
                        <div className="post--img">
                          <a href="blog-details.html">
                            <img src={Post1} alt="" />
                          </a>
                        </div>
                        <div className="post--info bg-default">
                          {/* Post Meta Start */}
                          <div className="post--title mt--10">
                            <h3
                              style={{
                                fontSize: "14px",
                                lineHeight: "24px",
                              }}
                              className="h6"
                            >
                              <a href="#" className="btn-link">
                                This Is the Place I Was Telling You About
                              </a>
                            </h3>
                          </div>
                          <div className="post--meta">
                            <ul className="nav">
                              <li>
                                <a href="#">
                                  <i className="mr--8 fa fa-calendar-o" />
                                  <span>01 Aug 2019</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* Post Content Start */}
                          <div className="post--content text-darker mt--10">
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley.
                            </p>
                          </div>
                          {/* Post Content End */}
                          {/* Post Action Start */}
                          <div className="post--action text-darkest mt--8">
                            <a href="#" className="btn-link">
                              Continue Reading
                              <i className="ml--10 text-primary fa fa-caret-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 pb--30">
                      {/* Post Item Start */}
                      <div className="post--item">
                        {/* Post Image Start */}
                        <div className="post--img">
                          <a href="blog-details.html">
                            <img src={Post1} alt="" />
                          </a>
                        </div>
                        <div className="post--info bg-default">
                          {/* Post Meta Start */}
                          <div className="post--title mt--10">
                            <h3
                              style={{
                                fontSize: "14px",
                                lineHeight: "24px",
                              }}
                              className="h6"
                            >
                              <a href="#" className="btn-link">
                                This Is the Place I Was Telling You About
                              </a>
                            </h3>
                          </div>
                          <div className="post--meta">
                            <ul className="nav">
                              <li>
                                <a href="#">
                                  <i className="mr--8 fa fa-calendar-o" />
                                  <span>01 Aug 2019</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="post--content text-darker mt--10">
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley.
                            </p>
                          </div>
                          <div className="post--action text-darkest mt--8">
                            <a href="#" className="btn-link">
                              Continue Reading
                              <i className="ml--10 text-primary fa fa-caret-right" />
                            </a>
                          </div>
                        </div>
                      </div>
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

export default Community;
