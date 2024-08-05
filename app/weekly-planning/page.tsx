import { Container, Title } from '@mantine/core';
import WeeklyTaskInputForm from '@/components/WeeklyTaskInputForm';

function WeeklyPlanningPage() {
    return (
        <Container size="md" py="xl">
            <Title order={1} mb="xl">Weekly Planning</Title>
            <WeeklyTaskInputForm />
        </Container>
    );
}
export default WeeklyPlanningPage;