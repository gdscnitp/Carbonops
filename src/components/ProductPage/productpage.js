import styles from "./product.module.css"
import Hack from "/public/images/organisationProfilee/Hack.png"
import heart from "/public/images/organisationProfilee/heart.png"
import stars from "/public/images/organisationProfilee/stars.png"
import Image from "next/image";

const productpage = () => {
    return (
        <>

            <button className={styles.dash}>
                   DashBoard
            </button>

            <div className={styles.heading}>
                <h2>Organisation Name</h2>
                <hr className={styles.hr} />
            </div>

            {/* ___________________________________________________________________________ */}


            <section className={styles.servicescontainer}>

            <br />
            <div className={styles.services}>
                <div className={styles.box}>
                    <Image
                        src={Hack}
                        alt="Hack Image"
                        width={250}
                        height={170}
                    />
                </div>

                <div className={styles.heart}>
                    <Image
                        src={heart}
                        alt="Heart Image"
                        width={34}
                        height={31}
                    />
                </div>


                <div className={styles.container1}>
                    <h3 className={styles.product}>Product Name</h3>
                    <br />
                    <h4 className={styles.dollar}>$45</h4>
                    <br />
                    <div className={styles.stars}>
                        <Image
                            src={stars}
                            alt="stars Image"
                            width={114}
                            height={26}
                        />
                    </div>
                    <button className={styles.btn}>
                        Book Now
                    </button>
                </div>


                <div className={styles.container2}>
                    <h4 className={styles.description}>DESCRIPTION </h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi aliquid debitis ratione recusandae vel autem, labore laborum dolor nam, commodi asperiores doloribus animi?</p>
                </div>


            </div>
           

        <br />
      
            <div className={styles.services}>
                <div className={styles.box}>
                    <Image
                        src={Hack}
                        alt="Hack Image"
                        width={250}
                        height={170}
                    />
                </div>

                <div className={styles.heart}>
                    <Image
                        src={heart}
                        alt="Heart Image"
                        width={34}
                        height={31}
                    />
                </div>


                <div className={styles.container1}>
                    <h3 className={styles.product}>Product Name</h3>
                    <br />
                    <h4 className={styles.dollar}>$45</h4>
                    <br />
                    <div className={styles.stars}>
                        <Image
                            src={stars}
                            alt="stars Image"
                            width={114}
                            height={26}
                        />
                    </div>
                    <button className={styles.btn}>
                        Book Now
                    </button>
                </div>


                <div className={styles.container2}>
                    <h4 className={styles.description}>DESCRIPTION </h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi aliquid debitis ratione recusandae vel autem, labore laborum dolor nam, commodi asperiores doloribus animi?</p>
                </div>


            </div>

            {/* ____________________ */}


            <br />
      
      <div className={styles.services}>
          <div className={styles.box}>
              <Image
                  src={Hack}
                  alt="Hack Image"
                  width={250}
                  height={170}
              />
          </div>

          <div className={styles.heart}>
              <Image
                  src={heart}
                  alt="Heart Image"
                  width={34}
                  height={31}
              />
          </div>


          <div className={styles.container1}>
              <h3 className={styles.product}>Product Name</h3>
              <br />
              <h4 className={styles.dollar}>$45</h4>
              <br />
              <div className={styles.stars}>
                  <Image
                      src={stars}
                      alt="stars Image"
                      width={114}
                      height={26}
                  />
              </div>
              <button className={styles.btn}>
                  Book Now
              </button>
          </div>


          <div className={styles.container2}>
              <h4 className={styles.description}>DESCRIPTION </h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi aliquid debitis ratione recusandae vel autem, labore laborum dolor nam, commodi asperiores doloribus animi?</p>
          </div>


      </div>

<br />
<br />
<br />
            </section>




















        </>
    )
}

export default productpage
