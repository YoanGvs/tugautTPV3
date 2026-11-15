import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import Footer from '../../component/Other/Footer'
import Navbar from '../../component/Other/Navbar'
import Contact from '../../component/Section/Contact'
import Head from '../../component/Section/Head'

const Privacy = () => {
    return (
        <Fragment>
            <div className="overflow-hidden">
                <div className="position-relative">
                    <img src="/images/project/tugauttp_entrepot.JPG" className="images__wrap-head" alt="" />
                    <div className="wrapper__bg-head"></div>
                    <Navbar />
                    <Head default="home" current="Politique de confidentialité" title={"Politique de confidentialité"} />
                </div>

                <section>
                    <div className="container">
                        <div className="mb-5">
                            <h2 className="semi-bold font__size--48 text__48-1024 text__48-md text__48-sm text-uppercase">Politique de confidentialité</h2>
                            <p className="roboto normal font__size--18 text__18-1024 color__gray-1 lh-2 mb-2">
                                Cette page explique simplement ce que TUGAUT TP fait des informations que vous lui confiez sur ce site.
                            </p>
                            <p className="roboto normal font__size--16 text__16-1024 color__gray-1 lh-2 mb-0">
                                Dernière mise à jour : 15 novembre 2026
                            </p>
                        </div>

                        <div className="mb-4">
                            <h3 className="semi-bold font__size--32 text__32-1024 mb-3">Qui s’occupe de vos données ?</h3>
                            <p className="roboto normal font__size--18 text__18-1024 color__gray-1 lh-2 mb-0">
                                TUGAUT TP, SAS dont le siège est au ZA Moru, 162 rue des Cerisiers Roussel, 60700 Pontpoint.
                                <br />
                                E-mail : tugauttp@gmail.com
                                <br />
                                Téléphone : 06 70 01 24 95
                            </p>
                        </div>

                        <div className="mb-4">
                            <h3 className="semi-bold font__size--32 text__32-1024 mb-3">Quelles données ?</h3>
                            <p className="roboto normal font__size--18 text__18-1024 color__gray-1 lh-2 mb-0">
                                Uniquement celles que vous écrivez dans le formulaire de demande de devis : nom, e-mail, téléphone, type de projet, adresse et ville du chantier, description de votre besoin. Le site ne crée pas de compte et ne mesure pas votre navigation.
                            </p>
                        </div>

                        <div className="mb-4">
                            <h3 className="semi-bold font__size--32 text__32-1024 mb-3">Pourquoi ?</h3>
                            <p className="roboto normal font__size--18 text__18-1024 color__gray-1 lh-2 mb-0">
                                Pour étudier votre demande, vous recontacter et vous envoyer un devis. Ces échanges sont des démarches préalables à un contrat, faites à votre demande (article 6.1.b du RGPD). Vos données ne servent pas à de la publicité et ne sont jamais vendues.
                            </p>
                        </div>

                        <div className="mb-4">
                            <h3 className="semi-bold font__size--32 text__32-1024 mb-3">Qui y a accès ?</h3>
                            <p className="roboto normal font__size--18 text__18-1024 color__gray-1 lh-2 mb-3">
                                Seulement l’équipe de TUGAUT TP. Pour fonctionner, le site s’appuie sur des prestataires techniques :
                            </p>
                            <ul className="list__normal roboto normal font__size--18 text__18-1024 color__gray-1 mb-3">
                                <li>Formspree, Inc. (États-Unis), qui transmet le formulaire ;</li>
                                <li>Google (messagerie Gmail), qui reçoit les demandes ;</li>
                                <li>Hostinger International Ltd (Chypre), qui héberge le site.</li>
                            </ul>
                            <p className="roboto normal font__size--18 text__18-1024 color__gray-1 lh-2 mb-0">
                                Formspree et Google étant des sociétés américaines, vos données peuvent être transférées et stockées aux États-Unis.
                            </p>
                        </div>

                        <div className="mb-4">
                            <h3 className="semi-bold font__size--32 text__32-1024 mb-3">Combien de temps ?</h3>
                            <p className="roboto normal font__size--18 text__18-1024 color__gray-1 lh-2 mb-0">
                                3 ans après notre dernier échange, puis elles sont supprimées. Si vous devenez client, les devis signés et les factures sont gardés 10 ans, comme la loi l’impose (article L123-22 du Code de commerce).
                            </p>
                        </div>

                        <div className="mb-4">
                            <h3 className="semi-bold font__size--32 text__32-1024 mb-3">Vos droits</h3>
                            <p className="roboto normal font__size--18 text__18-1024 color__gray-1 lh-2 mb-3">
                                Vous pouvez à tout moment consulter vos données, les faire corriger ou supprimer, vous opposer à leur utilisation, en limiter l’usage ou en recevoir une copie. Il suffit d’écrire à tugauttp@gmail.com ou par courrier au siège. Nous répondons sous un mois.
                            </p>
                            <p className="roboto normal font__size--18 text__18-1024 color__gray-1 lh-2 mb-0">
                                Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL : www.cnil.fr, ou 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07.
                            </p>
                        </div>

                        <div className="mb-4">
                            <h3 className="semi-bold font__size--32 text__32-1024 mb-3">Cookies</h3>
                            <p className="roboto normal font__size--18 text__18-1024 color__gray-1 lh-2 mb-0">
                                Ce site n’utilise aucun cookie de mesure d’audience ni de publicité. La carte Google Maps n’est chargée que si vous cliquez sur « Afficher la carte » : Google peut alors déposer ses propres cookies. Plus de détails dans les{' '}
                                <NavLink to="/terms" className="color__orange text-decoration-underline">mentions légales</NavLink>.
                            </p>
                        </div>

                        <div className="mb-4">
                            <h3 className="semi-bold font__size--32 text__32-1024 mb-3">Démarchage téléphonique</h3>
                            <p className="roboto normal font__size--18 text__18-1024 color__gray-1 lh-2 mb-0">
                                Si vous ne souhaitez pas être démarché par téléphone, vous pouvez vous inscrire gratuitement sur la liste d’opposition Bloctel (www.bloctel.gouv.fr), comme le prévoit l’article L223-2 du Code de la consommation.
                            </p>
                        </div>

                    </div>
                </section>

                <Contact />

                <Footer />
            </div>
        </Fragment>
    )
}

export default Privacy
