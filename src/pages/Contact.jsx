import ContactCard from "../components/ContactCard/ContactCard"
import useTitle from "../components/DynamicTitle/useTitle";

function Contact() {
    useTitle("Contact Me")
    return (
        <main className="content">
            <ContactCard />
        </main>
    )
}

export default Contact