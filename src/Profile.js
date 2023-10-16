import React from 'react'
import Navbar from "./Navbar";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Card, CardContent, Typography, Avatar } from '@mui/material';

function Profile() {
  const [userData, setUserData] = useState(null);
  const userId = window.id; // Replace this with the actual user id

  useEffect(() => {
    // Fetch user data from the API with the id sent as the request body
    axios.post('http://localhost:5000/id', { "id": userId })
      .then(response => {
        console.log(response)
        setUserData(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, [userId]);
  return (
    <>
       <Navbar/> 
    <div style={{ padding: '20px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Card variant="outlined">
            <CardContent>
              {userData && (
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                  <Avatar 
                    src={userData.pictureUrl} 
                    alt="User Avatar" 
                    style={{ marginRight: '10px', width: '100px', height: '100px' }}
                  />
                  <Typography variant="h4" style={{ fontSize: '2rem' }}>{userData.name}</Typography>
                </div>
              )}
              {userData && (
                <div>
                <Typography variant="subtitle1" style={{ fontSize: '1.2rem' }}>Email: {window.id}</Typography>
                  <Typography variant="subtitle1" style={{ fontSize: '1.2rem' }}>Mobile: {userData.mobile}</Typography>
                  <Typography variant="subtitle1" style={{ fontSize: '1.2rem' }}>Score: {userData.score}</Typography>
                </div>
              )}
            </CardContent>
          </Card>
        </Grid>
        {/* Add more Grid items for additional profile information if needed */}
      </Grid>
    </div>
  );
    </>
  )
}

export default Profile