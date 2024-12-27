"use client";

import { useState } from 'react';
import { Response } from '@/app/core/application/dto/players-response';
import Title from '@/ui/atoms/title/Title';
import styles from './main.module.scss';
import SearchBar from '@/ui/molecules/search-bar/Search-bar';
import Paragraph from '@/ui/atoms/paragraph/Paragraph';
import Spinner from '@/ui/atoms/spinner/Spinner';
import PlayerCard from '@/ui/molecules/player-card/Player-card';

export default function Players() {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [player, setPlayer] = useState<Response[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const handleSearch = async () => {
        if (!searchTerm.trim()) {
            setError('Please enter a player name to search.');
            return;
        }

        setLoading(true);
        setError("");

        // Eliminar tildes
        const normalizedSearchTerm = searchTerm.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        try {
            const response = await fetch(`/api/players?search=${normalizedSearchTerm}`);

            if (!response.ok) {
                throw new Error('Failed to fetch players');
            }

            const data = await response.json();
            setPlayer(data.response);

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
                <Title level={1}>Players</Title>

                <SearchBar
                    placeholder='Enter a player to find'
                    searchTerm={searchTerm}
                    handleSearch={handleSearch}
                    setSearchTerm={setSearchTerm}
                />
            </div>
            {loading && <Spinner />}

            {error && <Paragraph className={styles.message}>{error}</Paragraph>}

            {player.length > 0 && (
            <div className={styles.containerCards}>
                {player.map((playerData) => (
                    <PlayerCard key={playerData.player.id} playerData={playerData}/>
                ))}
            </div>
        )}

            {player.length === 0 && !loading && !error && (
                <Paragraph className={styles.message}>No players found. Try another search.</Paragraph>
            )}
        </div>
    )
}