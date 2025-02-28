import Layout from "../../components/Layout";
import "../../app/globals.css";

export default function About() {
  return (
    <Layout>
    <div>
      <h1 className="text-2xl font-bold">{`À propos de nous`}</h1>
      <p>{`TestAI est une startup spécialisée dans les solutions IA pour l'agriculture.`}</p>
    </div>
    </Layout>
  );
}
