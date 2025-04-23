/** @jsxImportSource @emotion/react */
import ContactsSocialLinksItems from "./ContactsSocialLinksItems";
import { useTheme } from "@emotion/react";

import { contactsSocialLinksListStyle, ContactsSocialLinksFind, contactsSocialLinksConatiner } from "./style";
const ContactsSocialLinks = () => {
    const { colors } = useTheme();
    const elements = ContactsSocialLinksItems.map(({ href, icon }) => (
        <li key={href}>
            <a href={href} target="_blank">
                {icon}
            </a>
        </li>
    ));
    return( 
    <div  css={contactsSocialLinksConatiner}>
        <p css={ContactsSocialLinksFind(colors.darkLight)}>Найдите нас:</p>
        <ul css={contactsSocialLinksListStyle}>{elements}</ul>
        </div>
    );
}
export default ContactsSocialLinks;