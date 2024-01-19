'use client'
import { useRouter } from 'next/navigation'
import React from 'react';
import styles from "@/common/blogPosts/blog_post.module.css";
import Image from 'next/image';

const BlogPost = (props) => {
  const router = useRouter();

  const handleReadMoreClick = () => {
    if (props.readMoreRoute) {
      router.push(props.readMoreRoute);
    }
    // You can add an else statement or handle other cases if needed
  };

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

        <button onClick={handleReadMoreClick} className={styles.button9} role="button">
          <span className={styles.text3}>Read More</span>
          <span className={styles.text3}>Read More</span>
        </button>
      </div>
    </div>
  );
};

export default BlogPost;
