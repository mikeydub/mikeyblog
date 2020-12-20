import ConvertKitForm from "convertkit-react";
import styles from './form.module.css';

const FORM_ID = 1875705;

const config = {
    formId: FORM_ID,
    template: 'clare',
    hideName: true,
    showLabels: false,
    namePlaceholder: 'e.g. Zac Efron',
    emailPlaceholder: 'e.g. zac@efron.com',
    submitText: 'Sign up',
}

const Form = () => (
    <ConvertKitForm className={styles.ckfm} {...config} />
)

export default Form;