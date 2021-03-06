import * as React from "react";
import { Link } from "gatsby";

import Header from "../components/header";
import SlimFooter from "../components/slim-footer";
import Seo from "../components/seo";

// markup
const NotFoundPage = () => {
  return (
    <>
      <Header />
      <Seo title="404" />
      <main className="measured">
        <h1>Page not found</h1>
        <p className="justified-40">
          Sorry we couldn’t find what you were looking for.
          <br />
          {process.env.NODE_ENV === "development" ? (
            <>
              <br />
              Try creating a page in <code>src/pages/</code>.
              <br />
            </>
          ) : null}
          <br />
          <Link to="/" title="to the front page">Go home</Link>.
        </p>
      </main>
      <hr />

      <SlimFooter />
    </>
  );
};

export default NotFoundPage;
