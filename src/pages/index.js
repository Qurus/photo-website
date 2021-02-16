import React from "react"
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import './index.css'

const IndexPage = ({ data }) => {
  return <div>

    <h1>Hey There</h1>
    <h2>A Photo Album intant upload from iphone</h2>
    <div className="gallery">
      {data.allFile.edges.map(({node}) => {
      return <Img key={node.id} fluid={node.childImageSharp.fluid} />
    })}
  </div>
    
    </div>
  
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageQuery {
    allFile(filter: {absolutePath: {regex: "//photos//"}}) {
    edges {
      node {
        id
        childImageSharp {
          fluid{
          ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
  }
`