const UserCard = (props) => {

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
        <img src="https://img.freepik.com/free-photo/emotions-people-concept-headshot-serious-looking-handsome-man-with-beard-looking-confident-determined_1258-26730.jpg" alt="" className="rounded-full h-12 w-12 mr-4 object-cover"/>
      <div>
        <h2 className="text-base font-semibold">{props.user.name}</h2>
        <p className="text-gray-500 text-sm">{props.user.email}</p>
        <p className="text-gray-500 text-sm">{props.role}</p>
        <p className="text-gray-500 text-sm">{props.is_active}</p>
      </div>
      {props.userState && (
        <div>
          <button className="bg-blue-800 text-white rounded-md p-1 mx-5">Message User</button>
        </div>

      )}
      
    </div>
  )
}
export default UserCard