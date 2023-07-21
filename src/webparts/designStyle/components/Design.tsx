import * as React from "react";
import "./Design.css";
import Button from "@material-ui/core/Button";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import * as $ from "jquery";
import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.carousel.js";

var img1 = require("../assets/meeting01.jpg");
var img2 = require("../assets/meeting-02.jpg");
var img3 = require("../assets/meeting-03.jpg");
var img4 = require("../assets/meeting-04.jpg");
var videopic = require("../assets/video-item-bg.jpg");

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(25),
      //   fontWeight: theme.typography.fontWeightRegular,
    },
  })
);

const Design = () => {
  const classes = useStyles();

  return (
    <>
      <section className="Hsec">
        <div className="container">
          <div className="hflex">
            <div className="logo">
              <h1>EDU MEETING</h1>
            </div>
            <div className="list">
              <ul>
                <li>HOME</li>
                <li>MEETINGS</li>
                <li>APPLY NOW</li>
                <li>PAGES</li>
                <li>COURSES</li>
                <li>CONTACT US</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="Hvideo">
        <div className="container">
          <div className="bannercontent">
            <p className="hello">HELLO STUDENTS</p>
            <h2 className="welcome">WELCOME TO EDUCATION</h2>
            <p className="Bpara">
              This is an edu meeting HTML CSS template provided by TemplateMo
              website. This is a Bootstrap layout. The video background is taken
              from Pexels website, a group of young people by{" "}
              <span>Pressmaster</span>.
            </p>
            <Button variant="contained" className="Bbtn">
              JOIN US NOW!
            </Button>
          </div>
        </div>
      </section>
      <section className="meeting">
        <div className="container">
          <div className="Hmeet">
            <h4>UPCOMING MEETINGS</h4>
          </div>
          <hr></hr>
          <div className="cardflex">
            <div className="card1">
              <div>
                <h6 className="hmeet">Meeting Catgories</h6>
                <ul className="ulmeet">
                  <li>Sed tempus enim leo</li>
                  <li>Aenean molestie quis</li>
                  <li>Cras et metus vestibulum</li>
                  <li>Nam et condimentum</li>
                  <li>Phasellus nec sapien</li>
                </ul>
                <div className="meetbtn">
                  <Button variant="contained" className="Mbtn">
                    ALL UPCOMING MEETINGS
                  </Button>
                </div>
              </div>
            </div>
            <div className="card2">
              <div className="lect">
                <div className="cardimg">
                  <img src={`${img1}`} className="meeting1" />
                </div>
                <div className="dollar">
                  <p>$22.00</p>
                </div>
                <div className="calflex">
                  <div className="month">
                    <span>NOV</span>
                    <h6>10</h6>
                  </div>
                  <div className="mcon">
                    <h6>New Lecturers Meeting</h6>
                    <p>Morbi in libero blandit lectus cursus ullamcorper.</p>
                  </div>
                </div>
              </div>
              <div className="lect" style={{ marginTop: "20px" }}>
                <div className="cardimg2">
                  <img src={`${img2}`} className="meeting1" />
                </div>
                <div className="dollar2">
                  <p>$14.00</p>
                </div>
                <div className="calflex">
                  <div className="month">
                    <span>NOV</span>
                    <h6>26</h6>
                  </div>
                  <div className="mcon">
                    <h6>Higher Education Conference</h6>
                    <p>Morbi in libero blandit lectus cursus ullamcorper.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card3">
              <div className="lect">
                <div className="cardimg3">
                  <img src={`${img3}`} className="meeting1" />
                </div>
                <div className="dollar3">
                  <p>$36.00</p>
                </div>
                <div className="calflex">
                  <div className="month">
                    <span>NOV</span>
                    <h6>24</h6>
                  </div>
                  <div className="mcon">
                    <h6>Online Teaching Techniques</h6>
                    <p>Morbi in libero blandit lectus cursus ullamcorper.</p>
                  </div>
                </div>
              </div>
              <div className="lect" style={{ marginTop: "20px" }}>
                <div className="cardimg4">
                  <img src={`${img4}`} className="meeting1" />
                </div>
                <div className="dollar4">
                  <p>$36.00</p>
                </div>
                <div className="calflex">
                  <div className="month">
                    <span>NOV</span>
                    <h6>30</h6>
                  </div>
                  <div className="mcon">
                    <h6>Student Training Meetup</h6>
                    <p>Morbi in libero blandit lectus cursus ullamcorper.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="apply">
        <div className="container">
          <div className="applyflex">
            <div className="degree">
              <div className="red">
                <h4>APPLY FOR BACHELOR DEGREE</h4>
                <p>
                  You are allowed to use this edu meeting CSS template for your
                  school or university or business. You can feel free to modify
                  or edit this layout.
                </p>
                <Button variant="contained" className="redbtn">
                  JOIN US NOW!
                </Button>
              </div>
              <div className="yellow">
                <h4>APPLY FOR BACHELOR DEGREE</h4>
                <p>
                  Dolor sit amet, consectetur adipiscing elit. Nulla pretium,
                  sem sit amet elementum mattis. Ante ipsum ultrices urna
                  volutpat ipsum.
                </p>
                <Button variant="contained" className="greenbtn">
                  JOIN US NOW!
                </Button>
              </div>
            </div>
            <div className="acc">
              <div className={classes.root}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={classes.heading}>
                      About Edu Meeting HTML Template
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      If you want to get the latest collection of HTML CSS
                      templates for your websites, you may visit toocss.com
                      website. If you need a working contact form script, please
                      visit our contact page for more info.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography className={classes.heading}>
                      HTML CSS Bootstrap Layout
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Etiam posuere metus orci, vel consectetur elit imperdiet
                      eu. Cras ipsum magna, maximus at semper sit amet, eleifend
                      eget neque. Nunc facilisis quam purus, sed vulputate augue
                      interdum vitae. Aliquam a elit massa. Nulla malesuada elit
                      lacus, ac ultricies massa varius sed. Etiam eu metus eget
                      nibh consequat aliquet. Proin fringilla, quam at euismod
                      porttitor, odio odio tempus ligula, ut feugiat ex erat nec
                      mauris. Donec viverra velit eget lectus sollicitudin
                      tincidunt.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                  >
                    <Typography className={classes.heading}>
                      Please tell your friends
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Ut vehicula mauris est, sed sodales justo rhoncus eu.
                      Morbi porttitor quam velit, at ullamcorper justo suscipit
                      sit amet. Quisque at suscipit mi, non efficitur velit.
                      Cras et tortor semper, placerat eros sit amet, porta est.
                      Mauris porttitor sapien et quam volutpat luctus. Nullam
                      sodales ipsum ac neque ultricies varius.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                  >
                    <Typography className={classes.heading}>
                      Share this to your colleagues
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Maecenas suscipit enim libero, vel lobortis justo
                      condimentum id. Interdum et malesuada fames ac ante ipsum
                      primis in faucibus. sed eleifend metus sit amet magna
                      tristique, posuere laoreet arcu semper. Nulla pellentesque
                      ut tortor sit amet maximus. In eu libero ullamcorper,
                      semper nisi quis, convallis nisi.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="few">
        <div className="container">
          <div className="fewflex">
            <div className="fewhead">
              <div className="Hfew">
                <h1>A Few Facts About Our University</h1>
              </div>
              <div className="boxflex">
                <div className="box94">
                  <h1>94%</h1>
                  <p>Succesed Students</p>
                </div>

                <div className="box94">
                  <h1>126</h1>
                  <p>Current Teachers</p>
                </div>
              </div>
              <div className="boxflex2">
                <div className="box94">
                  <div>
                    <h1>2345</h1>
                    <p>New Students</p>
                  </div>
                </div>
                <div className="box94">
                  <h1>32</h1>
                  <p>Awards</p>
                </div>
              </div>
            </div>
            <div className="imgcon">
              <img src={`${videopic}`} className="fewimg" />
            </div>
            <div className="videoicon">
              <PlayCircleOutlineIcon className="videocon" />
            </div>
          </div>
        </div>
      </section>
      <section className="form">
        <div className="container">
          <div className="formflex">
            <div className="formcon">
              <h2>LET'S GET IN TOUCH</h2>
              <TextField label="YOUR NAME" variant="outlined" />
              <TextField label="YOUR EMAIL" variant="outlined" />
              <TextField label="SUBJECT" variant="outlined" />
              <div>
                <TextField
                  label="YOUR MESSAGE"
                  multiline
                  rows={4}
                  //   defaultValue="Default Value"
                  variant="outlined"
                />
              </div>
              <Button variant="contained" className="formbtn">
                SEND MESSAGE NOW
              </Button>
            </div>
            <div className="formnav">
              <div className="num">
                <p>Phone Number</p>
                <h5>010-020-0340</h5>
              </div>
              <hr></hr>
              <div className="num">
                <p>Email Address</p>
                <h5>name@domain.com</h5>
              </div>
              <hr></hr>
              <div className="num">
                <p>Street Address</p>
                <h5>Rio de Janeiro - RJ, 22795-008, Brazil</h5>
              </div>
              <hr></hr>
              <div className="num">
                <p>Website URL</p>
                <h5>www.domain.com</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="owl-carousel owl-theme">
        <div className="item">
          <h4>1</h4>
        </div>
        <div className="item">
          <h4>2</h4>
        </div>
        <div className="item">
          <h4>3</h4>
        </div>
        <div className="item">
          <h4>4</h4>
        </div>
        <div className="item">
          <h4>5</h4>
        </div>
        <div className="item">
          <h4>6</h4>
        </div>
        <div className="item">
          <h4>7</h4>
        </div>
        <div className="item">
          <h4>8</h4>
        </div>
        <div className="item">
          <h4>9</h4>
        </div>
        <div className="item">
          <h4>10</h4>
        </div>
        <div className="item">
          <h4>11</h4>
        </div>
        <div className="item">
          <h4>12</h4>
        </div>
      </div>
    </>
  );
};

export default Design;
