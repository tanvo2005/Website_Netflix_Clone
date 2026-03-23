import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Button.module.scss';

const MotionButton = motion.button;
const MotionDiv = motion.div;

const sizeMap = {
    small: styles.small,
    medium: styles.medium,
    large: styles.large,
};

const variantMap = {
    primary: styles.primary,
    secondary: styles.secondary,
};

function Button({
    children,
    variant = 'primary',
    size = 'medium',
    icon,
    className = '',
    to,
    type = 'button',
    ...props
}) {
    const classes = [
        styles.button,
        variantMap[variant] || variantMap.primary,
        sizeMap[size] || sizeMap.medium,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    const content = (
        <>
            {icon ? <span className={styles.icon}>{icon}</span> : null}
            <span>{children}</span>
        </>
    );

    if (to) {
        return (
            <MotionDiv whileHover={{ scale: 1.03, opacity: 0.92 }} whileTap={{ scale: 0.98 }}>
                <Link className={classes} to={to} {...props}>
                    {content}
                </Link>
            </MotionDiv>
        );
    }

    return (
        <MotionButton
            className={classes}
            type={type}
            whileHover={{ scale: 1.03, opacity: 0.92 }}
            whileTap={{ scale: 0.98 }}
            {...props}
        >
            {content}
        </MotionButton>
    );
}

export default Button;
