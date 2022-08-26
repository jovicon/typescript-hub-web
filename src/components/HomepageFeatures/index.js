import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Todo sobre Typescript",
    src: require("@site/static/img/home/arcade.png").default,
    description: (
      <>
        Nuestra foco como comunidad es concentrar el amplio conocimiento
        extendido de typescript en un lugar confiable, de libre uso, facil
        acceso y alta calidad.
      </>
    ),
  },
  {
    title: "Apasionados por aprender",
    src: require("@site/static/img/home/education.png").default,
    description: (
      <>
        Si tu interes es aprender, este es el lugar correcto, puedes buscar en
        nuestra biblioteca, conocer expertos en nuestro canal de discord o
        realizar pedidos de tutoriales.
      </>
    ),
  },
  {
    title: "Dedicados a enseñar",
    src: require("@site/static/img/home/level-up.png").default,
    description: (
      <>
        Si eres especialista en algún framework, librería o SDK desarrollado con
        typescript, este es el lugar para que puedas compartir tutoriales,
        buenas practicas o almacenar documentación para ti y los demás.
      </>
    ),
  },
  {
    title: "Compartimos y avanzamos",
    src: require("@site/static/img/home/community.png").default,
    description: (
      <>
        Somos una comunidad en continuo crecimiento y por eso nos interesa tu
        opinión, tus ideas y aportes. Unete a nuestras redes sociales y canal de
        discord. Te esperamos.
      </>
    ),
  },
];

function Feature({ src, title, description }) {
  return (
    <div className={clsx("col col--3")}>
      <div className="text--center">
        <img src={src} className={styles.homeMainImg} role="img" />
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
