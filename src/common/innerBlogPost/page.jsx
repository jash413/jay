
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
        <div className={styles.BlogPost_text_inner_header}>{props.texture7} <span className={styles.BlogPost_text_inner}>{props.text7}</span></div>

        <div className={styles.BlogPost_secHeading}>{props.blogPost_heading2}</div>
        <div className={styles.BlogPost_text_inner}>{props.blogPost_text2}</div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture6} <span className={styles.BlogPost_text_inner}>{props.text6}</span></div>

        <div className={styles.BlogPost_secHeading}>{props.blogPost_heading3}</div>
        <div className={styles.BlogPost_text_inner}>{props.blogPost_text3}</div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture8} <span className={styles.BlogPost_text_inner}>{props.text8}</span></div>

        <div className={styles.BlogPost_secHeading}>{props.blogPost_heading4}</div>
        <div className={styles.BlogPost_text_inner}>{props.blogPost_text4}</div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture9} <span className={styles.BlogPost_text_inner}>{props.text9}</span></div>

        <div className={styles.BlogPost_secHeading}>{props.blogPost_heading5}</div>
        <div className={styles.BlogPost_text_inner}>{props.blogPost_text5}</div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture10} <span className={styles.BlogPost_text_inner}>{props.text10}</span></div>

        <div className={styles.BlogPost_secHeading}>{props.blogPost_heading6}</div>
        <div className={styles.BlogPost_text_inner}>{props.blogPost_text6}</div>

        <div className={styles.BlogPost_secHeading}>{props.blogPost_heading7}</div>
        <div className={styles.BlogPost_text_inner}>{props.blogPost_text7}</div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture1}<span className={styles.BlogPost_text_inner}>{props.text1}</span></div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture2} <span className={styles.BlogPost_text_inner}>{props.text2}</span></div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture3}<span className={styles.BlogPost_text_inner}>{props.text3}</span></div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture4}<span className={styles.BlogPost_text_inner}>{props.text4}</span></div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture5} <span className={styles.BlogPost_text_inner}>{props.text5}</span></div>





        <div className={styles.BlogPost_secHeading}>{props.blogPost_heading8}</div>
        <div className={styles.BlogPost_text_inner}>{props.blogPost_text8}</div>
        <div className={styles.BlogPost_text_inner}>{props.blogPost_text8a}</div>

        <div className={styles.BlogPost_secHeading}>{props.blogPost_heading9}</div>
        <div className={styles.BlogPost_text_inner}>{props.blogPost_text9}</div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture11} <span className={styles.BlogPost_text_inner}>{props.text11}</span></div>

        <div className={styles.BlogPost_secHeading}>{props.blogPost_heading10}</div>
        <div className={styles.BlogPost_text_inner}>{props.blogPost_text10}</div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture12} <span className={styles.BlogPost_text_inner}>{props.text12}</span></div>


        <div className={styles.BlogPost_secHeading}>{props.blogPost_heading11}</div>
        <div className={styles.BlogPost_text_inner}>{props.blogPost_text11}</div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture13} <span className={styles.BlogPost_text_inner}>{props.text13}</span></div>

        <div className={styles.BlogPost_secHeading}>{props.blogPost_heading11}</div>
        <div className={styles.BlogPost_text_inner}>{props.blogPost_text11}</div>

        <div className={styles.BlogPost_secHeading}>{props.blogPost_heading12}</div>
        <div className={styles.BlogPost_text_inner}>{props.blogPost_text12}</div>

        <div className={styles.BlogPost_secHeading}>{props.blogPost_heading13}</div>
        <div className={styles.BlogPost_text_inner}>{props.blogPost_text13}</div>


        


      </div>
    </div>
  );
};

export default BlogPost;
