module.exports = {
  siteMetadata: {
    title: "Emerald Bay Physical Therapy",
    siteUrl: "https://emeraldbay.physio",
    url: "https://emeraldbay.physio", // No trailing slash allowed!
    description:
      "Emerald Bay Physical Therapy is a comprehensive center for orthopedic and manual physical therapy.",
    image: "/images/treating.jpg" // Path to your image you placed in the 'static' folder
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Emerald Bay Physical Therapy`,
        short_name: `EBPT`,
        start_url: `/`,
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
  ],
};
