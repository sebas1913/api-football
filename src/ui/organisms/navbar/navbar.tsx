import Image from 'next/image';
import styles from './navbar.module.scss';
import Input from '@/ui/atoms/input/Input';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.nav}>
                <Link href='/'>
                    <Image
                        width={170}
                        height={150}
                        src="/PlayBall.png"
                        alt='PlayBall logo'
                    />
                </Link>
                <Input
                    type='text'
                    placeholder='Buscador de teams'
                    className={styles.input}
                />
            </div>
            <div className={styles.options}>
                <Link href='/plays' className={styles.link}>In play</Link>
                <Link href='/transfers' className={styles.link}>Transfers</Link>
                <Link href='/leagues' className={styles.link}>Leagues</Link>
                <Link href='/players' className={styles.link}>Players</Link>

            </div>

        </nav>
    )
}

export default Navbar;