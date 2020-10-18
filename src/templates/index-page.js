/* eslint-disable react/prop-types */
// import { PropTypes } from "prop-types";

import React, { useContext } from "react";
import Img from "gatsby-image";
import Typewriter from "typewriter-effect";
import { graphql } from "gatsby";
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
          <figure className="w-full h-screen absolute pt-10 mt-4 pb-8 px-8 z-0">
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

        <section className="w-screen h-screen" id="about">
          <article className="h-full px-10 py-24 flex flex-col justify-center">
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
              front-end web developtment and digital business strategy.
            </h1>

            <button
              type="button"
              className="text-white w-64 h-12 mt-16 border-white rounded-full"
            >
              Let's chat 💸
            </button>
          </article>
        </section>

        <section className="mt-16 w-screen">
          <div className="flex flex-col w-full justify-center items-center">
            <h1 className="text-white f4 uppercase"> Featured Projects</h1>

            <article
              className="mt-10 w-screen h-screen flex sm:flex-col justify-evenly"
              id="projects"
            >
              <div className="w-1/2 sm:w-full flex flex-col items-center justify-center border-r-white">
                <h1 className="text-white f3 uppercase">Pocket</h1>
                <p className="text-white w-2/3 py-10 px-5 text-center b1">
                  → Winner of the 2019 Accenture Banking Revolution Hackathon.
                  <br />
                  → Pocket is an banking interface which allows users to take
                  control of their finances.
                  <br />→ Callaborators: Wil Johnston, Sebastien Bailouni,
                  Jonathon Vrankul
                </p>
              </div>
              <div className="w-1/2 sm:w-full flex justify-center items-center">
                <figure className="w-2/3 sm:w-1/2 p-10 sm:p-1">
                  <video
                    src="/uploads/pocketVid.mp4"
                    controls
                    muted
                    loop
                    alt="pocket video"
                  ></video>
                </figure>
              </div>
            </article>

            <article className="w-screen h-screen flex sm:flex-col-reverse justify-evenly">
              <div className="w-1/2 sm:w-full flex justify-center items-center border-r-white">
                <figure className="w-2/3 sm:w-1/2 p-10 sm:p-1">
                  <Img
                    fluid={frontmatter.puppyloveImage.childImageSharp.fluid}
                    alt="test"
                  ></Img>
                </figure>
              </div>

              <div className="w-1/2 sm:w-full flex flex-col items-center justify-center">
                <h1 className="text-white f3 uppercase">Puppy Love Pet Care</h1>
                <p className="text-white w-2/3 py-10 px-5 text-center b1">
                  → Website design. <br />
                  → Full stack website developtment. <br />
                  → Google myBusiness consultation. <br />→ Built using HTML,
                  CSS, JS, Netlify.
                </p>
              </div>
            </article>

            <article className="w-screen h-screen flex sm:flex-col justify-evenly">
              <div className="w-1/2 sm:w-full flex flex-col items-center justify-center border-r-white">
                <h1 className="text-white f3 uppercase">
                  Magic Strip LED Lights
                </h1>
                <p className="text-white w-2/3 py-10 px-5 text-center b1">
                  → Magic Strip LED is a global e-commerce dropshipping store
                  specialising in quality strip led lights.
                  <br />→ Built using shopify CMS.
                </p>
              </div>
              <div className="w-1/2 sm:w-full flex justify-center items-center">
                <figure className="w-2/3 sm:w-1/2 p-10 sm:p-1">
                  <img src="/uploads/magicstripled.gif" alt="test"></img>
                </figure>
              </div>
            </article>

            <article className="w-screen h-screen flex sm:flex-col-reverse justify-evenly">
              <div className="w-1/2 sm:w-full flex justify-center items-center border-r-white">
                <figure className="w-2/3 sm:w-1/2 p-10 sm:p-1">
                  <Img
                    fluid={frontmatter.gxeImage.childImageSharp.fluid}
                    alt="test"
                  ></Img>
                </figure>
              </div>

              <div className="w-1/2 sm:w-full flex flex-col items-center justify-center">
                <h1 className="text-white f3 uppercase">goodXevening</h1>
                <p className="text-white w-2/3 py-10 px-5 text-center b1">
                  → goodXEvening is a travel photography blog. <br />→ Images
                  hosted on online web application Tumblr.
                </p>
              </div>
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
