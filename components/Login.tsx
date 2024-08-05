'use client';
import React from 'react';
import { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, User } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { Button, Container, Title, Text, Paper, Group, Image, Stack, ThemeIcon } from '@mantine/core';
import { IconLock, IconMail } from '@tabler/icons-react';

// Initialize Firebase (make sure to replace with your actual config)
const firebaseConfig = {
    apiKey: "AIzaSyBJM7WRFYEfMhkZxFHyWADNsazojqB5rNY",
    authDomain: "organizer-app-bd564.firebaseapp.com",
    projectId: "organizer-app-bd564",
    storageBucket: "organizer-app-bd564.appspot.com",
    messagingSenderId: "666691251555",
    appId: "1:666691251555:web:894df36c1a0f31307eb756"
}; const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const Login = () => {
    const [user, setUser] = useState<User | null>(null);

    const handleGoogleLogin = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            setUser(result.user);
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <Container size="xs" py={120}>
            <Paper radius="md" p="xl" withBorder>
                <Group justify="center" mb={50}>
                    <ThemeIcon size={60} radius="xl" variant="light" color="blue">
                        <IconLock size={30} />
                    </ThemeIcon>
                </Group>

                {!user ? (
                    <Stack>
                        <Title order={2} ta="center" mt="md" mb={50}>
                            Welcome to TaskMaster
                        </Title>

                        <Button
                            fullWidth
                            leftSection={<GoogleIcon />}
                            variant="default"
                            color="gray"
                            onClick={handleGoogleLogin}
                        >
                            Continue with Google
                        </Button>

                        <Text c="dimmed" size="sm" ta="center" mt={5}>
                            By continuing, you agree to our Terms of Service and Privacy Policy.
                        </Text>
                    </Stack>
                ) : (
                    <Stack align="center" >
                        <Image
                            src={user.photoURL || ''}
                            alt="User avatar"
                            width={80}
                            height={80}
                            radius="50%"
                        />
                        <Title order={3}>Welcome, {user.displayName}</Title>
                        <Text size="sm" c="dimmed">
                            You're now signed in to TaskMaster
                        </Text>
                        <Button variant="light" color="blue" fullWidth mt="xl">
                            Go to Dashboard
                        </Button>
                    </Stack>
                )}
            </Paper>
        </Container>
    );
};

const GoogleIcon = ({ size = 18 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
        <path
            fill="currentColor"
            d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
        />
    </svg>
);

