
import styles from "./Dashboard.module.css"

export default function Dashboard() {
    return (
        <div className={styles.container}>
            <div className={styles.profile_card_container}>
                <div className={styles.profile_image_container}>
                    <div>
                        <img src="/picture.png" />
                        <img src="/Ellipse 13.png" />
                    </div>
                </div>
                <div className={styles.profile_description}>
                    <p>NAME:<span>EMANUAEL FRANK</span></p>
                    <p>EMail</p>
                </div>
                <div className={styles.profile_stats}>
                    <div>
                        <p>Location</p>
                        <p>Roorkee</p>
                    </div>
                    <div>
                        <p>Your Score</p>
                        <p>8</p>
                    </div>
                    <div>
                        <p>Phone Number</p>
                        <p>343-34-432</p>
                    </div>
                    <div>
                        <p>Date of Last Report </p>
                        <p>3-4-12</p>
                    </div>
                </div>
            </div>
            <div className={styles.statistics}>
                <h1>Your STATS</h1>
            </div>
        </div>

    )
}