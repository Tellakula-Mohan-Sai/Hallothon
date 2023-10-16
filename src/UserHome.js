import React from 'react';
import { Card, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import "./UserHome.css"
import Navbar from "./Navbar";
import {CardMedia, Typography, Grid } from '@mui/material';


function UserHome() {
  const stocks = [
    { company: 'Company A', currentPrice: 150, prevCloseDate: '2023-10-13', change: 8, changePercentage: '6%', lowHigh: '140/160' },
    { company: 'Company B', currentPrice: 200, prevCloseDate: '2023-10-13', change: -10, changePercentage: '-5%', lowHigh: '190/210' },
    { company: 'Company C', currentPrice: 180, prevCloseDate: '2023-10-13', change: 5, changePercentage: '3%', lowHigh: '170/190' },
    { company: 'Company D', currentPrice: 220, prevCloseDate: '2023-10-13', change: 12, changePercentage: '5%', lowHigh: '210/230' },
    { company: 'Company E', currentPrice: 120, prevCloseDate: '2023-10-13', change: -5, changePercentage: '-4%', lowHigh: '110/130' },
    { company: 'Company F', currentPrice: 250, prevCloseDate: '2023-10-13', change: 15, changePercentage: '6%', lowHigh: '240/260' },
    // Add more companies as needed
  ];
  return (
    <>

    <Navbar/>
    <div>
    <div style={{ width: '80%', margin: 'auto auto' }}>
      <br></br>
      <div className='title'>Top Gainers Today</div>
      <Card variant="outlined">
        <CardContent>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Company</TableCell>
                  <TableCell>Current Price</TableCell>
                  <TableCell>Prev Close Date</TableCell>
                  <TableCell>Change</TableCell>
                  <TableCell>Change %</TableCell>
                  <TableCell>Month's Low/High</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {stocks.map((stock, index) => (
                  <TableRow key={index}>
                    <TableCell>{stock.company}</TableCell>
                    <TableCell>{stock.currentPrice}</TableCell>
                    <TableCell>{stock.prevCloseDate}</TableCell>
                    <TableCell>{stock.change}</TableCell>
                    <TableCell>{stock.changePercentage}</TableCell>
                    <TableCell>{stock.lowHigh}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
      <br>

      </br>
      <div className='title'>Todays News</div>
      <Grid container spacing={2} >
        {/* First Card */}
        <Grid item xs={6} >
          <Card variant="outlined"  style={{ paddingTop: '20px', marginBottom:"20px" }}>
            <CardMedia
              component="img"
              alt="Company A Logo"
              height="140"
              image="https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/01-nvidia-logo-horiz-500x200-2c50-d.png"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Text below the first image
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Second Card */}
        <Grid item xs={6}>
          <Card variant="outlined"  style={{ paddingTop: '20px', marginBottom:"20px" }}>
            <CardMedia
              component="img"
              alt="Company B Logo"
              height="140"
              image="https://static.vecteezy.com/system/resources/previews/010/930/001/original/google-logo-icon-illustration-free-vector.jpg"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Text below the second image
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
    <div>
    </div>
    </div>
    </>


  )
}

export default UserHome