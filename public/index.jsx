const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const Switch = ReactRouterDOM.Switch;
const NavLink = ReactRouterDOM.NavLink;

class Home extends React.Component{
    render(){
        return <div className="list">
                  <div className="col-6-p">
                    <h1>Template feature</h1>
                    <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                  </div>
                  <div className="col-6-n">
                    <article className="blogpost clearfix">
                    <h3>Duis aute irure</h3>
                      <img src="img/ret1.jpg"/>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                      <NavLink to="/" className="button_more">incididunt...</NavLink>
                      </article>

                      <article className="blogpost clearfix">
                      <div className="last">
                      <h3>Duis aute irure</h3>
                        <img src="img/ret2.jpg"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                        <NavLink to="/" className="button_more">incididunt...</NavLink>
                        </div>
                        </article>
                  </div>
                </div>;
      }
}

class About extends React.Component{
    render(){
        return <div className="about-m">
          <h2>Ullamco laboris</h2>
          <div className="product">
            <ul className="table">
              <li className="column">
                <div className="price">
                  <h3>Fugiat nulla <span>voluptate</span></h3>
                  <a className="signup" href="#">Adipisicing</a>
                  <ul>
                    <li>Exercitation</li>
                    <li>Proident</li>
                    <li>Consequat</li>
                    <li>Occaecat</li>
                  </ul>
                </div>
              </li>
              <li className="column">
              <div className="price">
                <h3>Fugiat nulla <span>voluptate</span></h3>
                <a className="signup" href="#">Adipisicing</a>
                <ul>
                  <li>Exercitation</li>
                  <li>Proident</li>
                  <li>Consequat</li>
                  <li>Occaecat</li>
                </ul>
              </div>
              </li>
              <li className="column">
              <div className="price">
                <h3>Fugiat nulla <span>voluptate</span></h3>
                <a className="signup" href="#">Adipisicing</a>
                <ul>
                  <li>Exercitation</li>
                  <li>Proident</li>
                  <li>Consequat</li>
                  <li>Occaecat</li>
                </ul>
              </div>
              </li>
            </ul>
          </div>
        </div>;
    }
}

class Services extends React.Component{
    render(){
        return <div className="servicrs-m">
        <section className="col-3 clearfix">
          <div className="content clearfix">
            <article className="blogpost clearfix">

              <div id="over-block" className="post clearfix bords-1">
                <div className="img-v"></div>
                <h2>Flat Design</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam est. Mauris faucibus tellus ac auctor posuere.</p>
              </div>

              <div className="clear"></div>
            </article>
          </div>
        </section>

        <section className="col-3 clearfix">
          <div className="content clearfix">
            <article className="blogpost clearfix">

              <div id="over-block-s" className="post clearfix bords-2">
                <div className="img-s"></div>
                <h2>Professional</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam est. Mauris faucibus tellus ac auctor posuere.</p>
              </div>

              <div className="clear"></div>
            </article>
          </div>
        </section>

        <section className="col-3 clearfix">
          <div className="content clearfix">
            <article className="blogpost clearfix">

              <div id="over-block-p" className="post clearfix bords-3">
                <div className="img-p"></div>
                <h2>Enterprise</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam est. Mauris faucibus tellus ac auctor posuere.</p>
              </div>

              <div className="clear"></div>
            </article>
          </div>
        </section>
        </div>;
    }
}

class Portfolio extends React.Component{
    render(){
        return  <div className="portfolio">

        <h1>Recent Templates</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam est. Mauris faucibus tellus ac auctor posuere. </p>

        <div className="tabs">


          <div className="tabs__content  active">
            <div className="todo-side2-p">
                <ul>
                  <li><a className="example-image-link"  href="#" data-lightbox="example-set" data-title="Click the right half of the image to move forward."><img className="example-image" src="img/im1.jpg" alt="" /></a></li>
                  <li><a className="example-image-link"  href="#" data-lightbox="example-set" data-title="Click the right half of the image to move forward."><img className="example-image" src="img/im2.jpg" alt="" /></a></li>
                  <li><a className="example-image-link"  href="#" data-lightbox="example-set" data-title="Click the right half of the image to move forward."><img className="example-image" src="img/im3.jpg" alt="" /></a></li>
                </ul>
            </div>
            <div className="todo-side2-p">
                <ul>
                  <li><a className="example-image-link"  href="#" data-lightbox="example-set" data-title="Click the right half of the image to move forward."><img className="example-image" src="img/im4.jpg" alt="" /></a></li>
                  <li><a className="example-image-link"  href="#" data-lightbox="example-set" data-title="Click the right half of the image to move forward."><img className="example-image" src="img/im5.jpg" alt="" /></a></li>
                  <li><a className="example-image-link"  href="#" data-lightbox="example-set" data-title="Click the right half of the image to move forward."><img className="example-image" src="img/im6.jpg" alt="" /></a></li>

                </ul>
            </div>
          </div>

          <div className="tabs__content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
          </div>

          <div className="tabs__content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
          </div>

          <div className="tabs__content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
          </div>
        </div>

        </div>;
    }
}

class Contacts extends React.Component{
    render(){
        return  <div className="contact">
        <h3 className="hcontact">Nemo enim ipsam</h3>
        <form className="clearfix">
          <div className="half left clearfix">
            <input type="text" className="input-name" placeholder="Ratione"/>
            <input type="email" className="input-email" placeholder="Magnam"/>
            <input type="text" className="input-subject" placeholder="Numquam eius"/>
          </div>
          <div className="half right clearfix">
            <textarea name="message" type="text" className="input-message" placeholder="Quis autem"></textarea>
          </div>
          <input type="submit" value="Reprehenderit " className="input-submit"/>
        </form>
        </div>;
    }
}

class NotFound extends React.Component{
    render(){
        return <h2>Resource is not found</h2>;
    }
}

class Nav extends React.Component{
    render(){
        return <div className="sticky">
          <nav>
            <ul>
              <li><NavLink exact to="/" activeClassName="active" className="name">Houme</NavLink></li>
              <li><NavLink to="/about" activeClassName="active" className="name">About</NavLink></li>
              <li><NavLink to="/services" activeClassName="active" className="name">Services</NavLink></li>
              <li><NavLink to="/portfolio" activeClassName="active" className="name">Portfolio</NavLink></li>
              <li><NavLink to="/contacts" activeClassName="active" className="name">Contacts</NavLink></li>
            </ul>
          </nav>

          </div>;
    }
}
ReactDOM.render(
    <Router>
        <div>
            <Nav />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/services" component={Services} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/contacts" component={Contacts} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>,
    document.getElementById("header")
)
