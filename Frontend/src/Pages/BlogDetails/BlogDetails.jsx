import React from 'react'
import './BlogDetails.css'
import BlogDetailsBanner from '../../Components/BlogDetailsBanner/BlogDetailsBanner'
import WhatWeOffer from '../../Components/WhatWeOffer/WhatWeOffer'
import BlogDetailsAboutUs from '../../Components/BlogDetailsAboutUs/BlogDetailsAboutUs'
import BlogDetailsOurClient from '../../Components/BlogDetailsOurClient/BlogDetailsOurClient'
import BlogDetailsPricingPlans from '../../Components/BlogDetailsPricingPlans/BlogDetailsPricingPlans'
import BlogDetailsFaq from '../../Components/BlogDetailsFaq/BlogDetailsFaq'
import BlogDetailsTestimonial from '../../Components/BlogDetailsTestimonial/BlogDetailsTestimonial'
import BlogDetailsOurLatestNews from '../../Components/BlogDetailsOurLatestNews/BlogDetailsOurLatestNews'

const BlogDetails = () => {
  return (
    <>
    <BlogDetailsBanner/>
    <WhatWeOffer/>
    <BlogDetailsAboutUs/>
    <BlogDetailsOurClient/>
    <BlogDetailsPricingPlans/>
    <BlogDetailsFaq/>
    <BlogDetailsTestimonial/>
    <BlogDetailsOurLatestNews/>
    
    </>
  )
}

export default BlogDetails