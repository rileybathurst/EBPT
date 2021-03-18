import * as React from "react"

import Header from "../components/header"
import SlimFooter from "../components/slim-footer"
import FormList from "../components/form-list"

// import Kiley2 from "../images/kiley-2"

// markup
const NotFoundPage = () => {
  return (
    <>
      <Header />

      <main className="measured">
        <h2 className="">Intake Forms</h2>

        <div className="slender-image">
          {/* <Kiley2 /> */}
        </div>
        
        <section id="intake-forms" className="measured">
          <FormList />
        </section>
      </main>
  
      <hr />

      <SlimFooter />
    </>
  )
}

export default NotFoundPage
