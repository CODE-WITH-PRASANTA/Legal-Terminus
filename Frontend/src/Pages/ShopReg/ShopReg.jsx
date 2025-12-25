import React from 'react'
import ShopRegBreadcrum from '../../Components/ShopRegBreadcrum/ShopRegBreadcrum'
import ShopRegProcess from '../../Components/ShopRegProcess/ShopRegProcess'
import ShopRegDocuments from '../../Components/ShopRegDocuments/ShopRegDocuments'
import ShopRegFAQ from '../../Components/ShopRegFAQ/ShopRegFAQ'
import ShopRegTerms from '../../Components/ShopRegTerms/ShopRegTerms'

const ShopReg = () => {
  return (
    <div>
      <ShopRegBreadcrum />
      <ShopRegProcess />
      <ShopRegDocuments />
      <ShopRegFAQ />
      <ShopRegTerms />
    </div>
  )
}

export default ShopReg
