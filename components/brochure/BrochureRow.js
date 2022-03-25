import React from 'react'

const BrochureRow = ({brochure, index}) => {
  return (
    <tr>
        <td>
        {index+1}
        </td>
        <td>
        {brochure.name}
        </td>
        <td>
        {brochure.email}
        </td>
        <td>
        {brochure.phone}
        </td>
    </tr>
  )
}

export default BrochureRow