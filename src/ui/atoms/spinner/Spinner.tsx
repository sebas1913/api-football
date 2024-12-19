
import Image from 'next/image';
import styles from './Spinner.module.scss';

const Spinner: React.FC = () => {
    return (
        <div className={styles.spinnerContainer}>
            <Image
                src='/ball.png'
                width={120}
                height={120}
                alt=''
                className={styles.spinner}
            />
        </div>
    );
};

export default Spinner;
