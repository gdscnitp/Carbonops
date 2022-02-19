import React,{useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Company from '/public/images/organisationDash/Logo.png';
import Product from '/public/images/organisationDash/Product.png';
import styles from './Content.module.css';
import Delete from './Deleteproduct';

export default function Content(props) {
  // console.log(props,"props")
  const organisationid= (props.data[0].organisationId);
  const mailOrg = (props.data[0].mailId)
  // console.log(organisationid,"organisationid")

  const [updateDetails,setUpdateDetails] = useState({
    organisationName:"",
    typeOfOrganisation:"",
    description:"",
    website:"",
    linkedin:"",
    area:"",
    city:"",
    pincode:"",
    state:"",
    nation:"",
    mailOrganisation:mailOrg,
  })

  const [productDetails,setProductDetails] = useState({
    productName:"",
    description:"",
    productUrl:"",
    price:"",
    productImage:"",
    isRecyclable:false,
    organisationId :organisationid,
  });

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setUpdateDetails({
      ...updateDetails,
      [name]: value,
    });
  };

  const handleProductChange = (e) => {
    const { name, value } = e.target;
   setProductDetails({
      ...productDetails,
      [name]: value,
    });
  };

  const handleUpdate = (updates) => {
    updates.preventDefault();
    console.log(updateDetails)
    props.onUpdateDetails(updateDetails)
  };

  const handleBool = () => {
    setProductDetails({
      ...productDetails,
      isRecyclable: !(productDetails.isRecyclable),
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(productDetails.organisationId,"organisationId")
    props.onAddProduct(productDetails);
  };

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
                  Organisation Description 
                  </span>
                  : {props.data[0].description}
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
                <div>kjfdfnkjdfngjkdf</div>
                 </div>}
               </div>

            </div>
          </div>
        </div>




{/* ORGANISATION UPdATE DETAILS PART  */}
        <div className={styles.container2}>
          <div className={styles.organDetails}>
            <p className={styles.topic}>Update Details</p>
            <div>
              <input
                type="text"
                placeholder="Organisation Name"
                className={styles.input}
                id="organisationName"
                name="organisationName"
                value={updateDetails.organisationName}
                onChange={handleUpdateChange}
                required
                autoComplete='off'
              />
            </div>

            <select
              className={styles.orgType}
              id="typeOfOrganisation"
              name="typeOfOrganisation"
              value={updateDetails.typeOfOrganisation}
              onChange={handleUpdateChange}
              required
              autoComplete="off"
            >
              <option value="" disabled >Select your Organisation type</option>
              <option value="Cooperatives">Cooperatives</option>
              <option value="Self help groups">Self help groups</option>
              <option value="Private">Private </option>
            </select>

            <div>
              <textarea
                placeholder="Organisation Description"
                className={styles.input}
                row="3"
                id="description"
                name="description"
                value={updateDetails.description}
                onChange={handleUpdateChange}
                required
                autoComplete='off'
              />
            </div>

            <div>
              <input
                type="url"
                placeholder="Youe Website Url"
                className={styles.input}
                id="website"
                name="website"
                value={updateDetails.website}
                onChange={handleUpdateChange}
                required
                autoComplete='off'
              />
            </div>

            <div>
              <input
                type="url"
                placeholder="Linkedin"
                className={styles.input}
                id="linkedin"
                name="linkedin"
                value={updateDetails.linkedin}
                onChange={handleUpdateChange}
                required
                autoComplete='off'
              />
            </div>
            
            <p className={styles.topic}>Your Location</p>
            <div>
              <input
                type="text"
                placeholder=" Area"
                className={styles.input}
                id="area"
                name="area"
                value={updateDetails.area}
                onChange={handleUpdateChange}
                required
                autoComplete='off'
              />
            </div>


            <div>
              <input
                type="text"
                placeholder=" City"
                className={styles.input}
                id="city"
                name="city"
                value={updateDetails.city}
                onChange={handleUpdateChange}
                required
                autoComplete='off'
              />
            </div>

            <div>
              <input
                type="text"
                placeholder=" State"
                className={styles.input}
                id="state"
                name="state"
                value={updateDetails.state}
                onChange={handleUpdateChange}
                required
                autoComplete='off'
              />
            </div>

            <div>
              <input
                type="number"
                placeholder=" Pincode"
                className={styles.input}
                id="pincode"
                name="pincode"
                value={updateDetails.pincode}
                onChange={handleUpdateChange}
                required
                autoComplete='off'
              />
            </div>
            <div>
              <input
                type="text"
                placeholder=" Country"
                className={styles.input}
                id="nation"
                name="nation"
                value={updateDetails.nation}
                onChange={handleUpdateChange}
                required
                autoComplete='off'
              />

            </div>

      
            <div className={styles.alignCenter}>
              <Link href=" ">
                <a className={styles.button} onClick={handleUpdate}>Save</a>
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
              id="productName"
              name="productName"
              value={productDetails.productName}
              onChange={handleProductChange}
              required
              autoComplete="off"
            />
            <div className={styles.topic}>Product Description</div>
            <textarea
              type="description"
              placeholder="Product Description"
              className={styles.input}
              id="description"
              name="description"
              value={productDetails.description}
              onChange={handleProductChange}
              required
              autoComplete="off"
              // cols="40"
              // rows="5"
            />
            <div className={styles.topic}>Product URL</div>
            <input
              type="url"
              placeholder="Product URL"
              className={styles.input}
              id="productUrl"
              name="productUrl"
              value={productDetails.productUrl}
              onChange={handleProductChange}
              required
              autoComplete="off"
            />
            <div className={styles.topic}>Product Price</div>
            <input
              type="number"
              placeholder="Product Price(in rupees)"
              className={styles.input}
              id="price"
              name="price"
              value={productDetails.price}
              onChange={handleProductChange}
              required
              autoComplete="off"
            />

            <div className={styles.topic}>Product Image</div> 
            <input
              type="url"
              placeholder="Product Image(url)"
              className={styles.input}
              id="productImage"
              name="productImage"
              value={productDetails.productImage}
              onChange={handleProductChange}
              required
              autoComplete="off"
            /> 

            <div className={styles.topic}>Is Your Product Recyclable?</div>
            <input
              type="checkbox"
              className={styles.checkbox}
              id="isRecyclable"
              name="isRecyclable"
              value={productDetails.isRecyclable}
              onChange={handleBool}
              required
            />
            <div className={styles.alignCenter}>
              <Link href=" ">
                <a onClick={handleSubmit} className={styles.button}>Add</a>
              </Link>
        

            </div>




          </div>
        </div>
      <Delete/>
      </div>
    </>
  );
}


