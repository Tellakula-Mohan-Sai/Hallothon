import React from 'react';
import { Card, CardContent } from '@mui/material';
import Navbar from "./Navbar";
import Quiz from "./Quiz";
function Challenges() {
  return (
    
       
    <div >

    <Navbar/> 
    <div style={{ width: '90%', marginTop:'20px',marginLeft: 'auto',marginRight:'auto'}}>
      <Card variant="outlined">
        <CardContent style={{ width: '90%', margin: '0 auto' }}>
          <div style={{ width: '60%' }}> {/* Set the width of the Quiz component */}
        <h1> Daily Quiz</h1>
            <Quiz />
          </div>
        </CardContent>
      </Card>
    </div>
    </div>
   
  )
}

export default Challenges