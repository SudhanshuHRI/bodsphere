import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUserCircle } from "react-icons/fa";
import { FaCloudMoon } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function App() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="App">
      <div className="container-fluid">
        <Navbar expand="lg" className="bg-body-tertiary justify-content-center">
          <Navbar.Brand href="#home">
            <img src="/logo.png" width={200} />
          </Navbar.Brand>

          <Navbar.Collapse
            id="basic-navbar-nav"
            className="menu_items_container"
          >
            <Nav className="w-100 justify-content-evenly align-items-center">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Categories</Nav.Link>
              <Nav.Link href="#link">Notification</Nav.Link>
              <Nav.Link href="#link">AI Music</Nav.Link>
              <Nav.Link href="#link">
                <FaCloudMoon />
              </Nav.Link>

              <Nav.Link href="#link">
                <FaUserCircle className="h4" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="banner-container">
          <div>
            <h1 className="w-25">Welcome to the Yogic world.</h1>
            <p className="w-25 h6">
              Yoga Teacher Trainings, classes, meditation,pranayama,music ,
              Philosophy and more.
            </p>
            <p>
              <i>Everything under $10.</i>
            </p>
          </div>
        </div>
        <div className="counter-container">
          <div>
            <h1>190+</h1>
            <p>Countries</p>
          </div>
          <div>
            <h1>1,000+</h1>
            <p>On-Demand classes</p>
          </div>
          <div>
            <h1>100K</h1>
            <p>Members</p>
          </div>
        </div>
        <hr />
        <div className="program-container">
          <div className="program-header">
            <h1>Discover Your Yoga Path</h1>
            <p>Join our community and transform your yoga practice today.</p>
          </div>

          <div className="programsContainer">
            <div>
              <p>
                <b>Yoga Teacher Trainings</b>
              </p>
              <p>
                Become Certified Youga Teachers and transform your practice with
                world's most accissible & affordable programs.
              </p>
            </div>
            <div>
              <p>
                <b>Yoga Classes</b>
              </p>
              <p>
                {" "}
                Join revitalizing Yoga classes of Yin, Hatha, Ashtanga, Vinyasa
                and a lot more , to enhance your well being.
              </p>
            </div>
            <div>
              <p>
                <b>Calm Music</b>
              </p>
              <p>
                {" "}
                Experience tranquality with our calming music , perfect for
                relaxation and mindfullness
              </p>
            </div>
            <div>
              <p>
                <b>Pranayam and Maditation</b>
              </p>
              <p>
                Explore the power of breath and enhance your self awareness and
                inner peace.
              </p>
            </div>
          </div>
        </div>
        <div className="accreditationContainer">
          <div className="w-50  accreditionLeftContainer">
            <p className="h3">
              <b>
                Get Internationally accredited by Bodsphere, from the comfort of
                your home
              </b>
            </p>
            <p className="pt-5 pb-5">
              Join the Bodsphere community and take the first step towards
              joining the world's biggest community of yoga schools and teachers
              that represent hight quality, safe , affordable, accissible and
              equitable yoga.
            </p>
            <button className="customButton">Get Accredited</button>
          </div>
          <div className="w-50  d-flex justify-content-center align-items-center">
            <img src="/img1.png" />
          </div>
        </div>
        <div className="sliderContainer1">
          <p>Meet Your Instructor</p>
          <p>
            We work with the finest professinals to ensure you feel the best.
          </p>
          <div className="slider1">
            <Carousel
              swipeable={false}
              draggable={false}
              showDots={false}
              responsive={responsive}
              //ssr={true} // means to render carousel on server-side.
              infinite={true}
             // autoPlay={this.props.deviceType !== "mobile" ? true : false}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              //customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              //deviceType={this.props.deviceType}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              <div><img src="/img2.png" width={300}/><p>Name</p></div>
              <div><img src="/img3.png" width={300}/><p>Name</p></div>
              <div><img src="/img4.png" width={300}/><p>Name</p></div>
              <div><img src="/img5.png" width={300}/><p>Name</p></div>
            </Carousel>
            ; ;
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
