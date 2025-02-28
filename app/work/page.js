import Layout from "../../components/Layout";
import "../../app/globals.css";

const Work = () => {
    return (<Layout>
            
            <div>
                <h1 className="text-2xl font-bold">Nos solutions</h1> 
            
                <p>{`Chez TestAI, nous développons des solutions basées sur l’intelligence artificielle pour répondre
                     aux défis majeurs de l’agriculture moderne. Nos applications SaaS sont conçues pour aider les agriculteurs, 
                     coopératives et entreprises agroalimentaires à optimiser leurs performances, réduire les pertes et améliorer 
                     la durabilité de leurs exploitations.`}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mt-8 content">
            {[
              { title: "Surveillance et Analyse des Cultures", 
                desc: "Détectez les maladies, parasites et stress hydrique grâce à des algorithmes d’IA et des images satellites ou drones. Recevez des recommandations personnalisées pour agir au bon moment.",
                icon: "🌱" },
              { title: "Optimisation des Rendements", 
                desc: "Analysez vos données agricoles en temps réel pour ajuster vos stratégies de semis, d’irrigation et de fertilisation. Nos modèles prédictifs vous aident à prendre les meilleures décisions pour maximiser votre production.", 
                icon: "📊" },
              { title: "Gestion Intelligente des Sols", 
                desc: "Bénéficiez d’une analyse détaillée de la qualité et de la composition de vos sols pour adapter vos pratiques agricoles et améliorer la fertilité sur le long terme.",
                icon: "🔍" },
            ].map((item, index) => (
              <div key={index} className="bg-green-100 p-6 rounded-lg shadow-lg">
                <span className="text-4xl">{item.icon}</span>
                <h3 className="text-xl font-bold mt-4">{item.title}</h3>
                <p className="mt-4">{item.desc}</p>
              </div>
            ))}
            </div>
          <div className="grid md:grid-cols-3 gap-8 mt-8 content">
            {[
              { title: "Prédiction Climatique et Gestion des Risques", 
                desc: "Anticipez les aléas climatiques grâce à nos modèles de prévision avancés. Protégez vos cultures et adaptez vos stratégies en fonction des conditions météorologiques à venir.",
                icon: "🌱" },
              { title: "Automatisation et IoT Agricole", 
                desc: "Connectez vos équipements (capteurs, stations météo, machines agricoles) à notre plateforme pour une gestion intelligente et automatisée de votre exploitation.", 
                icon: "📡" },
              { title: "Envie d'en savoir plus ?", 
                desc: "Contactez-nous et découvrez comment l'IA peut transformer votre activité agricole !",
                icon: "👉" },
            ].map((item, index) => (
              <div key={index} className="bg-green-100 p-6 rounded-lg shadow-lg">
                <span className="text-4xl">{item.icon}</span>
                <h3 className="text-xl font-bold mt-4">{item.title}</h3>
                <p className="mt-4">{item.desc}</p>
              </div>
            ))}
          </div>
            </Layout>
    );
  };
  
  export default Work;
  