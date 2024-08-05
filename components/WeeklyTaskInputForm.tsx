'use client'
import React from 'react';
import { useState } from 'react';

import { useForm } from '@mantine/form';
import { TextInput, NumberInput, Select, Button, Paper, Stack, Group, Title, MultiSelect } from '@mantine/core';
import { DatePickerInput, DatesProvider } from '@mantine/dates';
import { CalendarLevel } from '@mantine/dates';


const WeeklyTaskInputForm = () => {
    const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);


    const form = useForm({
        initialValues: {
            name: '',
            estimatedTime: 0,
            priority: '',
            dependencies: [],
            specificDay: null,
        },
        validate: {
            name: (value) => (value.trim().length > 0 ? null : 'Task name is required'),
            estimatedTime: (value) => (value > 0 ? null : 'Estimated time must be greater than 0'),
            priority: (value) => (value ? null : 'Priority is required'),
        },
    });

    const handleSubmit = (values: typeof form.values) => {
        console.log('Task submitted:', values);
        form.reset();
    };

    return (
        <Paper shadow="sm" p="xl" withBorder>
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <Stack gap="md">
                    <Title order={2}>Add Weekly Task</Title>

                    <TextInput
                        withAsterisk
                        label="Task Name"
                        placeholder="Enter task name"
                        {...form.getInputProps('name')}
                    />

                    <NumberInput
                        withAsterisk
                        label="Estimated Time (hours)"
                        placeholder="Enter estimated time"
                        min={0}
                        step={0.5}
                        {...form.getInputProps('estimatedTime')}
                    />

                    <Select
                        withAsterisk
                        label="Priority"
                        placeholder="Select priority"
                        data={[
                            { value: 'low', label: 'Low' },
                            { value: 'medium', label: 'Medium' },
                            { value: 'high', label: 'High' },
                            { value: 'On fire', label: 'On fire' },
                        ]}
                        {...form.getInputProps('priority')}
                    />

                    <MultiSelect
                        label="Dependencies"
                        placeholder="Select dependencies"
                        data={[
                            { value: 'task1', label: 'Task 1' },
                            { value: 'task2', label: 'Task 2' },
                            { value: 'task3', label: 'Task 3' },
                        ]}
                        {...form.getInputProps('dependencies')}
                    />

                    <DatePickerInput
                        label="Specific Day (if applicable)"
                        placeholder="Pick a date"
                        clearable
                        {...form.getInputProps('specificDay')}
                    />

                    <Group justify="flex-end" mt="md">
                        <Button type="submit">Add Task</Button>
                    </Group>
                </Stack>
            </form>
        </Paper>
    );
};

export default WeeklyTaskInputForm;