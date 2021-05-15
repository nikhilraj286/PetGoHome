import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./info.css";
import { Route, Redirect, Link } from "react-router-dom";
import { Row, Col } from "antd";
import allpets from "../../Icons/allpets2.jpeg";
import FooterComponent from "../Footer/footer";
const paperStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),

    color: theme.palette.text.secondary,
  },
}));

export default function stolenpets() {
  const GridClasses = paperStyles();
  return (
    <div>
      <div style={{ marginLeft: "10%", marginRight: "10%" }}>
        <h1 className="appHeadings">Stolen Pets</h1>
        <h1 className="appSubHeadings">
          It is estimated that nearly two million pets are stolen each year.
        </h1>
        <p>
          <div style={{ marginLeft: "20%" }}>
            <img
              className="size-medium wp-image-6763 alignleft"
              src={allpets}
              alt="Cat-Dog"
              width="900"
              height="350"
            ></img>
          </div>
          Pet theft is more widespread than people think and it is not just
          confined to “bad” neighborhoods. Also, pet theft seems to be on the
          rise. The American Kennel Club has been tracking stolen dog reports
          since 2007 and notes a 31% increase in recent years.
        </p>
        <p>
          There have been reports of pets snatched from fenced yards, parked
          cars, front porches, anywhere a pet is left unattended. Occasionally
          we hear about people whose pets have been taken and dumped by a
          disgruntled neighbor or an angry spouse.
        </p>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={18}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <Paper
                  className={GridClasses.paper}
                  elevation={8}
                  style={{ borderRadius: "35px" }}
                >
                  <h2 className="appSubHeadings">Reasons Pets Are Stolen:</h2>
                  <p>Most often, there is a profit motive to pet theft.</p>
                  <ul>
                    <li>
                      Someone might steal a purebred dog in the hopes of selling
                      it to an unsuspecting individual. This is known as
                      “flipping”. Small, purebred dogs like Yorkshire Terriers,
                      Pomeranians, Maltese and Chihuahuas are the most common
                      targets. Such breeds can be sold for thousands of dollars.
                    </li>
                    <li>A pet may be stolen for the prospect of a reward.</li>
                    <li>
                      If the pet is not neutered, it may be stolen for sale to a
                      breeder or a puppy mill.
                    </li>
                    <li>
                      Dog fighting rings snatch breeds that have a reputation as
                      fighters – Pit Bulls, Boston Terriers, German Shepherds,
                      and Boxers. Dog fighting rings also snatch cats.
                    </li>
                    <li>
                      Sometimes disgruntled neighbors or family members will
                      steal a pet or will dump it off somewhere.
                    </li>
                    <li>
                      Fortunately – and this is the only good news about stolen
                      pets – a new law effective in 2016 prohibits the sale of
                      “randomly collected” animals to labs. “Class B dealers”
                      are finally out of business.
                    </li>
                  </ul>
                  <p>
                    If you are reading this it may be that you think your pet
                    has been stolen. PetGoHome is not a detective agency,
                    although there are “pet detectives”. we maintain a database
                    on line of lost and found pet reports.{" "}
                    <strong>
                      We can only offer advice and an expression of
                      sympathy.&nbsp;
                    </strong>
                  </p>
                </Paper>
              </Grid>
            </Grid>
          </Col>
          <Col className="gutter-row" span={6}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <Paper
                  className={GridClasses.paper}
                  elevation={8}
                  style={{ borderRadius: "35px" }}
                >
                  <h2 className="appSubHeadings">I Lost A Dog</h2>
                  <div class="menu-i-lost-a-dog-container">
                    <ul id="menu-i-lost-a-dog" class="menu">
                      <li
                        id="menu-item-7842"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-7842"
                      >
                        <a
                          title="Search Reports"
                          href="https://search.petfbi.org/"
                        >
                          Search Reports
                        </a>
                      </li>
                      <li
                        id="menu-item-7843"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-7843"
                      >
                        <a
                          title="Post Report"
                          href="https://search.petfbi.org/report.html"
                        >
                          Post Report
                        </a>
                      </li>
                      <li
                        id="menu-item-8664"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8664"
                      >
                        <a
                          title="9 Steps To Finding a Lost Pet Infographic"
                          href="https://petfbi.org/pet-fbi-publicity-flyer/9-steps-to-finding-a-lost-pet-infographic/"
                        >
                          9 Steps To Finding a Lost Pet Infographic
                        </a>
                      </li>
                      <li
                        id="menu-item-9454"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-9454"
                      >
                        <a
                          title="Create Flyer"
                          href="https://search.petfbi.org/flyer.html"
                        >
                          Create Flyer
                        </a>
                      </li>
                      <li
                        id="menu-item-8693"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8693"
                      >
                        <Link to="/whomtocontact">Whom to contact</Link>
                      </li>
                      <li
                        id="menu-item-9276"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9276"
                      >
                        <a href="https://petfbi.org/whom-to-contact/other-online-resources/">
                          Other Online Resources
                        </a>
                      </li>
                      <li
                        id="menu-item-8663"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8663"
                      >
                        <a
                          title="Lost Dog: Action Plan"
                          href="https://petfbi.org/i-lost-a-pet/lost-dog-action-plan/"
                        >
                          Lost Dog: What To Do
                        </a>
                      </li>
                      <li
                        id="menu-item-9272"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9272"
                      >
                        <a href="https://petfbi.org/i-lost-a-pet/lost-dog-action-plan/advice-on-trapping-a-runaway-dog/">
                          Advice on Trapping a Runaway Dog
                        </a>
                      </li>
                      <li
                        id="menu-item-9275"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9275"
                      >
                        <a href="https://petfbi.org/what-to-do/lost-dog-behavior/">
                          Lost Dog Behavior
                        </a>
                      </li>
                      <li
                        id="menu-item-9271"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9271"
                      >
                        <a href="https://petfbi.org/i-lost-a-pet/dogs-lost-away-from-home/">
                          Dogs Lost Away From Home
                        </a>
                      </li>
                      <li
                        id="menu-item-9464"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9464"
                      >
                        <a href="https://petfbi.org/lost-and-found-pet-flyers/">
                          Tips for Posting Lost and Found Pet Flyers
                        </a>
                      </li>

                      <li
                        id="menu-item-7837"
                        class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-6855 current_page_item menu-item-7837"
                      >
                        <Link to="/stolenpets">Stolen Pets</Link>
                      </li>
                    </ul>
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </Col>
        </Row>

        <Grid container spacing={3} style={{ marginTop: "1%" }}>
          <Grid item xs={12} sm={12}>
            <Paper
              className={GridClasses.paper}
              elevation={8}
              style={{ borderRadius: "35px" }}
            >
              <h2 className="appSubHeadings">
                Advice for Recovering a Stolen Pet:
              </h2>
              <ul>
                <li>
                  File a police report with your local police department or
                  sheriff’s office immediately. A police report will be useful
                  for identification purposes when retrieving your pet and could
                  prove helpful in court if a suspect is brought to trial. If
                  the authorities are hesitant to prepare the report, remind
                  them that pets by law are valuable “property” and their theft
                  is either a felony or misdemeanor under all state laws. By
                  law, the police must take action on your complaint. Be
                  persistent. The American Kennel Club recommends :{" "}
                  <em>
                    If your dog has a microchip, ask to have that unique serial
                    number, along with the dog’s description, posted in the
                    “stolen article” category on the National Crime Information
                    Center.
                  </em>
                </li>
                <li>
                  Follow the suggestions on our &nbsp;lost pet advice pages. It
                  is possible that your pet was not stolen or that even if
                  stolen, it broke away. Or the thief may just abandon it.
                </li>
                <li>
                  We strongly recommend that you{" "}
                  <a
                    title="File Lost Pet Report"
                    href="https://search.petfbi.org/report.html"
                    target="_blank"
                  >
                    Post a lost report
                  </a>
                  . It is best not to mention that you think the pet was stolen.
                  &nbsp;It might make the thief or an honest good Samaritan
                  hesitant to come forth.&nbsp;Do not even say “No questions
                  asked”.
                </li>
                <li>
                  Canvass the area where your pet was last seen to see if anyone
                  observed the theft.
                </li>
                <li>
                  When a pet is stolen, most times it is for a profit motive.
                  Offer a reward, but better not to mention how much.
                </li>
                <li>
                  Put up flyers in prominent places in the area where you think
                  your pet was stolen. Presumably, the thief passes through the
                  area and will see your flyers and may respond to the prospect
                  of a reward.
                </li>
                <li>
                  Contact local media outlets like newspapers, radio and
                  television. Include a photo and provide details about your
                  situation that are likely to arouse sympathy or relate an
                  interesting story.
                </li>
                <li>
                  If someone does claim to have your pet, never meet in an out
                  of the way place; never meet alone, and do not hand over money
                  until you have the pet in hand. If someone calls and says they
                  have your pet but need money to send it to you – beware! This
                  is a common scam.
                </li>
                <li>
                  When pets are stolen to be sold for a profit, especially pure
                  bred cats and dogs, they may be advertised. &nbsp;Some people
                  have reported that they found their pet offered for sale in a
                  classified ad. Check your local newspaper, Craigslist or
                  Hoobly.com.
                </li>
              </ul>

              <h2 className="appSubHeadings">
                Ways to Prevent Your Pet From Being Stolen
              </h2>
              <ul>
                <li>Never leave your pet unattended.</li>
                <li>
                  Do not tie your pet up outside a restaurant or a store.
                  <br></br>(
                  <a href="https://face4pets.wordpress.com/2015/06/29/why-you-should-stop-leaving-your-dog-tied-up-outside-of-shops/">
                    More reasons not to do this at <em>face4pets.org</em>
                  </a>
                  )<p></p>
                  <div
                    id="attachment_9861"
                    style={{ width: "310px" }}
                    className="wp-caption aligncenter"
                  >
                    <p id="caption-attachment-9861" className="wp-caption-text">
                      This is a “no-no”!
                    </p>
                  </div>
                </li>
                <li>Do not leave pets in a car, even for a few minutes.</li>
                <li>
                  Even if you have a fenced yard, be careful if it is visible
                  and accessible from the street. Do not leave your pet alone
                  for extended periods.
                </li>
                <li>When walking your dog keep it on a leash.</li>
                <li>
                  Do not allow your cat to roam free. Indoor cats live longer
                  and healthier lives.
                </li>
                <li>
                  Have your pets spayed or neutered. Not only will they be less
                  vulnerable to theft, they will be less likely to run off.
                </li>
                <li>
                  Do not tell strangers that your pet is worth “big bucks”.
                </li>
                <li>
                  Be sure your pet has good ID : a collar with tags and a
                  microchip.
                </li>
              </ul>
              <p>
                Finally, do not become a party to pet theft by buying a purebred
                pet without papers and a verifiable source.
              </p>
              <p>Keep a current photo of your pet – just in case…</p>
            </Paper>
          </Grid>
        </Grid>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
}
