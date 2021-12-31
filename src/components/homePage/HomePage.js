import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./HomePage.module.css";
import home from "/public/images/homePage/home.png";
import services from "/public/images/homePage/services.png";
import graph from "/public/images/homePage/graph.png";
import topOrganisations from "/public/images/homePage/topOrganisations.png";

export default function Navbar() {
  return (
    <>
      <div className={styles.homePage}>
        <div className={styles.container}>
          <div className={`${styles.gridItemLeft} ${styles.homeLeft}`}>
            <a className={styles.topText}>
              <div className={styles.slideLeft}>
                A place to <strong> calculate </strong> <br />
              </div>

              <div className={styles.slideRight}>
                and <strong> maintain </strong> your
              </div>
            </a>
            <a className={styles.bottomText}>Carbon Footprints</a>

            <Link href="/">
              <a className={styles.button}>Calculate now &rarr;</a>
            </Link>
          </div>

          <div className={`${styles.gridItemRight} ${styles.homeRight}`}>
            <Image
              src={home}
              placeholder="blur"
              alt="Home Image"
              width={450}
              height={400}
            />
          </div>
        </div>
        {/* ****************************************** */}

        {/* OUR SERVICES PART */}
        <div className={styles.ourServices}>
          <a className={styles.textHeading}>
            The awesome <strong> services </strong> we provide for the
            individuals and <br /> for the startups to excel in their business.
          </a>
          <div className={styles.container}>
            <div className={styles.gridItemLeft}>
              <Image
                src={services}
                placeholder="blur"
                alt="Home Image"
                width={200}
                height={150}
              />
              <br />
              <p>
                Lorem Ipsum and something that can look good here. Lorem Ipsum
                and something that can look good here.
              </p>
            </div>

            <div className={styles.gridItemRight}>
              <Image
                src={services}
                placeholder="blur"
                alt="Home Image"
                width={200}
                height={150}
              />
              <br />
              <p>
                Lorem Ipsum and something that can look good here. Lorem Ipsum
                and something that can look good here.
              </p>
            </div>
          </div>
        </div>
        {/* ******************************************/}

        {/* THE GRAPH PART  */}

        <div className={styles.graphPart}>
          <div className={styles.container}>
            <div className={styles.gridItemLeft}>
              <Image
                src={graph}
                placeholder="blur"
                alt="Home Image"
                width={500}
                height={400}
              />
            </div>

            <div className={styles.gridItemRight}>
              <a href="/">
                The carbon <strong>graph</strong>
              </a>{" "}
              <br />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Similique rerum dolores quo tempore aliquid velit blanditiis
                architecto, natus quae autem, voluptatum iure sapiente. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Autem dolores
                reiciendis odit impedit voluptatum deserunt officiis quod
                molestiae porro! Esse?{" "}
              </p>
            </div>
          </div>
        </div>
        {/* ****************************************** */}

        {/* THE TOP ORGANISATIONS PART  */}
        <div className={styles.topOrgs}>
          <a className={styles.textHeading}>
            These are the featured top two <strong> organisations </strong>{" "}
            <br />
            which performed best in the last contest.
          </a>
          <div className={styles.container}>
            <div className={styles.gridItemLeft}>
              <Image
                src={topOrganisations}
                placeholder="blur"
                alt="Home Image"
                width={200}
                height={200}
              />
              <br />
              <p>
                Lorem Ipsum and something that can look good here. Lorem Ipsum
                and something that can look good here. <br />
                -The Green Builders
              </p>
            </div>

            <div className={styles.gridItemRight}>
              <Image
                src={topOrganisations}
                placeholder="blur"
                alt="Home Image"
                width={200}
                height={200}
              />
              <br />
              <p>
                Lorem Ipsum and something that can look good here. Lorem Ipsum
                and something that can look good here. <br />
                -The Green Builders
              </p>
            </div>
          </div>
        </div>
        {/* ******************************************* */}
      </div>
    </>
  );
}
