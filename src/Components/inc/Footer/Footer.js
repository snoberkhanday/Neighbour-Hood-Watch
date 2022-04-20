const Footer = () => {
  return (
    <>
      <div>
        <footer className="footer--section">
          {/* Footer Widgets Start */}
          <div
            className="footer--widgets pt--50"
            style={{ background: "#4b409a", color: "white" }}
          >
            <div className="container">
              <div className="row AdjustRow">
                <div className="col-md-3 col-xs-6 col-xxs-12">
                  {/* Widget Start */}
                  <div className="widget">
                    <h2
                      className="h4 fw--700 widget--title"
                      style={{ color: "white" }}
                    >
                      About Us
                    </h2>
                    <div
                      style={{ fontSize: "12px", lineHeight: "22px" }}
                      className="text--widget"
                    >
                      <p>
                        Ipsum is simply dummy text of the printing indusLorem
                        Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even.
                      </p>
                    </div>
                    {/* Text Widget End */}
                  </div>
                  {/* Widget End */}
                </div>
                <div className="col-md-3 col-xs-6 col-xxs-12 pb--60">
                  {/* Widget Start */}
                  <div className="widget">
                    <h2
                      className="h4 fw--700 widget--title"
                      style={{ color: "white" }}
                    >
                      Recent Post
                    </h2>
                    {/* Recent Posts Widget Start */}
                    <div className="recent-posts--widget">
                      <ul
                        className="nav"
                        style={{ fontSize: "12px", lineHeight: "22px" }}
                      >
                        <li>
                          <p className="date fw--300">
                            <a href="#">
                              <i className="fa mr--8 fa-file-text-o" />
                              01 Aug 2019
                            </a>
                          </p>
                          <p className="title fw--700">
                            <a href="blog-details.html">
                              I look at you and see the rest of my life in front
                            </a>
                          </p>
                        </li>
                        <li>
                          <p className="date fw--300">
                            <a href="#">
                              <i className="fa mr--8 fa-file-text-o" />
                              01 Aug 2019
                            </a>
                          </p>
                          <p className="title fw--700">
                            <a href="blog-details.html">
                              If I know what love is, it is because of you
                            </a>
                          </p>
                        </li>
                        <li>
                          <p className="date fw--300">
                            <a href="#">
                              <i className="fa mr--8 fa-file-text-o" />
                              01 Aug 2019
                            </a>
                          </p>
                          <p className="title fw--700">
                            <a href="blog-details.html">
                              At the touch of love everyone becomes a poet
                            </a>
                          </p>
                        </li>
                      </ul>
                    </div>
                    {/* Recent Posts Widget End */}
                  </div>
                </div>
                <div className="col-md-3 col-xs-6 col-xxs-12 pb--60">
                  {/* Widget Start */}
                  <div className="widget">
                    <h2
                      className="h4 fw--700 widget--title"
                      style={{ color: "white" }}
                    >
                      Navigation Links
                    </h2>
                    {/* Nav Widget Start */}
                    <div className="links--widget">
                      <ul
                        style={{ fontSize: "12px", lineHeight: "22px" }}
                        className="nav"
                      >
                        <li>
                          <a href="#">Home</a>
                        </li>
                        <li>
                          <a href="#">About Us</a>
                        </li>
                        <li>
                          <a href="#">About Us</a>
                        </li>
                        <li>
                          <a href="#">News &amp; Links</a>
                        </li>
                        <li>
                          <a href="#">Local Contacts</a>
                        </li>
                        <li>
                          <a href="#">Blog</a>
                        </li>
                        <li>
                          <a href="#">Contact Us</a>
                        </li>
                      </ul>
                    </div>
                    {/* Nav Widget End */}
                  </div>
                  {/* Widget End */}
                </div>
                <div className="col-md-3 col-xs-6 col-xxs-12 pb--60">
                  {/* Widget Start */}
                  <div className="widget">
                    <h2
                      className="h4 fw--700 widget--title"
                      style={{ color: "white" }}
                    >
                      Contact Us
                    </h2>
                    {/* Links Widget Start */}
                    <div className="links--widget">
                      <ul
                        style={{ fontSize: "12px", lineHeight: "22px" }}
                        className="nav"
                      >
                        <li>
                          <a href="#">Address 1: Address 1</a>
                        </li>
                        <li>
                          <a href="#">Address 2: Address 2</a>
                        </li>
                        <li>
                          <a href="#">Contact 1: Contact 1</a>
                        </li>
                        <li>
                          <a href="#">Contact 2: Contact 2</a>
                        </li>
                        <li>
                          <a href="#">Phone Number: (+91) 9541619871</a>
                        </li>
                        <li>
                          <a href="#">Phone Number 2: (+91) 9541619871</a>
                        </li>
                        <li>
                          <a href="#">Email Address: snober@gmail.com</a>
                        </li>
                      </ul>
                    </div>
                    {/* Links Widget End */}
                  </div>
                  {/* Widget End */}
                </div>
              </div>
            </div>
          </div>
          <div
            className="footer--copyright pt--30 pb--30"
            style={{ background: "#5b4ebb", color: "white" }}
          >
            <div className="container">
              <div className="text fw--500 fs--14 text-center">
                <p>
                  Copyright © 2022. All Rights Reserved. Designed by Snober
                  khanday
                </p>
              </div>
            </div>
          </div>
        </footer>
        <div id="backToTop">
          <a href="#" className="btn">
            <i className="fa fa-caret-up" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
