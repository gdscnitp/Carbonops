import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Company from '/public/images/organisationDash/Logo.png';
import Product from '/public/images/organisationDash/Product.png';
import styles from './Content.module.css';

function Content(props) {
  // console.log(props,"props")

  return (
    <>
      <div className={styles.dashPage}>
        <div className={styles.container1}>
          <div className={styles.LeftPosition}>
            <div className={styles.img}>
              <Image
                src={Company}
                placeholder="blur"
                alt="company logo"
                width={350}
                height={300}
              />
            </div>
          </div>
          
          <div className={styles.RightPosition}>
            <div className={styles.organisation}>

               <div className={styles.organisationData}>
                 <div className={styles.row}>
                 <span className={styles.dataSpan}>
                  Organisation ID 
                 </span>
                 : {props.data[0].organisationId}
                 </div>

                 <div className={styles.row}>
                 <span className={styles.dataSpan}>
                  Organisation Name 
                  </span>
                  : {props.data[0].organisationName}
                 </div>

                 <div className={styles.row}>
                 <span className={styles.dataSpan}>
                  Type 
                  </span>
                  : {props.data[0].type}
                 </div>

                 <div className={styles.row}>
                  <span className={styles.dataSpan}>
                   Mail-ID 
                  </span>
                    : {props.data[0].mailId}
                 </div>

                 <div className={styles.row}>
                 <span className={styles.dataSpan}>                 
                  Contact
                  </span>                  
                   : {props.data[0].contact}
                 </div>

                 <div className={styles.row}>
                 <span className={styles.dataSpan}> Area </span>  :  {props.data[0].location[0].area } , <br />
                 <span className={styles.dataSpan}> City</span> : {props.data[0].location[0].city }, <br />
                 <span className={styles.dataSpan}> Pincode </span> : {props.data[0].location[0].pincode } , <br />
                 <span className={styles.dataSpan}>
                  State 
                  </span> : {props.data[0].location[0].state } , <br />
                  <span className={styles.dataSpan}>
                  Nation 
                  </span> : {props.data[0].location[0].nation } ,
                 </div>
                 
                 {/* wasteRequirements will only appear when dealsProducts is true  */}
                {props.data[0].dealsProducts && <div className={styles.row}>
                <span className={styles.dataSpan}> Waste Requirements</span>  : {props.data[0].wasteRequirements}
                 </div>}
               </div>

            </div>
          </div>
        </div>
        <div className={styles.container2}>
          <div className={styles.organDetails}>
            {/* <strong className={styles.top}>Organisation Details</strong>
              <br />
              <br /> */}
            <p className={styles.topic}>Update Details</p>
            <div>
              <input
                type="name"
                placeholder="Organisation Name"
                className={styles.input}
              />
            </div>
            <div>
              <input
                type="type"
                placeholder="Organisation Type"
                className={styles.input}
              />
            </div>

            <div>
              <input
                type="location"
                placeholder="Organisation Location"
                className={styles.input}
              />
            </div>

            <p className={styles.topic}>Social Media Handles</p>
            <div>
              <input
                type="facebook"
                placeholder="Facebook"
                className={styles.input}
              />
            </div>
            <div>
              <input
                type="twitter"
                placeholder="Twitter"
                className={styles.input}
              />
            </div>
            <div>
              <input
                type="linkedin"
                placeholder="Linkedin"
                className={styles.input}
              />
            </div>
            <div className={styles.alignCenter}>
              <Link href=" ">
                <a className={styles.button}>Save</a>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.container2}>
          <div className={styles.organProducts}>
            <div className={styles.img}>
              <Image
                src={Product}
                placeholder="blur"
                alt="company logo"
                width={200}
                height={300}
              />
            </div>
            <br />
            <br />
            <div className={styles.topic}>Product Name</div>
            <input
              type="name"
              placeholder="Product Name"
              className={styles.input}
            />
            <div className={styles.topic}>Product Description</div>
            <textarea
              type="description"
              placeholder="Product Description"
              className={styles.input}
              // cols="40"
              // rows="5"
            />
            <div className={styles.topic}>Product URL</div>
            <input
              type="url"
              placeholder="Product URL"
              className={styles.input}
            />
            <div className={styles.topic}>Product Price</div>
            <input
              type="price"
              placeholder="Product Price"
              className={styles.input}
            />
            <div className={styles.alignCenter}>
              <Link href=" ">
                <a className={styles.button}>Add</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
