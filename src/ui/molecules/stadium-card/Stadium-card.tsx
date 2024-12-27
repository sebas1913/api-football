import Image from "next/image";
import styles from './stadiumCard.module.scss'
import Title from "@/ui/atoms/title/Title";
import Paragraph from "@/ui/atoms/paragraph/Paragraph";
import { Response } from '@/app/core/application/dto/stadiums-response';
import { Icons } from '@/ui/atoms/icons/Icons';


interface StadiumCardProps {
    stadiumData: Response;
}

const StadiumCard = ({ stadiumData }: StadiumCardProps) => {
    return (
        <div className={styles.stadiumCard} key={stadiumData.id}>
            <div className={styles.cardHeader}>
                <Image className={styles.image} src={stadiumData.image} alt={stadiumData.image} width={105} height={5} layout='responsive' />
                <Title className={styles.title} level={4}>{stadiumData.name ?? 'Unknown'}</Title>
                <div className={styles.containerInfo}>
                    <div className={styles.item}>
                        <div>
                            {Icons.stadium}
                        </div>
                        <div>
                            <Paragraph>{stadiumData.city ?? 'Unknown'}</Paragraph>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div>
                            {Icons.capacity}
                        </div>
                        <div>
                            <Paragraph>{stadiumData.capacity ?? 'Unknown'}</Paragraph>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div>
                            {Icons.surface}
                        </div>
                        <div>
                            <Paragraph>{stadiumData.surface ?? 'Unknown'}</Paragraph>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StadiumCard;
