import styles from '../styles/layout.module.css'

export const Footer = () => {

    return(
        <footer className={styles.footer}>
        <span>Learn </span>
        <a
        className={styles.link}
        href="https://reactjs.org/"
        target="_blank"
        rel="noopener noreferrer"
        >
        React
        </a>
        <span>, </span>
        <a
        className={styles.link}
        href="https://redux.js.org/"
        target="_blank"
        rel="noopener noreferrer"
        >
        Redux
        </a>
        <span>, </span>
        <a
        className={styles.link}
        href="https://redux-toolkit.js.org/"
        target="_blank"
        rel="noopener noreferrer"
        >
        Redux Toolkit
        </a>
        ,<span> and </span>
        <a
        className={styles.link}
        href="https://react-redux.js.org/"
        target="_blank"
        rel="noopener noreferrer"
        >
        React Redux
        </a>
    </footer>)
}