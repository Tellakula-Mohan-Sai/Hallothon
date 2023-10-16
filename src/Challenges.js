import React from 'react';
import { Card, CardContent } from '@mui/material';
import {FormControl, Radio, RadioGroup, FormControlLabel } from '@mui/material';

import Navbar from "./Navbar";
import Quiz from "./Quiz";
import { useEffect } from 'react';
import { useState } from 'react';
function Challenges() {

 window.score = 0
 useEffect(() => {
  // This effect will run whenever window.score changes
}, [window.score]); // Pass window.score as a dependency to the effect
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
      <Card  variant="outlined"style={{ marginTop:"20px",marginBottom:"20px" }}>
          <CardContent style={{ width: '90%', marginTop:"20px" ,marginBottom:"20px",paddingLeft:"80px"}}>
            <h1>Scenario Question</h1>
            <br></br>
            <p>Here is a scenario-based question about real financial situations. What would you do?</p>
            <FormControl component="fieldset">
              <RadioGroup 
                aria-label="scenario-question" 
                name="scenario-question" 
                // value={userChoice} 
                // onChange={(e) => setUserChoice(e.target.value)}
              >
                <FormControlLabel value="optionA" control={<Radio />} label="Option A: Description of Option A" />
                <FormControlLabel value="optionB" control={<Radio />} label="Option B: Description of Option B" />
                <FormControlLabel value="optionC" control={<Radio />} label="Option C: Description of Option C" />
                <FormControlLabel value="optionD" control={<Radio />} label="Option D: Description of Option D" />
              </RadioGroup>
            </FormControl>
          </CardContent>
        </Card>
    </div>
    </div>
   
  )
}

export default Challenges