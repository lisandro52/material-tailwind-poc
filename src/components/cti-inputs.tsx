import { Input } from '@material-tailwind/react'
import React from 'react'

const CtiInputs = () => {
  return (
    <div className="flex w-1/2 mt-3 items-end gap-4">
      <Input variant="outlined" label="Outlined" />
      <Input variant="standard" label="Standard" />
      <Input variant="static" label="Static" placeholder="Static" />
    </div>
  )
}

export default CtiInputs