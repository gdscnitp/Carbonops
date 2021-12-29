import Head from 'next/head'
import Navbar from '../src/components/navbar/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Environment Awareness App</title>
        <meta name="description" content="" />
      </Head>

      <Navbar action1="" action2="Login" buttonText="Sign-Up" />

    </div>
  )
}
