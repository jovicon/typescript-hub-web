import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Todo sobre Typescript",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Si estás buscando un tutorial sobre typescript, este es el lugar. Y si
        no lo encuentras, puedes crearlo tu mismo para compartirlo con otros
        desarrolladores.
      </>
    ),
  },
  {
    title: "Apasionados por aprender y enseñar",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Si eres especialista en algún framework, librería o SDK con typescript,
        este es el lugar para que puedas compartir y guardar conocimientos. O si
        vienes para aprender, puedes buscarlo en nuestra biblioteca o conocer
        alguien que lo sepa y luego compartirlo con nosotros.
      </>
    ),
  },
  {
    title: "Avanzamos y compartimos",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Participa en la comunidad de desarrolladores Typescript y comparte tu
        experiencia con nosotros, siguenos en twitter y únete a nuestro canal de
        discord.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
