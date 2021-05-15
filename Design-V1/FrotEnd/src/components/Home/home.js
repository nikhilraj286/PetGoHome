import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import MenuItem from "@material-ui/core/MenuItem";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Row, Col } from "antd";
import DateRangeIcon from "@material-ui/icons/DateRange";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import StreetviewIcon from "@material-ui/icons/Streetview";
import PetsIcon from "@material-ui/icons/Pets";
import DetailsIcon from "@material-ui/icons/Details";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import { Carousel } from "antd";
import "antd/dist/antd.css";
import Reunion1 from "../../Icons/Reunion1.jpeg";
import Reunion2 from "../../Icons/Reunion2.jpeg";
import Reunion3 from "../../Icons/Reunion3.jpeg";
import Reunion4 from "../../Icons/Reunion4.jpeg";
import Reunion6 from "../../Icons/Reunion6.jpeg";
import FileUpload from "../Upload/upload";
import "./home.css";
import GoogleMap from "../GoogleMaps/GoogleMap";
import FooterComponent from "../Footer/footer";

// Image Carousel
const contentStyle = {
  height: "350px",
  color: "#fff",
  lineHeight: "160px",
  width: "60%",
  textAlign: "center",
  background: "#FFFFFF",
  marginLeft: "20%",
  marginTop: "1%",
};

const petReportTypes = [
  {
    value: "Lost",
    label: "Lost",
  },
  {
    value: "Sighting",
    label: "Sighting",
  },
  {
    value: "Found",
    label: "Found",
  },
  {
    value: "Found Deceased",
    label: "Found Deceased",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },

  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "30ch",
  },
}));

const useGridStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
}));

const DropdownStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function Home(props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  const [ButtonGroup, setButtonGroup] = React.useState("left");
  const GridStyles = useGridStyles();

  const handleBtnGroup = (event, newButtonGroup) => {
    setButtonGroup(newButtonGroup);
  };

  const Dropdown = DropdownStyles();
  const [ReportType, setReportType] = React.useState("EUR");

  const handleDropDownChange = (event) => {
    setReportType(event.target.value);
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const displayImages = () => {
    let images = [Reunion1, Reunion6, Reunion3, Reunion4];
    let htmlCode = [];
    return (
      <>
        <Paper elevation={10} style={contentStyle} justify="center">
          <Carousel autoplay effect="fade">
            {images.map((img) => {
              return (
                <div>
                  <img
                    src={img}
                    style={{
                      width: "100%",
                      height: "350px",
                    }}
                  ></img>
                </div>
              );
            })}
          </Carousel>
        </Paper>
      </>
    );
  };

  // const carouselText = () => {
  //   return (
  //     <>
  //       <Carousel autoplay effect="fade">
  //         <div>This is just a text</div>
  //       </Carousel>
  //     </>
  //   );
  // };

  return (
    <div>
      <div style={{ marginLeft: "10%", marginRight: "10%" }}>
        <div>{displayImages()}</div>

        <div className={GridStyles.root}>
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <h1 className="appHeadings">Details</h1>
              <Paper
                className={GridStyles.paper}
                elevation={8}
                style={{ backgroundColor: "#D3D3D3" }}
                // ------------------left coloum back ground color
              >
                {/* text fields  grid start from here */}
                <Grid container spacing={3} alignItems="center">
                  <h3 className="appSubHeadings">Date lost or found</h3>
                  An accurate lost or found date is critical for finding
                  possible matches. Please double check your selection. For lost
                  pets, use the date your pet went missing.
                  <Grid item xs={12}>
                    <Paper className={GridStyles.paper}>
                      <Row alignItems="center">
                        <DateRangeIcon />
                        <TextField
                          id="outlined-basic"
                          required
                          label="Lost or Found Date"
                          type="date"
                          className={classes.textField}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          variant="outlined"
                        />
                      </Row>
                    </Paper>
                    <Row>
                      <h3
                        className="appSubHeadings"
                        style={{ marginTop: "1%" }}
                      >
                        Contact Information
                      </h3>
                    </Row>
                    <Paper className={GridStyles.paper}>
                      <Row>
                        <EmailIcon />
                        <TextField
                          id="outlined-basic"
                          required
                          label="Email ID of the Owner"
                          type="text"
                          className={classes.textField}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          variant="outlined"
                        ></TextField>
                      </Row>
                    </Paper>
                    <Paper className={GridStyles.paper}>
                      <Row>
                        <PhoneIcon />
                        {""}
                        <Checkbox
                          checked={checked}
                          onChange={handleChange}
                          color="primary"
                          inputProps={{ "aria-label": "secondary checkbox" }}
                        />
                        Display Phone?
                      </Row>
                    </Paper>

                    <Paper className={GridStyles.paper}>
                      {" "}
                      <Row>
                        <PhoneAndroidIcon />

                        <TextField
                          id="outlined-number"
                          required
                          label="Phone Number"
                          type="Phone Number"
                          className={classes.textField}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          variant="outlined"
                        />
                      </Row>
                    </Paper>
                    <Row>
                      <h3
                        className="appSubHeadings"
                        style={{ marginTop: "1%" }}
                      >
                        Pet Information
                      </h3>
                    </Row>
                    <Paper className={GridStyles.paper}>
                      {" "}
                      <Row>
                        <StreetviewIcon />
                        <TextField
                          id="outlined-select-ReportType"
                          required
                          select
                          label="Report Type"
                          className={classes.textField}
                          value={ReportType}
                          onChange={handleDropDownChange}
                          variant="outlined"
                        >
                          {petReportTypes.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Row>
                    </Paper>
                    <Paper className={GridStyles.paper}>
                      {" "}
                      <Row>
                        <DetailsIcon />

                        <TextField
                          id="outlined-basic"
                          required
                          helperText="Identifying Markings and Features"
                          label="Description of the pet"
                          multiline
                          className={classes.textField}
                          style={{ width: "50ch" }}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          rows={4}
                          variant="outlined"
                        />
                      </Row>
                    </Paper>
                    <Paper className={GridStyles.paper}>
                      <Row>
                        <PetsIcon />
                        <ToggleButtonGroup
                          value={ButtonGroup}
                          exclusive
                          className={classes.textField}
                          onChange={handleBtnGroup}
                          style={{ backgroundColor: "#FFFFFF" }}
                          aria-label="text alignment"
                        >
                          <ToggleButton value="Other" aria-label="justified">
                            Other
                          </ToggleButton>
                          <ToggleButton value="Dog" aria-label="left aligned">
                            Dog
                          </ToggleButton>

                          <ToggleButton value="Cat" aria-label="centered">
                            Cat
                          </ToggleButton>
                          <ToggleButton value="Bird" aria-label="right aligned">
                            Bird
                          </ToggleButton>
                          <ToggleButton value="Horse" aria-label="justified">
                            Horse
                          </ToggleButton>
                          <ToggleButton value="Pig" aria-label="justified">
                            Pig
                          </ToggleButton>
                          <ToggleButton value="Rabbit" aria-label="justified">
                            Rabbit
                          </ToggleButton>
                          <ToggleButton value="Reptile" aria-label="justified">
                            Reptile
                          </ToggleButton>
                          <ToggleButton value="Mammal" aria-label="justified">
                            Mammal
                          </ToggleButton>
                        </ToggleButtonGroup>
                      </Row>
                    </Paper>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            {/* --------------------------------Right side column with upload------------------------------------*/}
            <Grid item xs={4}>
              <h1 className="appHeadings">Additional Information</h1>

              <Paper
                className={GridStyles.paper}
                justify="center"
                elevation={8}
                style={{ backgroundColor: "#D3D3D3" }}
              >
                <h3 className="appSubHeadings">Upload a picture</h3>
                Uploading a picture increases the chances of a successful
                reunion.
                <div style={{ marginLeft: "35%" }}>
                  <FileUpload />
                </div>
              </Paper>
              <Paper
                className={GridStyles.paper}
                style={{
                  marginTop: "40px",
                  backgroundColor: "#D3D3D3",
                  height: "70%",
                }}
                elevation={8}
              >
                {" "}
                <h3 className="appSubHeadings">Location</h3>
                Location where you have lost or found a pet.
                <div
                  style={{
                    position: "absolute",
                    width: "23%",
                    height: "30%",
                    marginTop: "10px",
                  }}
                >
                  <GoogleMap />
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
}
