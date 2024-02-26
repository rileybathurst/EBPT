import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

function ProcessUrl({ url }) {

  url = url.replace(/\/news\//g, '');  // Remove '/news/'
  url = url.replace(/-/g, ' ');  // Replace hyphens with spaces
  url = url.replace(/(^\w|\s\w)/g, m => m.toUpperCase());  // Capitalize first letter of each word
  url = url.replace(/\/$/, '');  // remove trailing slash

  return (
    url
  );

}

const News = () => {

  const { allSitePage } = useStaticQuery(graphql`
    query NewsQuery {
      allSitePage(filter: {path: {glob: "/news/*"}}) {
        nodes {
          path
        }
      }
    }
  `);

  return (
    <ul>
      {allSitePage.nodes.map((page) => (
        <li>
          <Link
            to={page.path}
            activeClassName="active"
          >
            <ProcessUrl url={page.path} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default News;
