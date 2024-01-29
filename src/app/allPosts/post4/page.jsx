import React from "react";
import InnerBlogPost from "@/common/innerBlogPost/page";
import BlogPostImage1 from "@/images/blogs_img1.png";
const Page = () => {
  return (
    <div>
      <InnerBlogPost
        image={BlogPostImage1}
        Date="March 20, 2024"
        blog_name="Interior Design"
        blogPost_heading="Types of plywood size & what are the difference"
        blogPost_text="Plywood, a versatile and widely used material in construction and woodworking, comes in various sizes, with 8x4 being a common dimension. Among the choices available, 18mm and 12mm plywood stand out as popular options. Let’s explore the types of plywood sizes, focusing on the differences between 18mm plywood and 12mm plywood, along with insights into pricing for both."
      />
    </div>
  );
};

export default Page;
