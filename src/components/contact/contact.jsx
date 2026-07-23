import ContactForm from "./contactForm";
import ContactInfo from "./contactInfo";
function Contact() {
    return (
        <section id='contact' className="relative py-28 px-6 md:px-16 lg:px-28 overflow-hidden">
            <header className="text-center max-w-3xl mx-auto">
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
                    <span className="text-white">Get</span>
                    <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">{" "}In Touch</span>
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-400">Have an idea, an opportunity, or simply want to connect?</p>
            </header>

            <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
                {/* contact Info */}
                <ContactInfo />

                {/* Contact Form */}
                <ContactForm />
            </div>

        </section>
    )
}
export default Contact;