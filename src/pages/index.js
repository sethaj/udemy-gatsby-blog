import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import PostList from '../components/PostList'
import {graphql,useStaticQuery} from 'gatsby'

const getPosts = graphql`
{
  allMdx(sort:{fields:frontmatter___date, order:DESC}){
    totalCount
    edges{
      node{
        frontmatter{
          title
          slug
          date(formatString:"MMMM Do, YYYY")
          author
          image{
          	childImageSharp{
              fluid{
              	...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        excerpt
      }
    }
  }
}
`

const IndexPage = () => {
  const response = useStaticQuery(getPosts)
  const posts = response.allMdx.edges

  return (
    <Layout>
      <SEO title="Home" />
      <PostList posts={posts} />
    </Layout>
  )
}

export default IndexPage
