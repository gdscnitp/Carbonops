import styles from "./orgprofile.module.css"
import Image from "next/image";
import undraw from "/public/images/organisationProfilee/undraw.png"

// import goomgle from "/public/images/organisationProfilee/goomgle.png"
import Hack from "/public/images/organisationProfilee/Hack.png"
// import fb from "/public/images/organisationProfilee/fb.png"
// import twitt from "/public/images/organisationProfilee/twitt.png"
import { FcGoogle } from 'react-icons/fc';
import { FiTwitter } from 'react-icons/fi';
import { GrFacebook } from 'react-icons/gr';


const orgprofile = () => {
  return (
    <>

      <div className={styles.cont1}>
        <h2 className={styles.orgN}>Organisation Name</h2>
        <span className={styles.welcome}> Welcome to our</span> <span className={styles.greenF}> <strong>Green Family</strong> </span>
        <p className={styles.cont2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, reprehenderit tempora impedit itaque pariatur repellat Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia temporibus, rem natus minima, placeat sapiente incidunt error magnam atque minus consequatur cupiditate! consequatur nostrum nisi officiis rem!</p>
      </div>


      <div className={styles.cont3}>
        <Image
          src={undraw}
          alt="Home Image"
          width={250}
          height={190}
        />
      </div>



      <button className={styles.buton}>
        Know more
      </button>
      <button className={styles.buton2}>
        Donate/Sell
      </button>

      <div className={styles.ordet}>
        <h2> <strong>Organisation Details</strong></h2>
      </div>


      <div className={styles.bcc}>


        <div className={styles.torg}>

          <h3 className={styles.torgg}>Type Of Org </h3>
          <h3 className={styles.bol}> Based in *Location*</h3>
          <br />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste maiores alias quas esse assumenda odit velit facilis laboriosam, similique ipsa rem labore iure blanditiis illum ullam aliquam ipsam dolore temporibus quaerat exercitationem suscipit, veritatis quis tempore delectus! Autem, amet in. Doloribus modi odit maxime ab sit debitis, neque iste numquam!</p>
          <br />
          <hr className={styles.hr} />
          <br />
          <p className={styles.bol}>
            Contact Us
          </p>
          <br />
          <div className={styles.cont4}>
            <FcGoogle/>
            {/* <Image
              src={goomgle}
              alt="Home Image"
              width={40}
              height={32}
            /> */}
          </div>
          <div className={styles.cont5}>
          <GrFacebook/>
            {/* <Image
              src={fb}
              alt="Home Image"
              width={37}
              height={32}
            /> */}
          </div>
          <div className={styles.cont6}>
          < FiTwitter/>
            {/* <Image
              src={twitt}
              alt="Home Image"
              width={50}
              height={32}
            /> */}
          </div>
        </div>
      </div>



      <div className={styles.products}>
        <h2>Our Products</h2>
      </div>


      {/* ---------------------------------------------------------------------- */}




      <div className={styles.services1}>



        <div className={styles.box1}>
          <Image
            src={Hack}
            alt="Hack Image"
            width={320}
            height={130}
          />

          <h2 className={styles.hsecondary}>Product Name</h2>
          <p className={styles.center}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, eaque. Aliquam dolor
            . Quas auem fugiat dolorme <span className={styles.descr}> *DESCRIPTION*</span></p>

          <div className={styles.card}>

            <div className={styles.btn1}>
              $45
            </div>

            <div className={styles.btn2}>
              Buy Now
            </div>

          </div>


        </div>

        <div className={styles.box1}>
          <Image
            src={Hack}
            alt="Hack Image"
            width={320}
            height={130}
          />
          <h2 className={styles.hsecondary}>Product Name</h2>
          <p className={styles.center}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, eaque. Aliquam dolor
            . Quas autem fugiat dolore <span className={styles.descr}> *DESCRIPTION*</span></p>

          <div className={styles.card}>

            <div className={styles.btn1}>
              $45
            </div>

            <div className={styles.btn2}>
              Buy Now
            </div>

          </div>

        </div>


        <div className={styles.box1}>
          <Image
            src={Hack}
            alt="Hack Image"
            width={320}
            height={130}
          />
          <h2 className={styles.hsecondary}>Product Name</h2>
          <p className={styles.center}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, eaque. Aliquam dolor
            . Quas autem fugiat dolore  <span className={styles.descr}> *DESCRIPTION*</span></p>

          <div className={styles.card}>

            <div className={styles.btn1}>
              $45
            </div>

            <div className={styles.btn2}>
              Buy Now
            </div>

          </div>

        </div>

        <div className={styles.box1}>
          <Image
            src={Hack}
            alt="Hack Image"
            width={320}
            height={130}
          />
          <h2 className={styles.hsecondary}>Product Name</h2>
          <p className={styles.center}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, eaque. Aliquam dolor
            . Quas autem fugiat dolore  <span className={styles.descr}> *DESCRIPTION*</span></p>

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




      {/* ------------------------------------------------------------------------------------- */}



      <div className={styles.services2}>
        <div className={styles.box2}>
          <Image
            src={Hack}
            alt="Hack Image"
            width={320}
            height={130}
          />
          <h2 className={styles.hsecondary}>Product Name</h2>
          <p className={styles.center}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, eaque. Aliquam dolor
            . Quas auem fugiat dolorse  <span className={styles.descr}> *DESCRIPTION*</span></p>

          <div className={styles.card}>

            <div className={styles.btn1}>
              $45
            </div>

            <div className={styles.btn2}>
              Buy Now
            </div>

          </div>

        </div>

        <div className={styles.box2}>
          <Image
            src={Hack}
            alt="Hack Image"
            width={320}
            height={130}
          />
          <h2 className={styles.hsecondary}>Product Name</h2>
          <p className={styles.center}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, eaque. Aliquam dolor
            . Quas autem fugiat dolore  <span className={styles.descr}> *DESCRIPTION*</span></p>

          <div className={styles.card}>

            <div className={styles.btn1}>
              $45
            </div>

            <div className={styles.btn2}>
              Buy Now
            </div>

          </div>
        </div>


        <div className={styles.box2}>
          <Image
            src={Hack}
            alt="Hack Image"
            width={320}
            height={130}
          />
          <h2 className={styles.hsecondary}>Product Name</h2>
          <p className={styles.center}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, eaque. Aliquam dolor
            . Quas autem fugiat dolore  <span className={styles.descr}> *DESCRIPTION*</span>.</p>

          <div className={styles.card}>

            <div className={styles.btn1}>
              $45
            </div>

            <div className={styles.btn2}>
              Buy Now
            </div>

          </div>
        </div>

        <div className={styles.box2}>
          <Image
            src={Hack}
            alt="Hack Image"
            width={320}
            height={130}
          />
          <h2 className={styles.hsecondary}>Product Name</h2>
          <p className={styles.center}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, eaque. Aliquam dolor
            . Quas autem fugiat dolore  <span className={styles.descr}> *DESCRIPTION*</span></p>

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


      <button className={styles.viewmore}>
        View more
      </button>

    </>
  )
}

export default orgprofile

