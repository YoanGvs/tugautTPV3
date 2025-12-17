import React, { Fragment } from 'react'
import Footer from '../../component/Other/Footer'
import Navbar from '../../component/Other/Navbar'
import Contact from '../../component/Section/Contact'
import Head from '../../component/Section/Head'

const Terms = () => {
    return (
        <Fragment>
            <div className="overflow-hidden">
                <div className="position-relative">
                    <img src="./../images/Bg.png" className="images__wrap-head" alt="" />
                    <div className="wrapper__bg-head"></div>
                    <Navbar />
                    <Head default="" current="Dernière mise à jour" title={"Mentions légales"} />
                </div>

                <section id="mentions-legales">
                    <div className="container">
                        <div className="mb-5">
                            <h2 className='semi-bold font__size--48 text__48-1024 text__48-md text__48-sm'>Politique de confidentialité</h2>
                            <p className='roboto normal font__size--18 text__18-1024 color__gray-1 lh-2'>
                                Art.1 Règles de confidentialité<br />
                                Le règlement général sur la protection des données du 27 avril 2016 (ci-après le RGPD, ce qui signifie le General Data Protection Regulation) est d’application à partir du 25 mai 2018. Il impose des règles et conditions strictes aux entreprises et commerçants dans le cadre du traitement des données à caractère personnel de leurs clients et prospects, et ce afin de protéger la vie privée de ceux-ci.
                                <br /><br />
                                A travers la présente, nous entendons vous communiquer des informations claires et précises concernant le traitement de vos données à caractère personnel.
                            </p>
                        </div>

                        <div className="mb-5">
                            <h3 className='semi-bold font__size--32 text__32-1024 text__32-xs'>Art.2 Le responsable du traitement</h3>
                            <p className='roboto normal font__size--18 text__18-1024 color__gray-1 lh-2'>Le « responsable du traitement » de vos données à caractère personnel est le responsable du site que vous avez utilisé et auquel vous avez communiqué des données.</p>
                        </div>

                        <div className="mb-5">
                            <h3 className='semi-bold font__size--32 text__32-1024 text__32-xs'>Art.3 Base légales du traitement des données et utilisation</h3>
                            <p className='roboto normal font__size--18 text__18-1024 color__gray-1 lh-2'>
                                Nous ne pouvons utiliser vos données à caractère personnel qu’à des fins à la fois légitimes et nécessaires (art. 6 du RGPD) :
                                Cela signifie concrètement que nous traitons vos données à caractère personnel, que cela soit ou non sous forme électronique, pour des finalités légitimes dans le cadre de la relation contractuelle, du business et de la sécurité/sûreté.
                                Ces finalités sont notamment, mais pas seulement, les suivantes :
                                Communication d’informations, offres et prospect;
                                Communications dans le cadre de l’exécution d’un contrat;
                            </p>
                        </div>

                        <div className="mb-5">
                            <h3 className='semi-bold font__size--32 text__32-1024 text__32-xs'>Art.4 Qu’est qu’une donnée à caractère personnel</h3>
                            <p className='roboto normal font__size--18 text__18-1024 color__gray-1 lh-2'>
                                Les données à caractère personnel incluent toutes les informations qui vous concernent et sur base desquelles vous pouvez être identifié. Les données anonymes, qui ne permettent pas de vous identifier, ne sont par conséquent pas considérées comme des données à caractère personnel. Vos données à caractère personnel peuvent donc comprendre :
                            </p>
                            <ul className='roboto normal font__size--18 text__18-1024 color__gray-1 ps-4'>
                                <li>Données relatives à votre identité (nom, prénom, adresse, numéro à la TVA, numéro d’entreprise, etc.)</li>
                                <li>Données de statut personnel (numéro de téléphone, e-mail personnel, …)</li>
                                <li>Données financières (numéro de compte bancaire, détails de facturation, …)</li>
                                <li>Données relatives à l’exécution du contrat conclu avec nous (objet du contrat, adresse de facturation, données professionnelles, …)</li>
                                <li>Données relatives à l’utilisation d’équipement électronique, tel que des ordinateurs (mot de passe, log data, données d’identification électronique, détails de facturation, …)</li>
                                <li>Données sensibles : nous respectons strictement l’interdiction de traiter ces données.</li>
                            </ul>
                            <p className='roboto normal font__size--18 text__18-1024 color__gray-1 lh-2'>
                                Comment utilisons-nous vos informations ?<br />
                                Avec qui partageons-nous vos informations ?
                            </p>
                        </div>

                        <div className="mb-5">
                            <h3 className='semi-bold font__size--32 text__32-1024 text__32-xs'>Art.5 Sources et origines des données à caractère personnel</h3>
                            <p className='roboto normal font__size--18 text__18-1024 color__gray-1 lh-2'>
                                En principe, les données que nous possédons proviennent de vous.
                                Si vous n’entendez pas fournir les informations obligatoires ou nécessaires, vous pouvez perdre le bénéfice de certains avantages et/ou nous pouvons décider de mettre fin à nos services à votre profit.
                            </p>
                        </div>

                        <div className="mb-5">
                            <h3 className='semi-bold font__size--32 text__32-1024 text__32-xs'>Art.6 Accès aux données à caractère personnel</h3>
                            <p className='roboto normal font__size--18 text__18-1024 color__gray-1 lh-2'>
                                Vos données sont essentiellement à usage interne. Pour certains motifs légitimes, vos données à caractère personnel peuvent être communiquées, voire même traitées, par des tierces parties. Nous veillerons toutefois au respect de la réglementation RGPD par nos sous-traitants. Le traitement des données par ces derniers est régi par un cadre légal strict.
                            </p>
                        </div>

                        <div className="mb-5">
                            <h3 className='semi-bold font__size--32 text__32-1024 text__32-xs'>Art.7 Durée de conservation des données</h3>
                            <p className='roboto normal font__size--18 text__18-1024 color__gray-1 lh-2'>
                                Nous mettons les moyens nécessaires en œuvre afin d’assurer que la conservation des données à caractère personnel pour les finalités décrites ci-dessus n’outrepasse pas les durées légales.
                            </p>
                        </div>

                        <div className="mb-5">
                            <h3 className='semi-bold font__size--32 text__32-1024 text__32-xs'>Art.8 Quels sont vos droits ?</h3>
                            <p className='roboto normal font__size--18 text__18-1024 color__gray-1 lh-2'>
                                Nous nous engageons à prendre les mesures techniques et organisationnelles appropriées afin de garantir la sécurité du traitement des données à caractère personnel de chacun (Art. 32 du RGPD).
                            </p>
                            <ul className='roboto normal font__size--18 text__18-1024 color__gray-1 ps-4'>
                                <li>Droit d’accès (Art. 15 du RGPD)</li>
                                <li>Droit de rectification (Art. 16 RGPD)</li>
                                <li>Droit à l’oubli (Art. 17 du GDPR) et Droit à la limitation du traitement (Art. 18 du GDPR)</li>
                                <li>Droit d’introduire une réclamation (Art. 77 du GDPR)</li>
                            </ul>
                        </div>

                        <div className="mb-5">
                            <h3 className='semi-bold font__size--32 text__32-1024 text__32-xs'>Art.9. Notre engagement</h3>
                            <p className='roboto normal font__size--18 text__18-1024 color__gray-1 lh-2'>
                                Nous avons pour objectif de mettre en œuvre des techniques de sécurité afin de protéger les données stockées contre les accès non autorisés, les usages inappropriés, les altérations, la destruction illégale ou accidentelle et la perte accidentelle.
                            </p>
                        </div>

                        <div className="mb-5">
                            <h3 className='semi-bold font__size--32 text__32-1024 text__32-xs'>Art.10. Procédure en cas de violations</h3>
                            <p className='roboto normal font__size--18 text__18-1024 color__gray-1 lh-2'>
                                Il est toujours possible que des données à caractère personnel traitées dans le cadre de la relation contractuelle tombent dans de mauvaises mains à la suite d’une erreur humaine, d’une erreur informatique, etc.
                                Lorsque la violation présente un risque élevé pour les droits et libertés de la personne, nous l’informerons immédiatement des faits et mesures. Nous nous assurerons que le nécessaire soit fait quant à la notification de la violation en question à la Commission vie privée dans les 72 heures après en avoir pris connaissance, à moins que la violation ne présente pas un risque élevé pour les droits et libertés de la personne. (Art. 32-34 du GDPR).
                            </p>
                        </div>

                        <div className="mb-5">
                            <h3 className='semi-bold font__size--32 text__32-1024 text__32-xs'>Art. 11. Consentement</h3>
                            <p className='roboto normal font__size--18 text__18-1024 color__gray-1 lh-2'>
                                Vous donnez votre consentement exprès, éclairé et univoque en vue du traitement des données à caractère personnel tels que décrites dans la présente Privacy Notice. Vous avez le droit de retirer votre consentement à tout moment, sur simple demande écrite. Nous nous réservons le droit de modifier la présente Privacy Notice.
                            </p>
                            <p className='roboto normal font__size--18 text__18-1024 color__gray-1 lh-2'>
                                Opposition au démarchage téléphonique<br />
                                Conformément à la loi « informatique et libertés » n°2014-344 du 17 mars 2014 relative à la consommation et aux dispositions du Code de la Consommation (Article L. 223-2 du Code de la Consommation), vous pouvez exercer votre droit d'accès aux données vous concernant en vous inscrivant sur la liste d'opposition au démarchage téléphonique « Bloctel ».
                            </p>
                        </div>
                    </div>
                </section>

                <Contact />

                <Footer />
            </div >
        </Fragment>
    )
}

export default Terms
