import React from "react";
import { newsItems } from "../data/news";

type ProcessUrlProps = {
  url: string;
};

function ProcessUrl({ url }: ProcessUrlProps) {

  url = url.replace(/\/news\//g, '');  // Remove '/news/'
  url = url.replace(/-/g, ' ');  // Replace hyphens with spaces
  url = url.replace(/(^\w|\s\w)/g, m => m.toUpperCase());  // Capitalize first letter of each word
  url = url.replace(/\/$/, '');  // remove trailing slash

  return (
    url
  );

}

const News = () => (
  <ul>
    {newsItems.map((item) => (
      <li key={item.slug}>
        <a href={item.slug}>
          <ProcessUrl url={item.slug} />
        </a>
      </li>
    ))}
  </ul>
);

export default News;
