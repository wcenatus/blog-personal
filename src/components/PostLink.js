import React from "react"
import { Link } from "gatsby"
const PostLink = ({ post }) => (
  <div className="col-span-1">
    <p className="text-sm text-gray-400">({post.frontmatter.date})</p>
    <Link to={post.slug} className="font-semibold text-xl text-blue-500 focus:text-purple-500 leading-none">
      {post.frontmatter.title} 
    </Link> 
    <div>{post.excerpt}</div> 
    <Link to={post.slug}>
      <div className="text-blue-400 hover:text-blue-500 underline">Read more</div>
    </Link>
  </div>
)
export default PostLink