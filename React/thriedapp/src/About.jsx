import React from 'react'
import Button from '@mui/material/Button'
import FormGroup from '@mui/material/FormGroup'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'


function About() {
  return (
    <>
          <Button variant="contained" color="success">
      MUI Button
    </Button>
    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
  <FormControlLabel required control={<Checkbox />} label="Required" />
  <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
</FormGroup>
    </>


    
  )
}

export default About