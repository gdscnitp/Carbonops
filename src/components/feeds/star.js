import { FaStar } from "react-icons/fa";
import styles from "./Card.module.css";

function Star({ filled, onClick }) {
  return (
    <FaStar 
     className={styles.starss}
     color={filled ? "#DFB300" : "#626262"} 
     onClick={onClick} />
  );
}
export default Star;