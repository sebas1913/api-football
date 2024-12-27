"use client";

import { useState } from 'react';
import SearchBar from '@/ui/molecules/search-bar/Search-bar';
import styles from './main.module.scss';
import Title from '@/ui/atoms/title/Title';
import Spinner from '@/ui/atoms/spinner/Spinner';
import Paragraph from '@/ui/atoms/paragraph/Paragraph';
import { Response } from '@/app/core/application/dto/stadiums-response';
import StadiumCard from '@/ui/molecules/stadium-card/Stadium-card';

export default function Stadiums() {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [stadium, setStadium] = useState<Response[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const handleSearch = async () => {
        if (!searchTerm.trim()) {
            setError('Please enter a stadium name to search.');
            return;
        }

        setLoading(true);
        setError("");

        // Eliminar tildes
        const normalizedSearchTerm = searchTerm.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        try {
            const response = await fetch(`/api/stadiums?search=${normalizedSearchTerm}`);

            if (!response.ok) {
                throw new Error('Failed to fetch stadiums');
            }

            const data = await response.json();
            setStadium(data.response);
        } catch (error: unknown) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('An unknown error occurred');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.searchContainer}>
                <Title level={1}>Stadiums</Title>

                <SearchBar
                    placeholder='Enter a country to find stadiums'
                    searchTerm={searchTerm}
                    handleSearch={handleSearch}
                    setSearchTerm={setSearchTerm}
                />
            </div>
            {loading && <Spinner />}

            {error && <Paragraph className={styles.message}>{error}</Paragraph>}

            {stadium.length > 0 && (
                <div className={styles.containerCards}>
                    {stadium.map((stadiumData) => (
                        <StadiumCard key={stadiumData.id} stadiumData={stadiumData} />
                    ))}
                </div>
            )}

            {stadium.length === 0 && !loading && !error && (
                <Paragraph className={styles.message}>No teams found. Try another search.</Paragraph>
            )}
        </div>
    );
}
