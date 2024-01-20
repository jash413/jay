
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
        <div className={styles.BlogPost_text_inner}>{props.blogPost_text1}</div>

        <div className={styles.BlogPost_secHeading}>{props.blogPost_heading2}</div>
        <div className={styles.BlogPost_text_inner}>{props.blogPost_text2}</div>


        <div className={styles.BlogPost_secHeading}>{props.blogPost_heading3}</div>
        <div className={styles.BlogPost_text_inner}>{props.blogPost_text3}</div>

        <div className={styles.BlogPost_secHeading}>{props.blogPost_heading4}</div>
        <div className={styles.BlogPost_text_inner}>{props.blogPost_text4}</div>

        <div className={styles.BlogPost_secHeading}>{props.blogPost_heading5}</div>
        <div className={styles.BlogPost_text_inner}>{props.blogPost_text5}</div>

        <div className={styles.BlogPost_secHeading}>{props.blogPost_heading6}</div>
        <div className={styles.BlogPost_text_inner}>{props.blogPost_text6}</div>

        {/* <div className={styles.BlogPost_secHeading}>{props.blogPost_heading7}</div>
        <div className={styles.BlogPost_text_inner}>{props.blogPost_text7}</div>
        <div className={styles.BlogPost_text_inner}>{props.blogPost_text7a}</div>
        <div className={styles.BlogPost_text_inner}>{props.blogPost_text7b}</div>
        <div className={styles.BlogPost_text_inner}>{props.blogPost_text7c}</div>
        <div className={styles.BlogPost_text_inner}>{props.blogPost_text7d}</div> */}

        <div className={styles.BlogPost_secHeading}>Waterproof Plywood Price:</div>
        <div className={styles.BlogPost_text_inner_header}>Brand Reputation: <span className={styles.BlogPost_text_inner}>Established brands known for producing high-quality waterproof plywood may command a higher price due to their reputation for durability and reliability.</span></div>

        <div className={styles.BlogPost_text_inner_header}>Quality of Core Material: <span className={styles.BlogPost_text_inner}>Established brands known for producing high-quality waterproof plywood may command a higher price due to their reputation for durability and reliability.</span></div>

        <div className={styles.BlogPost_text_inner_header}>Brand Reputation:<span className={styles.BlogPost_text_inner}> The core material used in the plywood, whether it's hardwood or softwood, can impact the price. Hardwood core waterproof plywood tends to be more expensive but offers enhanced strength.</span></div>

        <div className={styles.BlogPost_text_inner_header}>Thickness of Plywood: <span className={styles.BlogPost_text_inner}>Plywood that adheres to industry standards and certifications may have a higher price tag. Certifications ensure that the plywood meets specific quality and safety criteria.

        </span></div>
        <div className={styles.BlogPost_text_inner_header}>Additional Features: <span className={styles.BlogPost_text_inner}>Some waterproof plywood may come with additional features such as enhanced fire resistance or special coatings. These features can influence the price based on the added benefits they provide</span></div>










        <div className={styles.BlogPost_secHeading}>{props.blogPost_heading8}</div>
        <div className={styles.BlogPost_text_inner}>{props.blogPost_text8}</div>
        <div className={styles.BlogPost_text_inner}>{props.blogPost_text8a}</div>


        


      </div>
    </div>
  );
};

export default BlogPost;
