import Head from "next/head";
import styles from "./orgprofile.module.css"
import Image from "next/image";
import Navbar from "../components/navbar/Navbar";

const orgprofile = () => {
  return (
    <>
      <Head>
        <title>
          OrgProfile
        </title>
      </Head>
      <Navbar />


      <div className={styles.orgo}>



        <div className={styles.cont1}>
          <h2 className={styles.orgN}>Organisation Name</h2>
          <span className={styles.welcome}> Welcome to our</span> <span className={styles.greenF}> <strong>Green Family</strong> </span>
          <p className={styles.cont2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, reprehenderit tempora impedit itaque pariatur repellat Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia temporibus, rem natus minima, placeat sapiente incidunt error magnam atque minus consequatur cupiditate! consequatur nostrum nisi officiis rem!</p>
        </div>


        <div className={styles.cont3}>
          <Image
            src="/undraw.png"
            alt="Home Image"
            width={250}
            height={190}
          />
        </div>



        <div className={styles.buton}>
          Know more
        </div>

        <div className={styles.ordet}>
          <h2> <strong>Organisation Details</strong></h2>
        </div>


        <div className={styles.bcc}>


          <div className={styles.torg}>

            <h3 className={styles.torgg}>Type Of Org </h3>
            <h3 className={styles.bol}> Based on Location</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste maiores alias quas esse assumenda odit velit facilis laboriosam, similique ipsa rem labore iure blanditiis illum ullam aliquam ipsam dolore temporibus quaerat exercitationem suscipit, veritatis quis tempore delectus! Autem, amet in. Doloribus modi odit maxime ab sit debitis, neque iste numquam!</p>

            <hr className={styles.hr} />

            <p className={styles.bol}>
              Contact Us
            </p>

            <div className={styles.cont4}>
              <Image
                src="/group.png"
                alt="Home Image"
                width={150}
                height={30}
              />
            </div>
          </div>
        </div>



        <div className={styles.products}>
          <h2>Our Products</h2>
        </div>


        {/* ---------------------------------------------------------------------- */}

        <section className={styles.servicescontainer}>


          <div className={styles.services}>
            <div className={styles.box}>
              <Image
                src="/Hack.png"
                alt="Hack Image"
                width={320}
                height={130}
              />
              <h2 className={styles.hsecondary}>Product Name</h2>
              <p className={styles.center}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, eaque. Aliquam dolor
                . Quas auem fugiat dolore quae.</p>

              <div className={styles.card}>

                <div className={styles.btn1}>
                  $45
                </div>

                <div className={styles.btn2}>
                  Buy Now
                </div>

              </div>


            </div>

            <div className={styles.box}>
              <Image
                src="/Hack.png"
                alt="Hack Image"
                width={320}
                height={130}
              />
              <h2 className={styles.hsecondary}>Product Name</h2>
              <p className={styles.center}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, eaque. Aliquam dolor
                . Quas autem fugiat dolore quae.</p>

              <div className={styles.card}>

                <div className={styles.btn1}>
                  $45
                </div>

                <div className={styles.btn2}>
                  Buy Now
                </div>

              </div>

            </div>


            <div className={styles.box}>
              <Image
                src="/Hack.png"
                alt="Hack Image"
                width={320}
                height={130}
              />
              <h2 className={styles.hsecondary}>Product Name</h2>
              <p className={styles.center}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, eaque. Aliquam dolor
                . Quas autem fugiat dolore quae.</p>

              <div className={styles.card}>

                <div className={styles.btn1}>
                  $45
                </div>

                <div className={styles.btn2}>
                  Buy Now
                </div>

              </div>

            </div>

            <div className={styles.box}>
              <Image
                src="/Hack.png"
                alt="Hack Image"
                width={320}
                height={130}
              />
              <h2 className={styles.hsecondary}>Product Name</h2>
              <p className={styles.center}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, eaque. Aliquam dolor
                . Quas autem fugiat dolore quae.</p>

              <div className={styles.card}>

                <div className={styles.btn1}>
                  $45
                </div>

                <div className={styles.btn2}>
                  Buy Now
                </div>

              </div>

            </div>

          </div>
        </section>



        {/* ------------------------------------------------------------------------------------- */}

        <section className={styles.servicescontainer2}>

          <div className={styles.services}>
            <div className={styles.box}>
              <Image
                src="/Hack.png"
                alt="Hack Image"
                width={320}
                height={130}
              />
              <h2 className={styles.hsecondary}>Product Name</h2>
              <p className={styles.center}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, eaque. Aliquam dolor
                . Quas auem fugiat dolore quae.</p>

              <div className={styles.card}>

                <div className={styles.btn1}>
                  $45
                </div>

                <div className={styles.btn2}>
                  Buy Now
                </div>

              </div>

            </div>

            <div className={styles.box}>
              <Image
                src="/Hack.png"
                alt="Hack Image"
                width={320}
                height={130}
              />
              <h2 className={styles.hsecondary}>Product Name</h2>
              <p className={styles.center}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, eaque. Aliquam dolor
                . Quas autem fugiat dolore quae.</p>

              <div className={styles.card}>

                <div className={styles.btn1}>
                  $45
                </div>

                <div className={styles.btn2}>
                  Buy Now
                </div>

              </div>
            </div>


            <div className={styles.box}>
              <Image
                src="/Hack.png"
                alt="Hack Image"
                width={320}
                height={130}
              />
              <h2 className={styles.hsecondary}>Product Name</h2>
              <p className={styles.center}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, eaque. Aliquam dolor
                . Quas autem fugiat dolore quae.</p>

              <div className={styles.card}>

                <div className={styles.btn1}>
                  $45
                </div>

                <div className={styles.btn2}>
                  Buy Now
                </div>

              </div>
            </div>

            <div className={styles.box}>
              <Image
                src="/Hack.png"
                alt="Hack Image"
                width={320}
                height={130}
              />
              <h2 className={styles.hsecondary}>Product Name</h2>
              <p className={styles.center}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, eaque. Aliquam dolor
                . Quas autem fugiat dolore quae.</p>

              <div className={styles.card}>

                <div className={styles.btn1}>
                  $45
                </div>

                <div className={styles.btn2}>
                  Buy Now
                </div>

              </div>


            </div>

          </div>
        </section>







      </div>
    </>
  )
}

export default orgprofile
