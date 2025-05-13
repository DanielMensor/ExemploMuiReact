import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';

export default function UserCard({ user }) {
    return (
        <Card >
            <CardContent>
                <Box textAlign={'center'}>
                    <Avatar
                        src={user.picture.medium}
                        alt={`${user.name.first} ${user.name.last}`}
                        sx={{ width: 56, height: 56, margin: '0 auto' }}
                    />
                    <Typography 
                        variant='h6' 
                        component='div' 
                        sx={{mt:5}}
                        
                        >
                    </Typography>
                        
                </Box>
            </CardContent>
        </Card>
    );
}
