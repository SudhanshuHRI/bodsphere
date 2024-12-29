import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUserCircle } from "react-icons/fa";
import { FaCloudMoon } from "react-icons/fa";
function App() {
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
        <hr/>
        <div className="program-container">
          <h1>Discover Your Yoga Path</h1>
          <p>Join our community and transform your yoga practice today.</p>
          <div>
            <div>
              <p>Yoga Teacher Trainings</p>
              <p>Become Certified Youga Teachers and transform your practice with world's most accissible & affordable programs.</p>
            </div>
            <div>
              <p>Yoga Classes</p>
              <p> sdfdsf</p>
              </div>
            <div>div1</div>
            <div>div1</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;