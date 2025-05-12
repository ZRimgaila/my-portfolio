import ContactList from "./ContactList";
import useFetch from "./useFetch";

const Contacts = () => {
    const {data: contacts, isLoading, error} = useFetch(`${process.env.REACT_APP_API_URL}/contacts`);
    return (
        <div>
            {error && <div>{error}</div>}
            {isLoading && <div className="contactList container">Loading...</div>}
            {contacts && <ContactList contactList={contacts} title="Contacts"/> }
        </div>
    );
}
 
export default Contacts;