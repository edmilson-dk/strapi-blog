import React from "react";

import Articles from "../components/articles";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchStrapiApi } from "../lib/strapi-api";

const Home = ({ articles, categories, homepage }) => {
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.seo} />
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{homepage.hero.title}</h1>
          <Articles articles={articles} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories, homepage] = await Promise.all([
    fetchStrapiApi("/articles"),
    fetchStrapiApi("/categories"),
    fetchStrapiApi("/homepage"),
  ]);

  return {
    props: { articles, categories, homepage },
    revalidate: 1,
  };
}

export default Home;
