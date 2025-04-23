import { useState } from "react";
import {styles} from './styles'
const ContactsForm = () =>{
    const [formData, setFormData] = useState({
            email: '',
            name: '',
            message: ''
        });
        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        };
        const handleSubmit = (e) => {
            e.preventDefault();
            console.log('Form submitted:', formData);
            setFormData({
                email: '',
                name: '',
                message: ''
            });
        };
return(
    <div style={styles.formContainer}>
                            <form onSubmit={handleSubmit} style={styles.form}>
                                <div style={styles.flex}>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Ваш email"
                                    style={styles.input}
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Ваше имя"
                                    style={styles.input}
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                </div>
                                
                                <textarea
                                    name="message"
                                    placeholder="Введите сообщение"
                                    style={styles.textarea}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                                <button type="submit" style={styles.button}>
                                    Отправить
                                </button>
                            </form>
                        </div>
)
}
export default ContactsForm