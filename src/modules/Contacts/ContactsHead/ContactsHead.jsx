/** @jsxImportSource @emotion/react */
import { useTheme } from "@emotion/react";
import contactsHeadItems from "./contactsHeadItems";

import { contactsHeadHeading,contactsHeadContactInfo, contactsHeadContactItem} from './styles'
const ContactsHead = () => {
    const { colors } = useTheme();

    const elements = contactsHeadItems.map(({ href, text }) => (
        <li key={text} css={contactsHeadContactInfo}>
            <p href={href} css={contactsHeadContactItem(colors.darkLight)}>
                {text}
            </p>
        </li>
    ));
    return (
        <div>
            <h1 css={contactsHeadHeading}>Контакты</h1>

            <ul>{elements}</ul>
        </div>

    )
}
export default ContactsHead