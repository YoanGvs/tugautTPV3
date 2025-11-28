import React from "react";

const Step = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="order-12 order-md-1 col-md-6 my-auto pe-lg-5">
            <p className="semi-bold font__size--14 text__14-1024 color__orange text-uppercase">
              comment nous travaillons ?
            </p>
            <h3 className="bold font__size--58 text__50-1024 text__50-sm text__50-xs text-uppercase mb-4">
              Pourquoi choisir TUGAUT TP ?
            </h3>

            <div className="d-flex align-items-start">
              <img
                src="./../images/consulting.png"
                className="object-fit-content"
                alt=""
              />
              <div className="ms-3">
                <h4 className="medium font__size--20 text__20-1024 text-uppercase">
                  Une expertise depuis 2013
                </h4>
                <p className="normal font__size--16 text__16-1024 color__gray-1 roboto">
                  Fondée par Laurent TUGAUT et reprise par son fils David,
                  l’entreprise s’appuie sur une solide expérience du terrain et
                  une approche humaine des projets.
                </p>
              </div>
            </div>
            <div className="d-flex align-items-start my-4">
              <img
                src="./../images/planning.png"
                className="object-fit-content"
                alt=""
              />
              <div className="ms-3">
                <h4 className="medium font__size--20 text__20-1024 text-uppercase">
                  exécutés avec rigueur
                </h4>
                <p className="normal font__size--16 text__16-1024 color__gray-1 roboto">
                  Nous garantissons une exécution rigoureuse, conforme aux
                  normes et respectueuse de vos contraintes techniques et
                  budgétaires.
                </p>
              </div>
            </div>
            <div className="d-flex align-items-start">
              <img
                src="./../images/checking.png"
                className="object-fit-content"
                alt=""
              />
              <div className="ms-3">
                <h4 className="medium font__size--20 text__20-1024 text-uppercase">
                  Un suivi sur mesure
                </h4>
                <p className="normal font__size--16 text__16-1024 color__gray-1 roboto">
                  De l’étude à la livraison, nous vous accompagnons avec des
                  solutions adaptées à vos besoins et à la nature de votre
                  chantier.
                </p>
              </div>
            </div>
          </div>
          <div className="order-md-12 order-1 mb-4 col-md-6 col-lg-5 my-md-auto text-right">
            <img src="./../images/sdsadas.png" className="w-100" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Step;
