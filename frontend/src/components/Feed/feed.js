import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
// import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
// import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
// import { red } from "@material-ui/core/colors";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import axios from "axios";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
// import FooterComponent from "../Footer/footer";
import backendServer from "../../webconfig";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Box from "@material-ui/core/Box";
import { Redirect } from "react-router";
import PetLocation from "./petlocation";

import "./feed.css";
// import { PlacesAuto } from "./placesAuto";
import Button from "@material-ui/core/Button";
import background from "../../Icons/back.jpeg";
import Fb from "./fb";

import PlacesAuto from "./placesAuto";
import SightingLocation from "./sightinglocation";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useTabStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#FFFFFF", //tab content color
  },
}));

const userFeedStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 745,
    marginTop: "3%",
    backgroundColor: "#85a1b4", //card color
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function Feed() {
  const classes = userFeedStyles();
  const [expanded, setExpanded] = useState(false);
  const [locations, setLocations] = useState(null);

  const [speciesValue, setSpeciesValue] = useState("All");
  const [DateValue, setDateValue] = useState("All");
  const [value, setValue] = useState([]);
  const [recordTypeValue, setRecordTypeValue] = useState("All");
  const [address, SetAddress] = useState("");
  const [buttonClick, SetButtonCLick] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      window.alert("Latitude is :" + String(position.coords.latitude));
      console.log("Longitude is :", position.coords.longitude);
    });
    axios
      .post(backendServer + "/getLocationsForFeed", {
        pet_type: speciesValue,
        record_type: recordTypeValue,
        missing_date: DateValue,
      })
      .then((response) => {
        SetButtonCLick(false);
        console.log(response.data);
        setLocations(response.data);
        let values = Array(response.data.length).fill(0);
        setValue(values);
      })

      .catch((err) => {
        console.log(err);
      });
  }, [buttonClick]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const tabClasses = useTabStyles();

  const handleChange = (event, newValue) => {
    // console.log(event.target.name);
    // console.log(val);
    console.log(newValue);
    let updatedValue = Object.assign(value);
    updatedValue[Number(newValue.split("-")[0])] = Number(
      newValue.split("-")[1]
    );
    // console.log(updatedValue);
    setValue([...updatedValue]);
  };

  // const onBookMarkClick = (location) => {
  //   console.log(location);
  // };
  const handleRadioChange = (event) => {
    setSpeciesValue(event.target.value);
  };
  const handleDateChange = (event) => {
    setDateValue(event.target.value);
  };
  const handleRecordTypeChange = (event) => {
    setRecordTypeValue(event.target.value);
  };
  const OnFindClick = () => {
    axios
      .post(backendServer + "/getLocationsForFeed", {
        pet_type: speciesValue,
        record_type: recordTypeValue,
        missing_date: DateValue,
      })
      .then((response) => {
        SetButtonCLick(true);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  const GoToLost = (event) => {
    return <Redirect to="/lostorfound"></Redirect>;
  };

  const renderCard = () => {
    return (
      <>
        {localStorage.getItem("userProfile") ? "" : <Redirect to="/" />}
        {/* {console.log(locations)} */}
        {locations
          ? locations.map((location, idx) => (
              <div style={{ marginLeft: "5%", marginRight: "5%" }}>
                <Card className={classes.root} elevation={15} key={location.id}>
                  <CardHeader
                    title={
                      location.record_type +
                      " - " +
                      location.pet_type +
                      " (" +
                      location.breed +
                      ")"
                    }
                    subheader={String(location.missing_date).substr(0, 10)}
                  />
                  {/* tabs starts from here */}
                  <div className={tabClasses.root}>
                    <AppBar position="static">
                      <Tabs
                        value={idx + "-" + value[idx]}
                        id={idx}
                        onChange={handleChange}
                        aria-label="simple tabs example"
                        style={{ background: "#8dc63f" }}
                      >
                        <Tab
                          value={idx + "-" + 0}
                          label="Image"
                          {...a11yProps(0)}
                        />
                        <Tab
                          value={idx + "-" + 1}
                          label="Details"
                          {...a11yProps(1)}
                        />
                        <Tab
                          value={idx + "-" + 2}
                          label="Location"
                          {...a11yProps(2)}
                        />
                        <Tab
                          value={idx + "-" + 3}
                          label="Sightings"
                          {...a11yProps(3)}
                        />
                      </Tabs>
                    </AppBar>
                    <TabPanel value={value[idx]} index={0}>
                      <div>
                        <table>
                          <tr>
                            <td>
                              <img
                                src={
                                  "https://petgohome.s3-us-west-2.amazonaws.com/" +
                                  location.picture
                                }
                                alt="petimage"
                                width="350"
                                height="300"
                              ></img>
                            </td>

                            <td>
                              <Fb location={location}></Fb>
                            </td>
                          </tr>
                          <tr></tr>
                        </table>

                        {/* <IconButton
                          aria-label="add to favorites"
                          onClick={() => onBookMarkClick(location)}
                        >
                          <BookmarkIcon />
                        </IconButton> */}
                      </div>
                    </TabPanel>
                    <TabPanel value={value[idx]} index={1}>
                      <div
                        style={{
                          fontFamily: "Sirin Stencil",
                          fontSize: "18px",
                        }}
                      >
                        <row style={{ width: "50px" }}>Record Type : </row>{" "}
                        {location.record_type}
                        <br></br>
                        Pet Name: {location.pet_name}
                        <br></br>
                        Owner Name: {location.User.username}
                        <br></br>
                        Email : {location.email}
                        <br></br>
                        Contact : {"+1 " + String(location.phone)}
                        <br></br>
                        Animal : {location.pet_type}
                        <br></br>
                        Gender : {location.gender}
                        <br></br>
                        Date : {String(location.missing_date).substr(0, 10)}
                        <br></br>Description : {location.description}
                      </div>
                    </TabPanel>
                    <TabPanel
                      value={value[idx]}
                      index={2}
                      style={{ position: "relative", minHeight: "350px" }}
                    >
                      <div
                        style={{
                          height: "40%",
                          position: "absolute",
                          bottom: "-105%",
                          height: "200%",
                          width: "200%",
                        }}
                      >
                        <PetLocation location={location}></PetLocation>
                      </div>
                    </TabPanel>
                    <TabPanel
                      value={value[idx]}
                      index={3}
                      style={{ position: "relative", minHeight: "350px" }}
                    >
                      <div>
                        <h4 style={{ fontFamily: "Sirin Stencil" }}>
                          Sightings of this pet
                        </h4>
                        <div
                          style={{
                            height: "40%",
                            position: "absolute",
                            bottom: "-105%",
                            height: "200%",
                            width: "200%",
                          }}
                        >
                          <SightingLocation
                            location={location}
                          ></SightingLocation>
                        </div>
                      </div>
                    </TabPanel>
                  </div>

                  {/* tabs end here */}

                  <CardContent>
                    <Typography
                      variant="body2"
                      //  color="textSecondary"
                      component="p"
                    >
                      <h6>{location.record_type + " - location"}</h6>

                      <h6>
                        {location.location +
                          " (" +
                          location.latitude +
                          ", " +
                          location.longitude +
                          ")"}
                      </h6>
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    {/* <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton> */}
                    <IconButton
                      className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                      })}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                      style={{ padding: "0px" }}
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent style={{ marginTop: "0px" }}>
                      <Typography paragraph>
                        <h5>Recent Sightings</h5>{" "}
                      </Typography>

                      {/* <PDFGenerator details={location}></PDFGenerator> */}

                      <div>
                        {/* -------------------------place auto complete------------------------------------- */}
                        <PlacesAuto details={location}></PlacesAuto>
                        {/* -------------------------place auto complete------------------------------------- */}
                      </div>
                    </CardContent>
                  </Collapse>
                </Card>
              </div>
            ))
          : ""}
      </>
    );
  };

  return (
    <div style={{ backgroundColor: "#F5F9FC" }}>
      <div
        style={{
          backgroundImage: `url(${background})`,
          width: "100%",
        }}
      >
        <div
          style={{
            marginLeft: "43%",
          }}
        >
          <h1
            style={{
              padding: "18px",
              fontFamily: "Sirin Stencil",
              fontWeight: "600",
            }}
          >
            Lost or Found a pet?
          </h1>
          <div style={{ marginLeft: "10%" }}>
            <Button
              variant="contained"
              style={{
                width: "26%",
                height: "55px",
                borderRadius: "13px",
                marginBottom: "2%",
                backgroundColor: "#8dc63f",
              }}
              onClick={GoToLost}
            >
              Report in PetGoHome
            </Button>
          </div>
        </div>
      </div>
      <Grid container spacing={2}>
        <Grid
          item
          xs={3}
          sm={3}
          style={{
            marginLeft: "3%",
          }}
        >
          <div
            style={{
              top: "0",
              padding: "5%",
            }}
          >
            <Paper
              style={{
                height: "10%",
                width: "80%%",
                backgroundColor: "#DCDCDC",
                borderRadius: "15px",

                marginTop: "5%",
              }}
            >
              <Paper style={{ backgroundColor: "#85a1b4" }}>
                <div style={{ padding: "18px", fontFamily: "Sirin Stencil" }}>
                  <h5>Showing lost and found pets</h5>
                </div>
              </Paper>
              <Paper>
                <div style={{ padding: "18px" }}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Species</FormLabel>
                    <RadioGroup
                      value={speciesValue}
                      onChange={handleRadioChange}
                    >
                      <FormControlLabel
                        value="All"
                        control={<Radio />}
                        label="All"
                      />
                      <FormControlLabel
                        value="Dog"
                        control={<Radio />}
                        label="Dog"
                      />
                      <FormControlLabel
                        value="Cat"
                        control={<Radio />}
                        label="Cat"
                      />
                      <FormControlLabel
                        value="Bird"
                        control={<Radio />}
                        label="Bird"
                      />
                      <FormControlLabel
                        value="Rabbit"
                        control={<Radio />}
                        label="Rabbit"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
              </Paper>
              <Paper>
                <div style={{ padding: "18px" }}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Within Past</FormLabel>
                    <RadioGroup value={DateValue} onChange={handleDateChange}>
                      <FormControlLabel
                        value="All"
                        control={<Radio />}
                        label="All"
                      />
                      <FormControlLabel
                        value="30"
                        control={<Radio />}
                        label="1 Month"
                      />
                      <FormControlLabel
                        value="90"
                        control={<Radio />}
                        label="3 Months"
                      />
                      <FormControlLabel
                        value="183"
                        control={<Radio />}
                        label="6 Months"
                      />
                      <FormControlLabel
                        value="365"
                        control={<Radio />}
                        label="1 Year"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
              </Paper>
              <Paper>
                <div style={{ padding: "18px" }}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">State</FormLabel>
                    <RadioGroup
                      value={recordTypeValue}
                      onChange={handleRecordTypeChange}
                    >
                      <FormControlLabel
                        value="All"
                        control={<Radio />}
                        label="All"
                      />
                      <FormControlLabel
                        value="Lost"
                        control={<Radio />}
                        label="Lost"
                      />
                      <FormControlLabel
                        value="Found"
                        control={<Radio />}
                        label="Found"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
              </Paper>
              <Button
                variant="contained"
                style={{
                  width: "100%",
                  height: "50px",
                  borderRadius: "10px",
                  backgroundColor: "#8dc63f",
                }}
                onClick={OnFindClick}
              >
                Find
              </Button>
            </Paper>
          </div>
        </Grid>
        <Grid item xs={8} sm={8} style={{ marginLeft: "3%" }}>
          {renderCard()}
        </Grid>
      </Grid>
    </div>
  );
}
