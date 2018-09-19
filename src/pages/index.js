import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Carousel from '../components/Carousel';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <main className="main">
          <section className="hero">
            <div className="hero-wrapper">
              <div className="hero-content">
                <div className="hero-copy">
                  <p className="hero-site-caption">Welcome to Excore.</p>
                  <h1 className="hero-site-title">We bridge ideas <br />with digital execution.</h1>
                  <div className="hero-button-container">
                    <a className="button-secondary">Our services</a>
                  </div>
                </div>
                <div className="hero-featured-project">
                  <div className="hero-featured-project-button-container">
                    <a className="button-secondary inverse">See the project</a>
                  </div>
                  <div className="hero-featured-project-img">
                    <img src="assets/images/CM_2.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-primary section-promo">
            <div className="section-primary-wrapper">
              <div className="section-primary-content">
                <h2 className="section-subtitle"
                  data-aos="fade">What we do</h2>
                <div className="promo-box"
                  data-aos="fade"
                  data-aos-delay="400"
                  data-aos-duration="1000">
                  <p className="promo-box-statement">We deliver beautiful, fast and reliable solutions for the web, tailored to
                    your needs.</p>
                  <div className="promo-box-group">
                    <div className="promo-box-group-item">
                      <a href="" 
                        className="button-secondary">Digital design</a>
                    </div>
                    <div className="promo-box-group-item">
                      <a href="" 
                        className="button-secondary">Prototyping</a>
                    </div>
                    <div className="promo-box-group-item">
                      <a href="" 
                        className="button-secondary">Web development</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-items">
            <div className="section-items-wrapper">
              <div className="section-items-content">
                <div className="section-items-group">
                  <div className="section-items-group-item"
                    data-aos="fade">
                    <h3 className="section-items-group-item-heading">Quality driven</h3>
                    <p>Solution quality is our main priority, so your project can adapt to change and evolve in the future.</p>
                  </div>
                  <div className="section-items-group-item"
                    data-aos="fade"
                    data-aos-delay="400">
                    <h3 className="section-items-group-item-heading">Modern solutions</h3>
                    <p>Your idea will be implemented using the newest and most reliable technologies, in which we excel.</p>
                  </div>
                  <div className="section-items-group-item"
                    data-aos="fade"
                    data-aos-delay="800">
                    <h3 className="section-items-group-item-heading">Agile delivery</h3>
                    <p>We focus on minimum viable product, which is all you need to fulfill your business needs.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-primary section-technology-strip">
            <div className="section-primary-wrapper">
              <div className="section-primary-content">
                <h2 className="section-subtitle"
                  data-aos="fade">Our technology</h2>
                <div className="item-strip"
                  data-aos="fade-fade"
                  data-aos-delay="400">
                  <div className="item-strip-content">
                    <div className="item-strip-item">
                      <img src="assets/images/html.png" alt="React" />
                    </div>
                    <div className="item-strip-item">
                      <img src="assets/images/react.png" alt="React" />
                    </div>
                    <div className="item-strip-item">
                      <img src="assets/images/redux.png" alt="Redux" />
                    </div>
                    <div className="item-strip-item">
                      <img src="assets/images/sass.png" alt="Sass" />
                    </div>
                    <div className="item-strip-item">
                      <img src="assets/images/node.png" alt="Node" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-secondary">
            <div className="section-secondary-wrapper">
              <div className="section-secondary-content">
                <h2 className="section-subtitle"
                  data-aos="fade">Our work</h2>
                <p className="section-title"
                  data-aos="fade"
                  data-aos-delay="400">Explore success stories</p>
                <div className="featured-projects-group">
                {posts
                  .map(({ node: post }) => (
                    <div key={post.frontmatter.title} className="featured-projects-item" 
                      data-aos="fade-up">
                      <Link to={post.fields.slug} className="featured-projects-item-image-wrapper">
                        <div className="image-scale">
                          <object className="featured-projects-item-image-button">
                            <a href="#" className="button-secondary inverse">Read more</a>
                          </object>
                          <div className="image-scale-content">
                            <img src="assets/images/project.jpg" alt="" />
                          </div>
                        </div>
                      </Link>
                      <h3 className="featured-projects-item-title">
                        <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                      </h3>
                      <p className="featured-projects-item-desc">{post.frontmatter.date}</p>
                    </div>
                  ))}
                </div>
                <div className="featured-projects-controls">
                  <a href="#" className="button-secondary">See more work</a>
                </div>
              </div>
            </div>
          </section>
          <section className="section-primary section-client-strip">
            <div className="section-primary-wrapper">
              <div className="section-primary-content">
                <h2 className="section-subtitle"
                  data-aos="fade">Our clients</h2>
                <div className="item-strip"
                  data-aos="fade-fade"
                  data-aos-delay="400">
                  <div className="item-strip-content">
                    <div className="item-strip-item">
                      <img src="assets/images/google.png" alt="React" />
                    </div>
                    <div className="item-strip-item">
                      <img src="assets/images/google.png" alt="React" />
                    </div>
                    <div className="item-strip-item">
                      <img src="assets/images/google.png" alt="React" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-primary section-testimonials">
          <div className="section-primary-wrapper">
            <div className="section-primary-content">
              <h2 className="section-subtitle"
                data-aos="fade">Testimonials</h2>
                <Carousel>
                  {[0,1,2,3].map(id => (
                    <div key={id} className="testimonial">
                      <div className="testimonial-image">
                        <img src="assets/images/person.png" alt="Person" />
                      </div>
                      <div className="testimonial-information">
                        <p className="testimonial-text">Perfection is achieved, not when there is nothing more to add, but when
                          there is nothing left to take away.</p>
                        <p className="testimonial-author">Danny Bowien</p>
                        <p className="testimonial-author-desc">Chef &amp; Co-Founder of Mission Chinese Food</p>
                      </div>
                    </div>
                    ))
                  }
                </Carousel>
            </div>
          </div>
        </section>
          <section className="section-secondary section-contact">
            <div className="section-secondary-wrapper">
              <div className="section-secondary-content">
                <div className="contact">
                  <div className="contact-image">
                    <img src="assets/images/call.jpg" alt="" />
                  </div>
                  <div className="contact-form">
                    <h2 className="section-subtitle"
                      data-aos="fade">Contact us</h2>
                    <p className="section-title"
                      data-aos="fade"
                      data-aos-delay="400">Ready to talk?</p>
                    <form
                      data-aos="fade-up"
                      data-aos-delay="400">
                      <div className="input-group">
                        <input className="input-group-input" type="text" id="name" />
                        <label className="input-group-label" htmlFor="name">Name</label>
                      </div>
                      <div className="input-group">
                        <input className="input-group-input" type="email" id="email" />
                        <label className="input-group-label" htmlFor="email">Email</label>
                      </div>
                      <div className="input-group">
                        <textarea className="input-group-input" type="text" id="name" rows="4" cols="80"></textarea>
                        <label className="input-group-label" htmlFor="name">Tell us about your project idea</label>
                      </div>
                      <input type="submit" className="button-primary" value="Send" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>       

        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
            </div>
            
          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
