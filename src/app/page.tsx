"use client";

import { useState } from "react";
import { Response } from "./core/application/dto/teams-response";
import styles from './main.module.scss';
import Title from "@/ui/atoms/title/Title";
import Paragraph from "@/ui/atoms/paragraph/Paragraph";
import TeamCard from "@/ui/molecules/team-card/Team-card";
import Spinner from "@/ui/atoms/spinner/Spinner";
import SearchBar from "@/ui/molecules/search-bar/Search-bar";

export default function Home() {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [teams, setTeams] = useState<Response[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const handleSearch = async () => {
        if (!searchTerm) {
            alert('Please enter a team name to search.');
            return;
        }

        setLoading(true);
        setError("");

        //Eliminar tildes
        const normalizedSearchTerm = searchTerm.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        try {
            const response = await fetch(`/api/teams?search=${normalizedSearchTerm}`);

            if (!response.ok) {
                throw new Error('Failed to fetch teams');
            }

            const data = await response.json();
            setTeams(data.response);
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
            <Title level={1}>Teams</Title>
            <div className={styles.searchContainer}>
                <SearchBar
                    searchTerm={searchTerm}
                    handleSearch={handleSearch}
                    setSearchTerm={setSearchTerm}
                />
            </div>

            {loading && (
                <Spinner />
            )}

            {error && <Paragraph className={styles.error}>{error}</Paragraph>}

            {teams.length > 0 && (
                <div className={styles.containerCards}>
                    {teams.map((teamData) => (
                        <TeamCard key={teamData.team.id} teamData={teamData} />
                    ))}
                </div>
            )}

            {teams.length === 0 && !loading && !error && (
                <Paragraph className={styles.message}>No teams found. Try another search.</Paragraph>
            )}
        </div>
    );
}
