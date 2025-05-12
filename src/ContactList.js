const ContactList = ({contactList, title}) => {
    return (
        <div className="contactList container">            
            <h2 className="pb-4 mb-4 border-bottom">Contacts</h2>
            <div>
                {contactList.map((contact) => (
                    <div key={contact.id}>
                        {contact.content.startsWith('http') &&
                            <a href={contact.content} className="contact-preview" target="_blank" rel="noopener noreferrer">
                                <div>
                                    <img src={`${process.env.REACT_APP_API_URL}/contacts/${contact.id}`} alt={contact.description} className="contact-image"/>
                                </div>
                                
                                <p>{ contact.content }</p>
                            </a>
                        }
                        {contact.content.startsWith('+370') &&
                            <a href={"tel:" + contact.content} className="contact-preview" target="_blank" rel="noopener noreferrer">
                                <div>
                                    <img src={`${process.env.REACT_APP_API_URL}/contacts/${contact.id}`} alt={contact.description} className="contact-image"/>
                                </div>
                                
                                <p>{ contact.content }</p>
                            </a>
                        }
                        {contact.content.includes('@') && contact.content.includes('mail') &&
                            <a href={"mailto:" + contact.content} className="contact-preview" target="_blank" rel="noopener noreferrer">
                                <div>
                                    <img src={`${process.env.REACT_APP_API_URL}/contacts/${contact.id}`} alt={contact.description} className="contact-image"/>
                                </div>
                                
                                <p>{ contact.content }</p>
                            </a>
                        }
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ContactList;