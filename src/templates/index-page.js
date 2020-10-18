/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/prop-types */
// import { PropTypes } from "prop-types";

import React, { useContext } from "react";
import Img from "gatsby-image";
import Typewriter from "typewriter-effect";
import { graphql } from "gatsby";
import Fade from "react-reveal/Fade";
import { DocumentContext } from "~context/DocumentContext";
import DummyImage from "~components/DummyImage";
import Footer from "~components/Footer";
import ImageCTA from "~components/ImageCTA";
import Layout from "~components/Layout";
import Newsletter from "~components/Newsletter";
import SEO from "~components/SEO";

const IndexPage = ({ data, location }) => {
  const { frontmatter } = data.markdownRemark;
  const { device, windowHeight } = useContext(DocumentContext);

  return (
    <>
      <SEO
        customTitle={frontmatter.title}
        customDescription={frontmatter.seoDescription}
        customKeywords={frontmatter.seoKeywords}
        path={location.pathname}
      />

      <Layout className="index-page w-full relative bg-black">
        <section className="w-screen h-screen" id="top">
          <figure className="w-full h-screen absolute pt-10 mt-4 pb-8 px-8 sm:px-0 z-0">
            <img
              className="w-full h-full z-0 object-cover animation-delay-5 animation-appear-slow"
              src="https://i.pinimg.com/originals/8a/45/dc/8a45dc879bff6e84980df3bad8d401f7.gif"
              alt="egg flip"
            ></img>

            <div className="bottom-0 -mb-2 z-0 absolute items-end">
              {/* <h1 className="text-massive leading-none text-white z-50">
                DNL <br />
                WEN.
              </h1> */}
            </div>
          </figure>
        </section>

        <Fade left>
          <section className="w-screen h-screen" id="about">
            <article className="h-full px-10 sm:px-2 py-24 sm:py-20 flex flex-col justify-center">
              <h1 className="f2 text-white flex">
                Based in&nbsp;
                <Typewriter
                  options={{
                    strings: [`Melbourne`, `the Internet`],
                    autoStart: true,
                    loop: true
                  }}
                />
                <br />
                <br />
              </h1>

              <h1 className="f2 text-white">
                Daniel is a multidisciplinary s̶o̶f̶t̶w̶a̶r̶e̶ ̶e̶n̶g̶i̶n̶e̶e̶r specialising in
                front-end web developtment and online business strategy.
              </h1>

              <button
                type="button"
                className="text-white w-64 h-12 mt-16 border-white rounded-full"
              >
                <a
                  href="https://www.linkedin.com/in/dwen/"
                  className="uppercase"
                >
                  Stalk me more 💃
                </a>
              </button>
            </article>
          </section>
        </Fade>

        <section className="mt-16 w-screen">
          <div className="flex flex-col w-full justify-center items-center">
            <h1 className="text-white f4 uppercase"> Featured Projects</h1>

            <article
              className="mt-10 w-screen h-screen flex sm:flex-col justify-evenly"
              id="projects"
            >
              <div className="w-1/2 sm:w-full flex flex-col items-center justify-center border-r-white sm:border-black">
                <Fade>
                  <h1 className="text-white f4 uppercase sm:pb-2 w-2/3 text-center mb-3">
                    Pocket
                  </h1>

                  <ul className="w-2/3 p-5 sm:w-full sm:px-4">
                    <li className="text-white b1 border-b-white w-full py-2 px-1">
                      Winner of the 2019 Accenture Banking Revolution Hackathon.
                    </li>

                    <li className="text-white b1 border-b-white w-full py-2 px-1">
                      Pocket is a banking interface which allows users to take
                      full control of their finances.
                    </li>

                    <li className="text-white b1 border-b-white w-full py-2 px-1">
                      Callaborators: Wil Johnston, Sebastien Bailouni, Jonathon
                      Vrankul
                    </li>
                  </ul>
                </Fade>
              </div>

              <Fade>
                <div className="w-1/2 sm:w-full flex justify-center items-center">
                  <figure className="w-2/3 p-10 sm:p-2 sm:-mt-5">
                    <video
                      poster="/uploads/pocketposter.png"
                      src="/uploads/pocketVid.mp4"
                      controls
                      muted
                      loop
                      alt="pocket video"
                    ></video>
                  </figure>
                </div>
              </Fade>
            </article>

            <article className="w-screen h-screen flex sm:flex-col-reverse justify-evenly">
              <div className="w-1/2 sm:w-full flex justify-center items-center border-r-white sm:border-black">
                <Fade>
                  <figure className="w-2/3 p-10 sm:p-2 sm:-mt-5">
                    <Img
                      fluid={frontmatter.puppyloveImage.childImageSharp.fluid}
                      alt="test"
                    ></Img>
                  </figure>
                </Fade>
              </div>

              <Fade>
                <div className="w-1/2 sm:w-full flex flex-col items-center justify-center">
                  <h1 className="text-white f4 uppercase sm:pb-2 w-2/3 text-center">
                    Puppy Love Pet Care
                  </h1>

                  <ul className="w-2/3 p-5 sm:w-full sm:px-4">
                    <li className="text-white b1 border-b-white w-full py-2 px-1">
                      Full Website re-design.
                    </li>

                    <li className="text-white b1 border-b-white w-full py-2 px-1">
                      Full stack website developtment.
                    </li>

                    <li className="text-white b1 border-b-white w-full py-2 px-1">
                      Google myBusiness consulation and configuration.
                    </li>

                    <li className="text-white b1 border-b-white w-full py-2 px-1">
                      Built using HTML, CSS, JS, Netlify.
                    </li>
                  </ul>
                </div>
              </Fade>
            </article>

            <article className="w-screen h-screen flex sm:flex-col justify-evenly">
              <div className="w-1/2 sm:w-full flex flex-col items-center justify-center border-r-white sm:border-black">
                <Fade>
                  <h1 className="text-white f4 uppercase sm:pb-2 w-2/3 text-center">
                    Magic Strip LED Lights
                  </h1>

                  <ul className="w-2/3 p-5 sm:w-full sm:px-4">
                    <li className="text-white b1 border-b-white w-full py-2 px-1">
                      Magic Strip LED is a global e-commerce dropshipping store
                      specialising in quality strip led lights.
                    </li>

                    <li className="text-white b1 border-b-white w-full py-2 px-1">
                      Built using shopify CMS.
                    </li>
                  </ul>
                </Fade>
              </div>

              <Fade>
                <div className="w-1/2 sm:w-full flex justify-center items-center">
                  <figure className="w-2/3 p-10 sm:p-2 sm:-mt-5">
                    <img src="/uploads/magicstripled.gif" alt="test"></img>
                  </figure>
                </div>
              </Fade>
            </article>

            <article className="w-screen h-screen flex sm:flex-col-reverse justify-evenly">
              <div className="w-1/2 sm:w-full flex justify-center items-center border-r-white sm:border-black">
                <Fade>
                  <figure className="w-2/3  p-10 sm:p-2 sm:-mt-5">
                    <Img
                      fluid={frontmatter.gxeImage.childImageSharp.fluid}
                      alt="test"
                    ></Img>
                  </figure>
                </Fade>
              </div>

              <Fade>
                <div className="w-1/2 sm:w-full flex flex-col items-center justify-center">
                  <h1 className="text-white f4 uppercase sm:pb-2 w-2/3 text-center">
                    goodXevening
                  </h1>

                  <ul className="w-2/3 p-5 sm:w-full sm:px-4">
                    <li className="text-white b1 border-b-white w-full py-2 px-1">
                      GoodXEvening is an online memoir of travel photography.
                    </li>

                    <li className="text-white b1 border-b-white w-full py-2 px-1">
                      All images are hosted on the online web application,
                      Tumblr.
                    </li>
                  </ul>
                </div>
              </Fade>
            </article>
          </div>
        </section>
        <div className="h-24"></div>
      </Layout>

      <Footer />
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        seoDescription
        seoKeywords
        puppyloveImage {
          childImageSharp {
            fluid(maxWidth: 512) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        gxeImage {
          childImageSharp {
            fluid(maxWidth: 512) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        skateImage {
          childImageSharp {
            fluid(maxWidth: 512) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        pocketPoster {
          childImageSharp {
            fluid(maxWidth: 512) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`;
