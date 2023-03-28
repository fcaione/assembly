import axios from "axios"
import { useState, useEffect } from "react"
import OrgCard from "./OrgCard"
import { Link } from "react-router-dom"

const ViewOrgs = ({ orgs, setSelectedOrg, selectedOrg }) => {
	return (
		orgs && (
			<div className="w-2/5 h-80 my-10 overflow-y-scroll">
				{orgs?.map((org) => (
					<div key={org.id} className={`hover:bg-sky-400 ${selectedOrg === org && "bg-black"}`} onClick={()=>setSelectedOrg(org)}>
						<OrgCard {...org} />
					</div>
				))}
			</div>
		)
	)
}
export default ViewOrgs
