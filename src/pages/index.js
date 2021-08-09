import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "Getting Started",
    imageUrl: "img/undraw_docusaurus_mountain.svg",
    description: (
      <>
        New to the protocol or just want a quick overview? Check out the Getting
        Started documentation to start your pickling journey.
      </>
    ),
    btnLink: "getting-started/doc1",
    btnLabel: "Start Here",
  },
  {
    title: "Guides and Tutorials",
    imageUrl: "img/undraw_docusaurus_tree.svg",
    description: (
      <>
        Is there something specific you want to do with the Xabelle Protocol? If so, check out our handy guides and tutorials.
      </>
    ),
    btnLink: "guides/doc1",
    btnLabel: "Read the Guides",
  },
  {
    title: "Developer Documemntation",
    imageUrl: "img/undraw_docusaurus_react.svg",
    description: (
      <>
        Are you a developer looking to dig into the code and maybe even build on
        top of XAL? Our developer documentation is the perfect place for you.
      </>
    ),
    btnLink: "docs/doc1",
    btnLabel: "Read the Docs",
  },
];

function Feature({ imageUrl, title, description, btnLink, btnLabel }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
      <Link
        className={clsx(
          "button button--outline button--secondary button--lg",
          styles.getStarted,
          styles.buttonLong,
        )}
        to={useBaseUrl(btnLink)}
      >
        {btnLabel}
      </Link>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Xabelle Documentation"
    >
      <header
        className={clsx("hero hero--primary", styles.heroBanner)}
        style={{ backgroundColor: `#6a0dad` }}
      >
        <div className="container">
          <img
            src="img/logo.png"
            alt="logo"
            style={{ maxWidth: `480px`, width: `100%` }}
          />
          <h2 className={styles.heroSubtitle}>Documentation</h2>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted,
              )}
              to={useBaseUrl("docs/doc1")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
