import React, { Fragment } from "react";
import Footer from "../../component/Other/Footer";
import Navbar from "../../component/Other/Navbar";
import Contact from "../../component/Section/Contact";
import Head from "../../component/Section/Head";

const Terms = () => {
  return (
    <Fragment>
      <div className="overflow-hidden">
        <div className="position-relative">
          <img
            src="./../images/project/tugauttp_entrepot.JPG"
            className="images__wrap-head"
            alt=""
          />
          <div className="wrapper__bg-head"></div>
          <Navbar />
          <Head
            default="home"
            current="Mentions légales"
            title={"Mentions légales"}
          />
        </div>

        <section id="mentions-legales">
          <div className="container">
            <div className="mb-5">
              <h2 className="semi-bold font__size--48 text__48-1024 text__48-md text__48-sm text-uppercase">
                Mentions légales et conditions d’utilisation
              </h2>
              <p className="roboto normal font__size--18 text__18-1024 color__gray-1 lh-2 mb-0">
                Les informations ci-dessous présentent l’éditeur du site, les
                modalités de contact et les conditions générales d’utilisation
                du site oiseterrassement.com.
              </p>
            </div>

            <div className="mb-5">
              <h3 className="semi-bold font__size--32 text__32-1024 text__32-xs">
                Contacts utiles
              </h3>
              <ul className="roboto normal font__size--18 text__18-1024 color__gray-1 ps-4">
                <li>Nous suivre sur Facebook et Instagram</li>
                <li>Nous appeler au </li>
                <li>Nous envoyer un message</li>
                <li>Voir nos avis sur Google</li>
                <li>Recrutement</li>
                <li>Adresse : </li>
              </ul>
            </div>

            <div className="mb-5">
              <h3 className="semi-bold font__size--32 text__32-1024 text__32-xs">
                Éditeur du site
              </h3>
              <p className="roboto normal font__size--18 text__18-1024 color__gray-1 lh-2 mb-2">
                tugaut TP dont le siège social est .
              </p>
              <p className="roboto normal font__size--18 text__18-1024 color__gray-1 lh-2 mb-2">
                SIRET : <br />
                N° TVA : <br />
                Téléphone : <br />
                E-mail :
              </p>
              <p className="roboto normal font__size--18 text__18-1024 color__gray-1 lh-2 mb-0">
                Hébergement :
              </p>
            </div>

            <div className="mb-5">
              <h3 className="semi-bold font__size--32 text__32-1024 text__32-xs">
                Conditions générales d'utilisation
              </h3>
              <p className="roboto normal font__size--18 text__18-1024 color__gray-1 lh-2 mb-2">
                <strong>Art. 1 Conditions d'utilisation :</strong> l’accès et
                l’usage du site tugaut-tp.fr impliquent l’acceptation des
                présentes conditions générales. Elles peuvent être complétées
                par des conditions particulières pour certains services. TUGAUT
                TP peut les modifier à tout moment ; l’utilisateur doit les
                consulter régulièrement.
              </p>
              <p className="roboto normal font__size--18 text__18-1024 color__gray-1 lh-2 mb-2">
                <strong>Art. 2 Données personnelles :</strong> les données sont
                destinées à TUGAUT TP, ses filiales ou réseau commercial pour
                enquêtes, analyses, communications, gestion clients ou
                propositions commerciales (avec votre accord). Elles sont
                confidentielles. Conformément à la loi « Informatique et
                Libertés » du 06/01/78, vous disposez de droits d’accès,
                rectification, suppression et opposition en écrivant à 162
                chemin Cerisiers Roussel - 60700 Pontpoint ou à
                contact@oiseterrassement.com, avec justificatif d’identité. Vous
                pouvez vous désabonner des e-mails à tout moment.
              </p>
              <p className="roboto normal font__size--18 text__18-1024 color__gray-1 lh-2 mb-2">
                <strong>Art. 3 Liens hypertextes :</strong> toute création de
                lien vers le site nécessite l’accord du Responsable du Site.
                TUGAUT TP décline toute responsabilité sur les contenus des
                sites tiers liés.
              </p>
              <p className="roboto normal font__size--18 text__18-1024 color__gray-1 lh-2 mb-2">
                <strong>Art. 4 Cookies :</strong> la navigation génère des
                cookies (dont Google Analytics). Les données peuvent être
                transférées aux États-Unis par Google pour analyse statistique.
                Vous pouvez bloquer les cookies via les réglages de votre
                navigateur (voir procédures indiquées) mais certaines
                fonctionnalités peuvent être affectées.
              </p>
              <p className="roboto normal font__size--18 text__18-1024 color__gray-1 lh-2 mb-2">
                <strong>Art. 5 Contenu du site :</strong> TUGAUT TP, l’hébergeur
                et les prestataires s’efforcent de fournir des informations
                exactes et à jour et se réservent le droit de les modifier à
                tout moment. Les prix affichés sont des prix maximum conseillés
                susceptibles d’évoluer.
              </p>
              <p className="roboto normal font__size--18 text__18-1024 color__gray-1 lh-2 mb-2">
                <strong>Art. 6 Contenu manifestement illicite :</strong> vous
                pouvez signaler un contenu illicite à l’hébergeur (formulaire
                dédié). Un signalement abusif est passible d’un an
                d’emprisonnement et 15 000 € d’amende.
              </p>
              <p className="roboto normal font__size--18 text__18-1024 color__gray-1 lh-2 mb-0">
                <strong>Art. 7 Droit applicable :</strong> les présentes CGU
                sont soumises au droit français.
              </p>
            </div>

            <div className="mb-5">
              <h3 className="semi-bold font__size--32 text__32-1024 text__32-xs">
                Plan de site & prestations
              </h3>
              <ul className="roboto normal font__size--18 text__18-1024 color__gray-1 ps-4">
                <li>Aménagement de vos allées : enrobé, gravillons</li>
                <li>
                  Assainissement : raccordement au tout à l'égout et autres
                  réseaux, fosses toutes eaux, micro-station, filtres compacts,
                  remise en conformité, eau pluviale et cuve de récupération
                  d'eau de pluie, réfection de réseaux et dépannage
                </li>
                <li>
                  Terrassement et démolition : nivellement, évacuation de terre
                  et gravats, démolition
                </li>
                <li>Élagage et abattage</li>
                <li>Transport</li>
              </ul>
            </div>
          </div>
        </section>

        <Contact />

        <Footer />
      </div>
    </Fragment>
  );
};

export default Terms;
