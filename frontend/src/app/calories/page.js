'use client';

import {useEffect, useState} from 'react';
import API from '../utils/api';
import CalorieEntryForm from './CalorieEntryForm';
import CalorieList from './CalorieList';

export default function CaloriesPage() {
    const [entries, setEntries] = useState([]);
    const [form, setForm] = useState({description: '', calories: ''});

    const fetchEntries = async() => {
        const res = await API.get('/calories');
        setEntries(res.data);
    };

    useEffect(() => {
        fetchEntries()
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.description || !form.calories) return;
        
        await API.post('/calories', form);
        setForm({description: '', calories: ''});
        fetchEntries();
    };

    const handleDelete = async (id) => {
        await API.delete(`/calories/${id}`);
        fetchEntries();
    };

    return (
        <div className='p-4 max-w-xl mx-auto'>
            <h1 className='text-2xl font-bold mb-4'>Calorie Tracker</h1>
            <CalorieEntryForm form={form} setForm={setForm} handleSubmit={handleSubmit} />
            <CalorieList entries={entries} handleDelete={handleDelete} />
        </div>
    )
}