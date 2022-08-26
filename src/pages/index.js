import React from "react";

import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import indexStyles from "./index.module.css";

const love = require("@site/static/img/home/love.png").default;

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", indexStyles.heroBanner)}>
      <div className="container">
        <div class="row">
          <div class="col col--12 flex-container">
            <h1 className="hero__title padding--sm">{siteConfig.title}</h1>
            <img src={love} className="icon-desktop" />
          </div>
        </div>

        <p className="hero__subtitle white">{siteConfig.tagline}</p>
        <p className="hero__subtitle white">
          Este hub se encuentra en desarrollo y creciendo cada dia.
        </p>

        {/* TODO: Agregar URL para postular */}
        {/* <p className="hero__subtitle white">
          Postula aqui para ser colaborador.
        </p> */}
        <div className={indexStyles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Ir a la biblioteca 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Unete a ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
