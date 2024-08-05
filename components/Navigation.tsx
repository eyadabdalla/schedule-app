import React from 'react';
import { Group, Button } from '@mantine/core';
import Link from 'next/link';

function Navigation(): JSX.Element {
    return (
        <Group justify="center" py="md">
            <Button component={Link} href="/" variant="subtle">
                Home
            </Button>
            <Button component={Link} href="/weekly-planning" variant="subtle">
                Weekly Planning
            </Button>
        </Group>
    );
}

export default Navigation;