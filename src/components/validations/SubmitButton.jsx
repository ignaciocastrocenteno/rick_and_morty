import styles from "../forms/Form.module.css";

export default function SubmitButton({userData}) {
  if (userData.email && userData.password) {
    return (
      <button type="submit" className={styles.submit}>
        login
      </button>
    );
  } else {
    return (
      <button type="submit" className={styles.submit} disabled>
        login
      </button>
    );
  }
}
