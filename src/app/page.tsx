"use client";

import { useState } from "react";
import styles from './main.module.scss';
import { Response } from "./core/application/dto/teams-response";
import Title from "@/ui/atoms/title/Title";
import Paragraph from "@/ui/atoms/paragraph/Paragraph";
import Input from "@/ui/atoms/input/Input";
import Button from "@/ui/atoms/button/Button";
import TeamCard from "@/ui/molecules/team-card/Team-card";

export default function Home() {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [teams, setTeams] = useState<Response[]>([]);

    const handleSearch = async () => {
        if (!searchTerm) {
            alert('Please enter a team name to search.');
            return;
        }

        try {
            const response = await fetch(`/api/teams?search=${searchTerm}`);

            if (!response.ok) {
                throw new Error('Failed to fetch teams');
            }

            const data = await response.json();
            setTeams(data.response);

        } catch (error) {
            console.error('Error in handleSearch:', error);
        }
    }

    return (
        <div className={styles.container}>
            <Title level={1}>Teams</Title>
            <Paragraph>Enter the soccer team you want to know more about:</Paragraph>
            <div>
                <Input
                    type="text"
                    placeholder="Search for a team"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button
                    variant="secondary"
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </div>

            {teams.length > 0 && (
                <>
                    <div className={styles.containerCards}>
                        {teams.map((teamData) => (
                            <TeamCard key={teamData.team.id} teamData={teamData} />
                        ))}
                    </div>

                </>
            )}
        </div>
    );
}
