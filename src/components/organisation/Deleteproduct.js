// import styles from "./product.module.css"
// import Hack from "/public/images/organisationProfilee/Hack.png";
import styles from "./Delete.module.css";
// import heart from "/public/images/organisationProfilee/heart.png";
// import stars from "/public/images/organisationProfilee/stars.png";
import Image from "next/image";
import { MdDeleteForever } from "react-icons/Md";

const productpage = () => {
  return (
    <>
      <div className={styles.heading}>
        <h2>Deletion Page</h2>
        <hr className={styles.hr} />
      </div>

      {/* ___________________________________________________________________________ */}

      <section className={styles.servicescontainer}>
        <br />
        <div className={styles.services}>
          <div className={styles.box}>
            <div className={styles.product}>
                <div className={styles.fin}>

            <h4 >Product Name</h4>
                </div>

            </div>

            <div className={styles.spacing}>
              <div className={styles.dollar}>product no 1 </div>
            </div>
          </div>

          <div className={styles.container1}>
            <div className={styles.mar}>
              <h4 className={styles.product}>Product Price</h4>
            </div>
            <br />
            <h4 className={styles.dollars}>$45</h4>
            <br />
          </div>

          {/* <div className={styles.container2}>
            <div className={styles.pd}>
              <h4 className={styles.product}>Product Description </h4>
            </div>

            <p className={styles.dollar}>
              Lorem ipsum dolor sit amet,.
            </p>
          </div> */}

          <div className={styles.container2}>
            <h4 className={styles.description}>Delete </h4>
            <div className={styles.delete}>
             

             <MdDeleteForever size="37px" color="#D44638" />
           
         
         </div>
          </div>
        </div>

        <br />
        <div className={styles.services}>
          <div className={styles.box}>
            <div className={styles.product}>
          
                <div className={styles.fin}>

            <h4 >Product Name</h4>
              
</div>
            </div>

            <div className={styles.spacing}>
              <div className={styles.dollar}>product no 1 </div>
            </div>
          </div>

          <div className={styles.container1}>
            <div className={styles.mar}>
              <h4 className={styles.product}>Product Price</h4>
            </div>
            <br />
            <h4 className={styles.dollars}>$45</h4>
            <br />
          </div>

          {/* <div className={styles.container2}>
            <div className={styles.pd}>
              <h4 className={styles.product}>Product Description </h4>
            </div>

            <p className={styles.dollar}>
              Lorem ipsum dolor sit amet,.
            </p>
          </div> */}

          <div className={styles.container2}>
            <h4 className={styles.description}>Delete </h4>
            <div className={styles.delete}>
             

                <MdDeleteForever size="37px" color="#D44638" />
              
            
            </div>
          </div>
        </div>

       

        {/* ____________________ */}

        <br />
        <div className={styles.services}>
          <div className={styles.box}>
            <div className={styles.product}>
             
                <div className={styles.fin}>

            <h4 >Product Name</h4>
                </div>

            </div>

            <div className={styles.spacing}>
              <div className={styles.dollar}>product no 1 </div>
            </div>
          </div>

          <div className={styles.container1}>
            <div className={styles.mar}>
              <h4 className={styles.product}>Product Price</h4>
            </div>
            <br />
            <h4 className={styles.dollars}>$45</h4>
            <br />
          </div>

          {/* <div className={styles.container2}>
            <div className={styles.pd}>
              <h4 className={styles.product}>Product Description </h4>
            </div>

            <p className={styles.dollar}>
              Lorem ipsum dolor sit amet,.
            </p>
          </div> */}

          <div className={styles.container2}>
            <h4 className={styles.description}>Delete </h4>
            <div className={styles.delete}>
             

             <MdDeleteForever size="37px" color="#D44638" />
           
         
         </div>
          </div>
        </div>

       



     
        <br />
        <br />
        <br />
      </section>
    </>
  );
};

export default productpage;
