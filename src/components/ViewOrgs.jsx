import axios from "axios"
import { useState, useEffect } from "react"
import OrgCard from "./OrgCard"
import ReactPaginate from "react-paginate"

const ViewOrgs = ({ orgs, setSelectedOrg, selectedOrg }) => {
	const [currentPage, setCurrentPage] = useState(0)
	const [currentOrgs, setCurrentOrgs] = useState([])

	const perPage = 10
	const offset = currentPage * perPage

	useEffect(() => {
		setCurrentOrgs(orgs.slice(offset, offset + perPage))
		setSelectedOrg(orgs.slice(offset, offset + perPage)[0])
	}, [currentPage, orgs])

	const handlePageClick = ({ selected: selectedPage }) => {
		setCurrentPage(selectedPage)
	}

	const pageCount = Math.ceil(orgs.length / perPage)

	return (
		currentOrgs && (
			<>
				<div className="flex flex-col w-2/5 h-full border border-slate-300">
					<div className="overflow-y-scroll">
						{currentOrgs?.map((org) => (
							<div
								key={org.id}
								className={`hover:bg-sky-400 border-b ${
									selectedOrg === org && "bg-purple-400"
								}`}
								onClick={() => setSelectedOrg(org)}
							>
								<OrgCard {...org} />
							</div>
						))}
					</div>
				<ReactPaginate
					previousLabel={"← Previous"}
					nextLabel={"Next →"}
					pageCount={pageCount}
					onPageChange={handlePageClick}
					containerClassName={"pagination flex flex-row gap-2 p-2"}
					previousLinkClassName={"pagination__link"}
					nextLinkClassName={"pagination__link"}
					disabledClassName={"pagination__link--disabled"}
					activeClassName={"pagination__link--active font-bold"}
				/>
				</div>
			</>
		)
	)
}
export default ViewOrgs
