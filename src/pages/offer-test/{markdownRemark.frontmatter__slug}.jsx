import * as React from "react";
import { graphql, Link, Script } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
// import { SEO } from "../../components/seo";
// import { useSiteMetadata } from "../../hooks/use-site-metadata";
import Header from "../../components/header";
import SlimFooter from "../../components/slim-footer";

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;

  let post = data.markdownRemark;
  console.log("post", post);

  /*   let featuredImg = getImage(
    post.frontmatter.featuredImage?.childImageSharp?.gatsbyImageData,
  ); */

  return (
    <>
      <Header />

      <div className="single-fold">
        <ol className="breadcrumbs">
          <li>
            <Link to="/offerings/">Offerings</Link>&nbsp;&nbsp;/&nbsp;&nbsp;
          </li>
          <li>{frontmatter.title}</li>
        </ol>
      </div>

      <hr />

      <main itemScope itemType="https://schema.org/Article">
        <div className="two-fold">
          <GatsbyImage
            // image={featuredImg}
            // alt={frontmatter.imageAlt}
            alt="frontmatter.imageAlt"
            className="offering-image"
          />
          {/* <Dino /> */}

          <div className="two-fold-content">
            <h1 className="h1__clamped" itemProp="name">
              {frontmatter.title}
            </h1>
            <section dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </main>

      <hr />

      <SlimFooter />
    </>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`;
