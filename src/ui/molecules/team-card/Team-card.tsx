import styles from './teamCard.module.scss'
import Title from "@/ui/atoms/title/Title";
import Paragraph from "@/ui/atoms/paragraph/Paragraph";
import Image from "next/image";
import { Response } from "@/app/core/application/dto/teams-response";
import { Icons } from '@/ui/atoms/icons/Icons';

interface TeamCardProps {
    teamData: Response;
}

const TeamCard = ({ teamData }: TeamCardProps) => {
    return (
        <div className={styles.teamCard} key={teamData.team.id}>
            <div className={styles.cardHeader}>
                <Title level={2}>{teamData.team.name}</Title>
                <Image src={teamData.team.logo} alt={teamData.team.name} width={100} height={100} />
                <Paragraph>{teamData.team.founded}</Paragraph>
            </div>

            <div className={styles.info}>
                {Icons.world}
                <Paragraph>{teamData.team.country}</Paragraph>
            </div>
            <div className={styles.info}>
                {Icons.city}
                <Paragraph>{teamData.venue.city}</Paragraph>
            </div>
            <div className={styles.info}>
                {Icons.stadium}
                <Paragraph> {teamData.venue.name}</Paragraph>
            </div>
            <div className={styles.info}>
                {Icons.capacity}
                <Paragraph>{teamData.venue.capacity}</Paragraph>
            </div>
        </div>
    );
};

export default TeamCard;
