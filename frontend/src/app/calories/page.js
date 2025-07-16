'use client';

import {useEffect, useState} from 'react';
import API from '../utils/api';
import CalorieEntryForm from './CalorieEntryForm';
import CalorieList from './CalorieList';
import {toast} from 'react-toastify';

export default function CaloriesPage() {
    const [entries, setEntries] = useState([]);
    const [form, setForm] = useState({description: '', calories: ''});
    const [editingId, setEditingId] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchEntries = async() => {
        const res = await API.get('/calories');
        setEntries(res.data);
    };

    useEffect(() => {
        fetchEntries()
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.description || !form.calories) {
            toast.error("Please fill in all fields");
            return;
        }

        try {
            setLoading(true);
            if (editingId) {
                await API.put(`/calories/${editingId}`, form);
                toast.success("Entry updated successfully");
                setEditingId(null);
                await fetchEntries();
            } else {
            await API.post('/calories', form);
            toast.success("Entry added successfully");
        }

        setForm({ description: '', calories: ''})
        fetchEntries();
        } catch (error) {
            toast.error("Error saving entry");
        } finally {
            setLoading(false)
        }
    };

    const handleDelete = async (id) => {
        try{
            await API.delete(`/calories/${id}`);
            toast.success("Entry deleted successfully");
            if(editingId === id)
            setEditingId(null);
            await fetchEntries();
        } catch(error) {
            toast.error("Error deleting entry");
        }
    };

    return (
        <div className='bg-gradient-to-br from-gray-800 via-gray-900 to-black p-6 mt-10 rounded-xl shadow-xl border border-pink-500/20'>
            <h1 className='text-3xl font-extrabold text-center mb-6 text-blue-400'>Track Your Calories</h1>
            <CalorieEntryForm 
            form={form} 
            setForm={setForm} 
            handleSubmit={handleSubmit}
            editingId={editingId}
            setEditingId={setEditingId}
            loading={loading}
            />
            <CalorieList entries={entries} handleDelete={handleDelete} setEditingId={setEditingId} setForm={setForm} />
        </div>
    )
}