import styles from './footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} Acid Archive |{' '}
        <a href="mailto:dev@acidarchive.com">dev@acidarchive.com</a>
      </p>
    </footer>
  );
};
