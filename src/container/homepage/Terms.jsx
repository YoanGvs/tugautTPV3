import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
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
            </div>
            <div className="mb-5">
              <h3 className="semi-bold font__size--32 text__32-1024 text__32-xs">
                Éditeur du site : Tugaut TP
              </h3>
              <p className="roboto normal font__size--18 text__18-1024 color__gray-1 lh-2 mb-2">
                TUGAUT TP, société par actions simplifiée (SAS)
                <br />
                Siège social : ZA Moru, 162 rue des Cerisiers Roussel, 60700
                Pontpoint
              </p>
              <p className="roboto normal font__size--18 text__18-1024 color__gray-1 lh-2 mb-2">
                SIRET : 794 675 926 00024
                <br />
                N° TVA : FR08794675926
                <br />
                Téléphone : 06 70 01 24 95
                <br />
                E-mail : tugauttp@gmail.com
                <br />
                Directeur de la publication : David Tugaut, gérant de la
                société Holding Tugaut, présidente de TUGAUT TP
              </p>
            </div>
            <div className="mb-5">
              <h3 className="semi-bold font__size--32 text__32-1024 text__32-xs">
                Hébergeur : Hostinger
              </h3>
              <p className="roboto normal font__size--18 text__18-1024 color__gray-1 lh-2 mb-2">
                Hostinger International Ltd
                <br />
                61 Lordou Vironos str., 6023 Larnaca, Chypre
                <br />
                Site : www.hostinger.fr
              </p>
            </div>
            <div className="mb-5">
              <h3 className="semi-bold font__size--32 text__32-1024 text__32-xs">
                Conception et réalisation : Webessor
              </h3>
              <p className="roboto normal font__size--18 text__18-1024 color__gray-1 lh-2 mb-2">
                Yoän Govaerts, entrepreneur individuel
                <br />
                Adresse : 164 rue Saint Paterne, 60700 Pontpoint
                <br />
                SIRET : 802 364 703 00040
                <br />
                Code APE : 6201Z
                <br />
                Téléphone : 07 67 49 48 38
                <br />
                E-mail : yoangovaerts.pro@gmail.com
              </p>
            </div>

            <div className="mb-5">
              <h3 className="semi-bold font__size--32 text__32-1024 text__32-xs">
                Conditions générales d'utilisation
              </h3>
              <p className="roboto normal font__size--18 text__18-1024 color__gray-1 lh-2 mb-2">
                <strong>Art. 1 Conditions d'utilisation :</strong> l’accès et
                l’usage de ce site impliquent l’acceptation des
                présentes conditions générales. Elles peuvent être complétées
                par des conditions particulières pour certains services. TUGAUT
                TP peut les modifier à tout moment ; l’utilisateur doit les
                consulter régulièrement.
              </p>
              <p className="roboto normal font__size--18 text__18-1024 color__gray-1 lh-2 mb-2">
                <strong>Art. 2 Données personnelles :</strong> les informations
                envoyées avec le formulaire de devis (nom, e-mail, téléphone,
                adresse et description du chantier) servent uniquement à
                répondre à votre demande. Elles sont destinées à TUGAUT TP et
                transmises par le service Formspree, qui achemine les messages
                du formulaire. Conformément au RGPD et à la loi « Informatique
                et Libertés », vous pouvez y accéder, les faire corriger ou
                supprimer, ou vous opposer à leur utilisation, en écrivant à
                tugauttp@gmail.com ou au siège social. Vous pouvez aussi
                adresser une réclamation à la CNIL (www.cnil.fr). Pour en
                savoir plus, consultez notre{" "}
                <NavLink
                  to="/privacy"
                  className="color__orange text-decoration-underline"
                >
                  politique de confidentialité
                </NavLink>
                .
              </p>
              <p className="roboto normal font__size--18 text__18-1024 color__gray-1 lh-2 mb-2">
                <strong>Art. 3 Liens hypertextes :</strong> toute création de
                lien vers le site nécessite l’accord du Responsable du Site.
                TUGAUT TP décline toute responsabilité sur les contenus des
                sites tiers liés.
              </p>
              <p className="roboto normal font__size--18 text__18-1024 color__gray-1 lh-2 mb-2">
                <strong>Art. 4 Cookies :</strong> ce site n’utilise aucun
                cookie de mesure d’audience ni de publicité. Il retient
                seulement, dans votre navigateur, si vous avez masqué la barre
                des réseaux sociaux, pour s’en souvenir à votre prochaine
                visite. La carte Google Maps n’est chargée que si vous cliquez
                sur « Afficher la carte » : Google peut alors déposer ses
                propres cookies.
              </p>
              <p className="roboto normal font__size--18 text__18-1024 color__gray-1 lh-2 mb-2">
                <strong>Art. 5 Contenu du site :</strong> TUGAUT TP, l’hébergeur
                et les prestataires s’efforcent de fournir des informations
                exactes et à jour et se réservent le droit de les modifier à
                tout moment.
              </p>
              <p className="roboto normal font__size--18 text__18-1024 color__gray-1 lh-2 mb-2">
                <strong>Art. 6 Contenu manifestement illicite :</strong> vous
                pouvez signaler un contenu illicite à l’éditeur ou à
                l’hébergeur, aux coordonnées indiquées ci-dessus. Un signalement abusif est passible d’un an
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
