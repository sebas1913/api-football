    import Image from "next/image";
    import Flag from 'react-world-flags';
    import styles from './playerCard.module.scss';
    import Title from "@/ui/atoms/title/Title";
    import { Response } from "@/app/core/application/dto/players-response";
    import { Icons } from '@/ui/atoms/icons/Icons';
    import { countryFlagMap } from "@/ui/atoms/country/CountryFlag";

    interface PlayerCardProps {
        playerData: Response;
    }

    const PlayerCard = ({ playerData }: PlayerCardProps) => {
        const nationality = playerData.player.nationality;
        const countryCode = countryFlagMap[nationality] || null;

        return (
            <div className={styles.playerCard} key={playerData.player.id}>
                <div className={styles.info}>
                    <strong className={styles.number}>{playerData.player.number ?? '?'}</strong>
                    <strong>
                        {countryCode && (
                            <Flag code={countryCode} className={styles.flag} />
                        )}
                    </strong>
                    <strong>{playerData.player.position}</strong>
                </div>
                <div className={styles.cardHeader}>
                    <div className={styles.containerImage}>
                        <Image className={styles.image} src={playerData.player.photo} alt={playerData.player.photo} width={105} height={5} layout='responsive' />
                    </div>
                    <Title className={styles.title} level={4}>{playerData.player.name ?? 'Unknown'}</Title>
                </div>
                <div className={styles.containerInfo}>
                    <div className={styles.item}>
                        <div className={styles.icon}>
                            {Icons.years}
                        </div>
                        <div className={styles.data}>
                            {playerData.player.age ?? '?'}
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.icon}>
                            {Icons.height}
                        </div>
                        <div className={styles.data}>
                            {playerData.player.height ?? '?cm'}
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.icon}>
                            {Icons.weight}
                        </div>
                        <div className={styles.data}>
                            {playerData.player.weight ?? '?kg'}
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.icon}>
                            {Icons.born}
                        </div>
                        <div className={styles.data}>
                            {playerData.player.birth.date ?? 'Unknown'}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    export default PlayerCard;
