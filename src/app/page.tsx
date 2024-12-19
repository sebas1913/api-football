"use client";

import { useState } from "react";
import styles from './main.module.scss';
import { Response } from "./core/application/dto/teams-response";
import Title from "@/ui/atoms/title/Title";
import Paragraph from "@/ui/atoms/paragraph/Paragraph";
import Input from "@/ui/atoms/input/Input";
import Button from "@/ui/atoms/button/Button";
import TeamCard from "@/ui/molecules/team-card/Team-card";
import Spinner from "@/ui/atoms/spinner/Spinner";

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

        try {
            const response = await fetch(`/api/teams?search=${searchTerm}`);

            if (!response.ok) {
                throw new Error('Failed to fetch teams');
            }

            const data = await response.json();
            setTeams(data.response);
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <Title level={1}>Teams</Title>
            <Paragraph>Enter the soccer team you want to know more about:</Paragraph>
            <div className={styles.searchContainer}>
                <Input
                    type="text"
                    placeholder="Search for a team"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button
                    variant="secondary"
                    onClick={handleSearch}
                    disabled={loading}
                >
                    Search
                </Button>
            </div>

            {loading && (
                <Spinner/>
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
                <Paragraph>No teams found. Try another search.</Paragraph>
            )}
        </div>
    );
}
