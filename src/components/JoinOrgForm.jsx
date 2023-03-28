import { useState } from "react"

const JoinOrgForm = (props) => {

  const [formValues, setFormValues] = useState(
    {
      "user_id": "",
      "organization_id": props.selectedOrgId,
      "role": "",
      "is_active": ""
    })

    console.log(props)

  return (
    <div>
      <form>
        <label htmlFor="">role</label>
        <input type="text" name="role" />
        <label htmlFor="">isActive</label>
        <input type="text" name="is_active" />
      </form>
    </div>
  )
}
export default JoinOrgForm