import { styles } from './styles.js';
import ContactsHead from './ContactsHead/ContactsHead.jsx';
import ContactsForm from './ContactsForm/ContactsForm.jsx';
import ContactsSocialLinks from './ContactsSocialLinks/ContactsSocialLinks.jsx';
const Contacts = () => {
    return (
        <>
            <ContactsHead />
            
                <div style={styles.formAndSocialContainer}>
                    <ContactsForm />
                    <ContactsSocialLinks />
                </div>
        
        </>
    );
};

export default Contacts;