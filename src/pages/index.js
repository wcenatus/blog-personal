import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import moment from 'moment'
import PostLink from "../components/PostLink"
import Layout from "../components/Layout"
import '../index.css';

const IndexPage = ({data:{allMdx:{edges}}}) => {
  const [post, setPosts] = useState([])

  useEffect(()=>{
    var tmp = []
    edges.forEach(element =>{
      //Get Year
      var year = moment(element.node.frontmatter.date).format('YYYY')
      //Find if year exists in tmp array
      var year_idx = tmp.findIndex(el => el.year == year)
      //If year exists push to its "posts" Object, else create new
      if(year_idx >= 0){
        tmp[year_idx].posts.push(element)
      }else{
        tmp.push({year:year,posts:[element]})
      }
    })
    //Set tmp array to state
    setPosts(tmp)   
  },[edges])

  return(<>
  <Layout>
    <h1 className="font-bold text-3xl pb-2">More News</h1>
    <hr/>
    {post.map((post,i) => 
      <div key={i}>
        <h2 className="font-bold text-2xl py-3">{post.year}</h2>
        <div className="grid grid-cols-1 space-y-5">
          {post.posts.map(link =>
            <PostLink key={link.node.id} post={link.node} />
          )}
        </div>
      </div>
    )}
  </Layout>
</>)}
export default IndexPage

export const pageQuery = graphql`
query MyQuery {
  allMdx(sort: {order: DESC, fields: frontmatter___date}) {
    pageInfo {
      perPage
    }
    edges {
      node {
        id
        frontmatter {
          title
          date
        }
        slug
        excerpt
      }
    }
  }
}

`