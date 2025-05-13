import { useEffect, useState } from 'react';
import UserCard from '../components/UserCard';
import { Container, Typography, CircularProgress, Grid, Box } from '@mui/material';

export default function Home() {
    const users = [];
    const loading = false;
    const error = null;

    useEffect(() => {
        const execUsers = () => {
            const response = getUsers();
            setUsers(response.data.results);
                  
        }
    })

    if (loading) {
        return (
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100vh"
            >
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box sx={{ minWidth: '100vw', display: 'flex', flexDirection: 'column' }}>
            <Box>
                <Typography variant="h3" component="h1" fontWeight="bold">
                    Bem-vindo à Lista de Usuários
                </Typography>
                <Typography variant="subtitle1" mt={1}>
                    Explore os detalhes dos usuários cadastrados
                </Typography>
            </Box>
            <Container maxWidth="lg" sx={{ flex: 1, mt: 4 }}>
                <Grid container spacing={3}>
                    {users.map((user) => (
                        <Grid item xs={12} sm={6} md={4} key={user.email}>
                            <UserCard user={user} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}