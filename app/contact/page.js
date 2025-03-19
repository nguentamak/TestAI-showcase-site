import ContactForm from './ContactForm';
import Layout from "../../components/Layout";

export default function ContactPage() {
  return (
    <>
        <Layout>
        <div className="cards">
      <h1>Contact us</h1>
      <ContactForm />
    </div>
        </Layout>
        </>
  );
}