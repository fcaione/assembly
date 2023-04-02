const UserCard = (props) => {

  return (
    <div className="bg-white rounded-md shadow-lg p-5 flex flex-col items-center w-72 h-72">
        <img src={props.user.profile_picture} alt="" className="rounded-full h-20 w-20 object-cover"/>
      <div className="border-t w-full my-4">
        <h2 className="text-center font-semibold mt-2 text-lg">{props.user.name}</h2>
        <p className="text-gray-500 text-center">{props.role}</p>
        <p className="text-gray-500 text-center">{props.is_active}</p>
      </div>
      {props.userState && (
        <div className="h-full flex flex-col justify-center">
          				<button
					className="group relative inline-block overflow-hidden border border-sky-900 px-6 py-1 focus:outline-none focus:ring rounded-lg"
				>
					<span className="absolute inset-y-0 left-0 w-[2px] bg-sky-700 transition-all group-hover:w-full group-active:bg-sky-500"></span>

					<span className="relative text-sm font-medium text-sky-900 transition-colors group-hover:text-white">
						Message User
					</span>
				</button>
        </div>

      )}
      
    </div>
  )
}
export default UserCard