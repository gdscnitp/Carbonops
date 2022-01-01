import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Company from '/public/images/organisationDash/Logo.png';
import Product from '/public/images/organisationDash/Product.png';
import styles from './content.module.css';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { useState } from 'react';

function content() {
  const [profile, setProfile] = useState('');
  const [description, setDescription] = useState('');
  const [website, setWebsite] = useState('');
  return (
    <>
      <div className={styles.dashPage}>
        <div className={styles.container}>
          <div className={styles.ItemPosition}>
            <Image
              src={Company}
              placeholder="blur"
              alt="company logo"
              width={450}
              height={400}
            />
          </div>
          <div className={styles.ItemPosition}>
            <div className={styles.organisation}>
              <form action="">
                <div className={styles.content}>
                  <div className={styles.topic}>Your Profile Text here</div>
                  <input
                    type="profile"
                    placeholder="Your Profile Text here"
                    className={styles.input}
                    value={profile}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <div className={styles.topic}>Your Description</div>
                  <textarea
                    type="description"
                    placeholder="Your Description"
                    className={styles.input}
                    value={description}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <div className={styles.topic}>Your Website Link</div>
                  <input
                    type="website"
                    placeholder="Your Website Link"
                    className={styles.input}
                    value={website}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.organDetails}>
            <div className={styles.ItemPosition}>
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
        </div>
        <div className={styles.container}>
          <div className={styles.organProducts}>
            <div className={styles.ItemPosition}>
              <Image
                src={Product}
                placeholder="blur"
                alt="company logo"
                width={250}
                height={300}
              />
            </div>
            <div className={styles.ItemPosition}>
              <div className={styles.topic}>Product Name</div>
              <input
                type="name"
                placeholder="Product Name"
                className={styles.input}
              />
              <div className={styles.topic}>Product Description</div>
              <input
                type="name"
                placeholder="Product Description"
                className={styles.input}
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
      </div>
    </>
  );
}

export default content;
