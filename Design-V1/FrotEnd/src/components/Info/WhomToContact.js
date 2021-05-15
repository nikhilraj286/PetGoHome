import renderEmpty from "antd/lib/config-provider/renderEmpty";
import StarIcon from "@material-ui/icons/Star";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockIcon from "@material-ui/icons/Lock";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import allpets from "../../Icons/allpets.jpeg";
import "./info.css";
import FooterComponent from "../Footer/footer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),

    color: theme.palette.text.secondary,
  },
}));

export default function WhomToContact() {
  const GridClasses = useStyles();
  return (
    <div>
      <div style={{ marginLeft: "10%", marginRight: "10%" }}>
        <br></br>
        <h1 className="appHeadings">Whom to Contact</h1>
        <div className="wpb_column vc_column_container span12">
          <div className="vc_column-inner">
            <div className="wpb_wrapper">
              <div className="wpb_text_column wpb_content_element">
                <div className="wpb_wrapper">
                  <h2 className="appSubHeadings">
                    Please read about the various entities that deal with lost
                    and found pets. Then scroll down to learn how to identify
                    and contact the ones near you.
                  </h2>
                  <p style={{ marginLeft: "7%" }}>
                    <img
                      className="aligncenter wp-image-7034 size-medium"
                      src={allpets}
                      alt="cocobandana3"
                      width="1200"
                      height="350"
                    ></img>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper
                className={GridClasses.paper}
                elevation={8}
                style={{ borderRadius: "45px", height: "250px" }}
              >
                <h2 className="appHeadings">
                  <StarIcon></StarIcon>Police and Animal Control
                </h2>
                These are government agencies, usually municipal or county, that
                are responsible for dealing with lost and found pets, among
                other animal related issues. Municipalities often have an animal
                control department. Except for large cities, they usually do not
                have a shelter, but they may have a temporary holding area. In
                small communities there may not be a dedicated animal control
                person. In that case the police may be able to help. Use a
                search engine, like Google, or dial 411, to get phone numbers
                for police and animal control in your community.
              </Paper>
            </Grid>
            {/* -------------------------------- right cloumn------------------------------ */}
            <Grid item xs={12} sm={6}>
              <Paper
                className={GridClasses.paper}
                elevation={8}
                style={{ borderRadius: "45px", height: "250px" }}
              >
                <h2 className="appHeadings">
                  <LockIcon></LockIcon>Pounds and Shelters
                </h2>
                Most urban municipalities maintain a “pound” or a shelter. Many
                states, like Ohio, have a shelter for each county. As government
                agencies, these shelters are “open admission” which means they
                take in all animals that they pick up or are surrendered. The
                holding period for animals that have been picked up or
                surrendered is usually governed by law. It varies from state to
                state but averages about four days. It is imperative to visit in
                person any shelters where your pet might turn up as soon and as
                often as possible. Just contacting shelters or paying a service
                to contact them is usually ineffective.
              </Paper>
            </Grid>
          </Grid>
        </div>
        {/* -----------------------------second row-------------------------------------_ */}

        <div>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper
                className={GridClasses.paper}
                elevation={8}
                style={{ borderRadius: "45px", height: "380px" }}
              >
                <h2 className="appHeadings">
                  <HomeIcon></HomeIcon>Humane Societies
                </h2>
                These are generally private entities and usually non-profit.
                They depend on public support to pay the bills. Some humane
                societies have a policy of never euthanizing animals for want of
                space. They must limit how many animals they can take in. Other
                humane societies have open admission, which means that they will
                take in all pets that are surrendered but they may be put down
                if they are not adopted. Nationwide, less than 20% of cats that
                enter a shelter ever find a home. According to the Humane
                Society of the United States, based on a survey of the 3,500
                shelters and humane societies in the U.S. about 30% of shelter
                dogs are reclaimed by owners, but only 2 to 5% of cats. People
                are quick to report a stray dog, but free-roaming cats go
                largely unnoticed. They may surface only after many weeks or
                months and by that time their family may have given up. We
                encourage you not to abandon your search too soon. We’ve had
                numerous cases of very belated happy reunions.
                <br></br>
                Do you want to adopt a pet?
                <br></br>Animal shelters are your best source when looking for a
                pet.
                <a href="https://www.humanesociety.org/">More Information</a>
              </Paper>
            </Grid>
            {/* -------------------------------- right cloumn------------------------------ */}
            <Grid item xs={12} sm={6}>
              <Paper
                className={GridClasses.paper}
                elevation={8}
                style={{ borderRadius: "45px", height: "380px" }}
              >
                <h2 className="appHeadings">
                  <PersonIcon></PersonIcon>Rescue Groups
                </h2>
                Rescues are usually small organizations, sometimes only a single
                individual. Some specialize in a certain type of animal, like
                ferrets or birds, or in a certain breed of dog or cat. They
                often save companion animals from situations of abuse, neglect
                or abandonment. Some rescue groups “pull” dogs or cats from
                shelters and foster them until they can be placed. Rescue groups
                do not usually have a shelter. Instead they foster the animals
                in their homes. A lost pet may turn up with a rescue group after
                being found as a stray, or “rescued” from a bad situation, or
                after spending time in a shelter. Especially if your lost pet is
                a special breed, it would be a good idea to contact the
                appropriate rescue group.
                <br></br>
                <h2 className="appHeadings">
                  <LocalHospitalIcon></LocalHospitalIcon>Veterinarians
                </h2>
                Just use a search engine like Google and key in “Veterinarians
                in [your area].
                <div style={{ marginBottom: "1%" }}></div>
              </Paper>
            </Grid>
          </Grid>
          {/* ---------------------------------------bottom content-------------------------------------- */}

          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <Paper
                className={GridClasses.paper}
                elevation={8}
                style={{ borderRadius: "45px" }}
              >
                <h2 className="appHeadings">
                  How To Identify the Agencies Near You
                </h2>
                It is vital to check all the agencies near you where a lost pet
                might turn up, or where someone who has lost a pet might have
                left information. If you live in a large urban area, there may
                be many, but usually there are just a few key agencies. You
                should be able to determine the most important agencies to
                contact simply by asking.
                <br></br>
                <br></br>
                <strong style={{ color: "#008000" }}>
                  Using the suggestions on this page, draw up a list: police,
                  animal control, shelters, humane societies, vets and rescue
                  groups. Recruit friends and family to help you. Divvy up the
                  work and tick off your list.
                </strong>
                <br></br>
                <br></br>
                <h2 className="appHeadings">
                  Sites with Directories For Shelters, Humane Societies and
                  Rescue Groups
                </h2>
                <ul>
                  <li>
                    <a
                      href="http://www.petfinder.com/animal-shelters-and-rescues/search/"
                      target="_blank"
                      rel="noopener"
                    >
                      <strong>PetFinder&nbsp;</strong>
                    </a>
                    <br></br>
                    Petfinder has the most comprehensive, and it has the best
                    system. It gives information for 14,000 agencies nationwide.
                    You just put in your zip code and you get a list with links
                    in order of their distance from you. Petfinder is also an
                    adoption site where shelters can post information about the
                    pets available for adoption. Sometimes a lost pet will turn
                    up on an adoption list. If you live in a heavily populated
                    area your search may turn up dozens of animal agencies. Do
                    not despair! Just ask any one of them for advice on the most
                    important ones to call, the ones where a recently lost pet
                    is most likely to turn up. Chances are there are just a few
                    likely ones. Over time you can contact them all at the rate
                    of a few each day. Being thorough and being persistent is
                    important!
                  </li>
                  <br></br>
                  <li>
                    <a
                      href="http://theshelterpetproject.org/shelters"
                      target="_blank"
                      rel="noopener"
                    >
                      <strong>The Shelter Project</strong>
                    </a>
                    <br></br>
                    Information mostly overlaps Petfinder
                  </li>
                  <br></br>
                  <li>
                    <a href="http://animalshelter.org/">
                      <strong>AnimalShelter.org</strong>
                    </a>
                    <br></br>
                    Another directory with humane societies and rescues. There
                    may be some additional listings but also some missing
                    listings. The problem is many rescue groups come and go – it
                    is very stressful business!
                  </li>
                  <br></br>
                </ul>
                <h2 className="appHeadings">Internet Search Engines</h2>
                You can also take advantage of search engines to identify the
                agencies near you. We recommend using the following keywords in
                the query box: “Animal shelters near (your city)?” or “Animal
                shelters near (your zip)?” In the same way, you can access
                information about “veterinarians”, “animal emergency clinics”,
                and “pet rescue groups” near you.
                <br></br>
                <br></br>
                <h2 className="appHeadings">
                  Web Sites That Offer Pet Finding Contact Services For a Fee
                  <br></br>
                  CAUTION ADVISED
                </h2>
                <p>
                  You will find several by searching “lost pet finder service”.
                  Some can be very helpful; others are really just out to make a
                  fast buck with claims to unrealistically high success rates.
                  Before you pay for such a service we recommend that you read
                  their reviews. (Search “reviews of <em>name of web site”</em>)
                  also check with the Better Business Bureau in the area they
                  are located.&nbsp;
                  <em>
                    Note that some of these services try to outrun their bad
                    reputation by changing their name. Beware of sites that
                    operate under several names.
                  </em>{" "}
                  Some of these contact services are fairly pricey. We think
                  postcard mailings to neighbors and vets can be very helpful
                  but robo-calls, emails and even faxes to shelters are really
                  NOT effective.
                  <strong>
                    {" "}
                    You must go to the shelters in person and often.
                  </strong>
                </p>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
}
