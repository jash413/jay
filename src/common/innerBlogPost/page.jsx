
import React from 'react';
import styles from "@/common/innerBlogPost/innerblogpost.module.css"
import Image from 'next/image';

const BlogPost = (props) => {

  return (
    <div>
      <div className={styles.BlogPost_outer}>
        <div className={styles.BlogPost_imageOuter}>
          <Image src={props.image} className={styles.BlogPost_image} alt='image_blog' />
        </div>
        <div className={styles.BlogPost_smallOuter}>
          <p className={styles.BlogPost_date}>{props.Date}</p>
          <p className={styles.BlogPost_name}>{props.blog_name}</p>
        </div>
        <div className={styles.BlogPost_heading}>{props.blogPost_heading}</div>
        <div className={styles.BlogPost_text}>{props.blogPost_text}</div>

        <div className={styles.BlogPost_secHeading}>{props.blogPost_heading1}</div>
        <div className={styles.BlogPost_text}>{props.blogPost_text1}</div>

        <div className={styles.BlogPost_secHeading}>{props.blogPost_heading2}</div>
        <div className={styles.BlogPost_text}>{props.blogPost_text2}</div>


        <div className={styles.BlogPost_secHeading}>{props.blogPost_heading3}</div>
        <div className={styles.BlogPost_text}>{props.blogPost_text3}</div>


      </div>
    </div>
  );
};

export default BlogPost;
