import React from "react";
import InnerBlogPost from "@/common/innerBlogPost/page";
import BlogPostImage2 from "@/images/blogs_img2.png";
const Page = () => {
  return (
    <div>
      <InnerBlogPost
        image={BlogPostImage2}
        Date="March 20, 2024"
        blog_name="Interior Design"
        blogPost_heading="Types of plywood size & what are the difference"
        blogPost_text="In the rich tapestry of Indian culture, the pooja room holds a unique and revered place. It’s not merely a physical space within a home; it’s a sanctuary where families come together to connect with their spirituality, find solace, and offer their devotion. Designing a pooja room is not just a matter of aesthetics; it’s about crafting an environment that…"
      />
    </div>
  );
};

export default Page;
