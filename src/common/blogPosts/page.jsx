import React from 'react'
import Button from "@/common/button/button9"
import styles from "@/common/blogPosts/blog_post.module.css"
import Image from 'next/image'
const BlogPost = (props) => {
  return (
    <div>
    <div className={styles.BlogPost_outer}>
   
     <div className={styles.BlogPost_imageOuter}>
            <Image src={props.image} className={styles.BlogPost_image} alt='image_blog'/>
      </div>
      <div className={styles.BlogPost_smallOuter}>
           <p className={styles.BlogPost_date}>{props.Date}</p>
            <p className={styles.BlogPost_name}>{props.blog_name}</p>
      </div>
      <div className={styles.BlogPost_heading}>{props.blogPost_heading}</div>
      <div className={styles.BlogPost_text}>{props.blogPost_text}</div>
        <Button btn_text="Read More"/>
       
    
    </div>
    </div>
  )
}

export default BlogPost