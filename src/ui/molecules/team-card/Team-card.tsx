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
                <Image className={styles.image} src={teamData.team.logo} alt={teamData.team.name} width={105} height={110} />
                <Title className={styles.title} level={1}>{teamData.team.name ?? 'Unknown'}</Title>
                <Paragraph>{teamData.team.founded ?? 'Unknown'}</Paragraph>
            </div>
            <div className={styles.containerInfo}>
                <div className={styles.info}>
                    {Icons.world}
                    <Paragraph>{teamData.team.country ?? 'Unknown'}</Paragraph>
                </div>
                <div className={styles.info}>
                    {Icons.city}
                    <Paragraph>{teamData.venue.city ?? 'Unknown'}</Paragraph>
                </div>
                <div className={styles.info}>
                    {Icons.stadium}
                    <Paragraph> {teamData.venue.name ?? 'Unknown'}</Paragraph>
                </div>
                <div className={styles.info}>
                    {Icons.capacity}
                    <Paragraph>{teamData.venue.capacity ?? 'Unknown'}</Paragraph>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;
