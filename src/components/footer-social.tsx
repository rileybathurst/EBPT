import React from "react";
import { Link } from "gatsby";

function ThisYear() {
  let today = new Date().getFullYear();
  // console.log(today);
  return (
    <>
      {today}
    </>
  );
}

const FooterSocial = () => (
  <section id="footer-social">
    {/* // TODO fix the hovers to square  */}
    <ul className="measured">
      {/* yelp */}
      <li>
        <a
          href="https://www.yelp.com/biz/emerald-bay-physical-therapy-south-lake-tahoe"
          title="emerald bay physical therapy yelp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 53.69">
            <title>Emerald Bay Physical Therapy yelp</title>
            <path
              className="cls-1"
              d="M29.4,43.35l10.45,5.1a2.4,2.4,0,0,1-.47,4.48L28.1,55.74a2.39,2.39,0,0,1-3-2.06,20.48,20.48,0,0,1,.94-8.94A2.4,2.4,0,0,1,29.4,43.35Z"
              transform="translate(-25 -18.15)"
            />
            <path
              className="cls-1"
              d="M33.58,64.86l7.78-8.63a2.39,2.39,0,0,1,4.17,1.68l-.4,11.62a2.4,2.4,0,0,1-2.8,2.28A20.75,20.75,0,0,1,34,68.44,2.4,2.4,0,0,1,33.58,64.86Z"
              transform="translate(-25 -18.15)"
            />
            <path
              className="cls-1"
              d="M52,53.37,63.08,57a2.4,2.4,0,0,1,1.42,3.31A20.72,20.72,0,0,1,59,67.35a2.39,2.39,0,0,1-3.56-.57l-6.16-9.86A2.4,2.4,0,0,1,52,53.37Z"
              transform="translate(-25 -18.15)"
            />
            <path
              className="cls-1"
              d="M63.26,46.32l-11.17,3.2a2.4,2.4,0,0,1-2.65-3.64L56,36.24a2.38,2.38,0,0,1,3.56-.46,20.47,20.47,0,0,1,5.29,7.27A2.4,2.4,0,0,1,63.26,46.32Z"
              transform="translate(-25 -18.15)"
            />
            <path
              className="cls-1"
              d="M37.15,19.2a33,33,0,0,0-5.74,2.12,2.39,2.39,0,0,0-1,3.35L41.29,43.59a2.39,2.39,0,0,0,4.47-1.2V20.55a2.39,2.39,0,0,0-2.57-2.39A33.5,33.5,0,0,0,37.15,19.2Z"
              transform="translate(-25 -18.15)"
            />
          </svg>
        </a>
      </li>

      {/* f */}
      <li>
        <a
          href="https://www.facebook.com/emeraldbaypt"
          title="emerald bay physical therapy facebook"
        >
          <svg
            enableBackground="new 0 0 1024 1024"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Emerald Bay Physical Therapy facebook</title>
            <path d="m1024 512c0-282.77-229.23-512-512-512s-512 229.23-512 512c0 255.55 187.23 467.37 432 505.78v-357.78h-130v-148h130v-112.8c0-128.32 76.44-199.2 193.39-199.2 56.02 0 114.61 10 114.61 10v126h-64.56c-63.6 0-83.44 39.47-83.44 79.96v96.04h142l-22.7 148h-119.3v357.78c244.77-38.41 432-250.23 432-505.78z" />
          </svg>
        </a>
      </li>

      {/* instagram */}
      <li>
        <a
          href="https://www.instagram.com/emeraldbayphysicaltherapy/"
          title="emerald bay physical therapy instagram"
        >
          <svg
            id="Logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 503.84 503.84"
          >
            <title>Emerald Bay Physical Therapy instagram</title>
            <path
              d="M256,49.47c67.27,0,75.23.26,101.8,1.47,24.56,1.12,37.9,5.22,46.78,8.67a78,78,0,0,1,29,18.85,78,78,0,0,1,18.85,29c3.45,8.88,7.55,22.22,8.67,46.78,1.21,26.57,1.47,34.53,1.47,101.8s-.26,75.23-1.47,101.8c-1.12,24.56-5.22,37.9-8.67,46.78a83.51,83.51,0,0,1-47.81,47.81c-8.88,3.45-22.22,7.55-46.78,8.67-26.56,1.21-34.53,1.47-101.8,1.47s-75.24-.26-101.8-1.47c-24.56-1.12-37.9-5.22-46.78-8.67a78,78,0,0,1-29-18.85,78,78,0,0,1-18.85-29c-3.45-8.88-7.55-22.22-8.67-46.78-1.21-26.57-1.47-34.53-1.47-101.8s.26-75.23,1.47-101.8c1.12-24.56,5.22-37.9,8.67-46.78a78,78,0,0,1,18.85-29,78,78,0,0,1,29-18.85c8.88-3.45,22.22-7.55,46.78-8.67,26.57-1.21,34.53-1.47,101.8-1.47m0-45.39c-68.42,0-77,.29-103.87,1.52S107,11.08,91,17.3A123.68,123.68,0,0,0,46.36,46.36,123.68,123.68,0,0,0,17.3,91c-6.22,16-10.48,34.34-11.7,61.15S4.08,187.58,4.08,256s.29,77,1.52,103.87S11.08,405,17.3,421a123.68,123.68,0,0,0,29.06,44.62A123.52,123.52,0,0,0,91,494.69c16,6.23,34.34,10.49,61.15,11.71s35.45,1.52,103.87,1.52,77-.29,103.87-1.52S405,500.92,421,494.69A128.74,128.74,0,0,0,494.69,421c6.23-16,10.49-34.34,11.71-61.15s1.52-35.45,1.52-103.87-.29-77-1.52-103.87S500.92,107,494.69,91a123.52,123.52,0,0,0-29.05-44.62A123.68,123.68,0,0,0,421,17.3c-16-6.22-34.34-10.48-61.15-11.7S324.42,4.08,256,4.08Z"
              transform="translate(-4.08 -4.08)"
            />
            <path
              d="M256,126.64A129.36,129.36,0,1,0,385.36,256,129.35,129.35,0,0,0,256,126.64ZM256,340a84,84,0,1,1,84-84A84,84,0,0,1,256,340Z"
              transform="translate(-4.08 -4.08)"
            />
            <circle cx="386.4" cy="117.44" r="30.23" />
          </svg>
        </a>
      </li>

      {/* nextdoor */}
      <li>
        <a
          href="https://nextdoor.com/pages/emerald-bay-physical-therapy-south-lake-tahoe-ca/"
          title="emerald bay physical therapy nextdoor"
        >
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 129.78 99.06"
          >
            <title>Emerald Bay Physical Therapy nextdoor</title>
            <g id="LG_GRN_LOGO" data-name="LG GRN LOGO">
              <path
                className="cls-1"
                d="M80.94,0c-17.82,0-33,8.18-41.52,20.7-.71,1-1.92,3.27-3.54,3.28-7.79.06-8.27-9.55-8.52-18.12A2.4,2.4,0,0,0,25,3.57L2.42,3.42A2.39,2.39,0,0,0,0,5.82v0C.52,26.79,4.37,41,29.74,46.67a3.05,3.05,0,0,1,2.36,3v47A2.37,2.37,0,0,0,34.47,99h22a2.39,2.39,0,0,0,2.39-2.39h0V48.12c0-10.79,7.65-23,22.16-23,13.81,0,22.15,12.24,22.15,23V96.67a2.39,2.39,0,0,0,2.39,2.39h21.91a2.39,2.39,0,0,0,2.38-2.39V44.52C129.79,19.58,108.51,0,80.94,0Z"
                transform="translate(-0.02)"
              />
            </g>
          </svg>
        </a>
      </li>
    </ul>

    {/* I need to add this to an auto update */}
    <h4 className="h5 h-center">
      {/* // ! fix the hover */}
      <Link to="/" title="to the front page">
        Emerald Bay Physical Therapy <ThisYear />
      </Link>
    </h4>
  </section>
);

export default FooterSocial;
