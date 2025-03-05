import Layout from "../../components/Layout";
import "../../app/globals.css";

export default function About() {
  return (
    <Layout>
    <div>
      <h1 className="text-2xl font-bold">{`À propos de nous`}</h1>
      
      <p>{`Chez TestAI, nous révolutionnons l'agriculture grâce à l'intelligence artificielle. 
           Notre mission est d'accompagner les agriculteurs, coopératives et entreprises du secteur agroalimentaire
          dans l'optimisation de leurs opérations grâce à des solutions SaaS innovantes et adaptées à leurs besoins.`}</p>
      <p>{`Grâce à notre expertise en Data & IA, nous développons des applications intelligentes qui permettent d'améliorer
           la productivité, la gestion des cultures et la prise de décision en temps réel. Nos solutions reposent sur
           des algorithmes avancés d'analyse de données, de modélisation climatique et de détection des maladies
            et parasites, garantissant ainsi une agriculture plus durable, efficace et résiliente.`}</p>
      <p>{`Nous croyons en une agriculture de précision, où la technologie et les données permettent aux agriculteurs
           de maximiser leur rendement tout en minimisant leur impact environnemental. 
           Notre engagement : rendre l'intelligence artificielle accessible et utile à tous les acteurs du secteur agricole.`}</p>
      <p>{`Rejoignez-nous dans cette aventure et découvrez comment nos solutions peuvent transformer votre activité agricole !`}</p>
      
    </div>
    </Layout>
  );
}
