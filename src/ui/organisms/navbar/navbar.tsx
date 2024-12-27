"use client";
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Icons } from '@/ui/atoms/icons/Icons';
import Image from 'next/image';
import styles from './navbar.module.scss';
import Link from 'next/link';
import Paragraph from '@/ui/atoms/paragraph/Paragraph';

const Navbar: React.FC = () => {
    const [formattedDate, setFormattedDate] = useState<string>('');
    const pathname = usePathname();


    useEffect(() => {
        const date = new Date();
        const formatted = date.toLocaleDateString('en-EN', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        }).toUpperCase();
        setFormattedDate(formatted);
    }, []);

    return (
        <nav className={styles.navbar}>
            <div className={styles.nav}>
                <div className={styles.date}>
                    <Paragraph><b>{formattedDate}</b></Paragraph>
                    <Paragraph>Your passion</Paragraph>
                </div>
                <div className={styles.logo}>
                    <Link href='/'>
                        <Image
                            width={145}
                            height={140}
                            src="/PlayBall.png"
                            alt='PlayBall logo'
                            layout='responsive'
                            sizes="(max-width: 600px) 30vw, (max-width: 1024px) 10vw, 10vw"
                        />
                    </Link>
                </div>
                <div className={styles.socialNetworks}>
                    {Icons.instagram}
                    {Icons.twitter}
                    {Icons.youtube}
                </div>
            </div>

            <div className={styles.options}>
                <Link href='/teams' className={`${styles.link} ${pathname === '/teams' ? styles.active : ''}`}>Teams</Link>
                <Link href='/stadiums' className={`${styles.link} ${pathname === '/stadiums' ? styles.active : ''}`}>Stadiums</Link>
                <Link href='/players' className={`${styles.link} ${pathname === '/players' ? styles.active : ''}`}>Players</Link>
            </div>
        </nav>
    );
};

export default Navbar;
