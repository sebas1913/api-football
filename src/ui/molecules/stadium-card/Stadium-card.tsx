import { Response } from '@/app/core/application/dto/stadiums-response';
// import { Icons } from '@/ui/atoms/icons/Icons';
import styles from './stadiumCard.module.scss'
import Title from "@/ui/atoms/title/Title";
import Paragraph from "@/ui/atoms/paragraph/Paragraph";
import Image from "next/image";


interface TeamCardProps {
    stadiumData: Response;
}

const StadiumCard = ({ stadiumData }: TeamCardProps) => {
    return (
        <div className={styles.stadiumCard} key={stadiumData.id}>
            <div className={styles.cardHeader}>
                <Image className={styles.image} src={stadiumData.image} alt={stadiumData.image} width={105} height={65} layout='responsive' />
                <Title className={styles.title} level={1}>{stadiumData.name ?? 'Unknown'}</Title>
                <Paragraph>{stadiumData.capacity ?? 'Unknown'}</Paragraph>
            </div>
            {/* <div className={styles.containerInfo}>
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
            </div> */}
        </div>
    );
};

export default StadiumCard;
