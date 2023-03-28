import axios from "axios"
import { useState, useEffect } from "react"


const OrgDetails = ({ selectedOrg }) => {

  useEffect(() => {

  }, [])

  return (
    <div className="w-3/5 h-80 my-10 overflow-y-scroll flex flex-col items-center">
      <h1>{selectedOrg.name}</h1>
    </div>
  )
}
export default OrgDetails