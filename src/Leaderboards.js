import React from 'react'
import Navbar from "./Navbar";
import { Card, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
function Leaderboards() {
  const leaderboardData = [
    { username: 'User1', todaysScore: 100, totalScore: 500 },
    { username: 'User2', todaysScore: 90, totalScore: 480 },
    { username: 'User3', todaysScore: 110, totalScore: 510 },
    { username: 'User4', todaysScore: 95, totalScore: 490 },
    { username: 'User5', todaysScore: 105, totalScore: 515 },
    { username: 'User6', todaysScore: 88, totalScore: 470 },
    // Add more users as needed
  ];
  return (
    <div>
       <Navbar/> 
       <div style={{ width: '80%', margin: '0 auto' }}>
      <Card variant="outlined"style={{ marginTop:"20px" }}>
        <CardContent >
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Username</TableCell>
                  <TableCell>Today's Score</TableCell>
                  <TableCell>Total Score</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {leaderboardData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.username}</TableCell>
                    <TableCell>{row.todaysScore}</TableCell>
                    <TableCell>{row.totalScore}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </div>
    </div>
  )
}

export default Leaderboards