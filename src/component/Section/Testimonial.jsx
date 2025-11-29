import React from "react";

const STAR_COUNT = 5;

const reviews = [
  {
    name: "Maida Bleriot",
    platform: "Avis de Google",
    ratingText: "5/5 ",
    message:
      "Parfait. Rien a dire, une équipe professionnelle. Foncez sans hésiter, je leurs donne une confiance aveugle suite à la réalisation des travaux chez moi.",
  },
  {
    name: "Charlène GUELLI",
    platform: "Avis de Google",
    ratingText: "5/5 ",
    message:
      "Société à l’écoute de son client et qui sait ce qu’elle fait ! Merci pour votre réalisation ! Très bon travail !",
  },
  {
    name: "Natacha Lefebvre",
    platform: "Avis de Google",
    ratingText: "5/5 ",
    message:
      "Personnel très compétente, un homme au grand cœur qui adore son travail, secrétaire attentive à la demande. Beau travail. Merci les Tugaut je recommande.",
  },
  {
    name: "Sophie ELINGUEL LEVOIR",
    platform: "Avis de Google",
    ratingText: "5/5 ",
    message:
      "Super équipe ayant réalisée plusieurs travaux chez nous. Très professionnel et très bon rapport qualité prix.",
  },
  {
    name: "Emmanuel villez-mognier",
    platform: "Avis de Google",
    ratingText: "5/5 ",
    message:
      "Très professionnel Laurent et Anne, une très bonne équipe, très bon rapport qualité prix. Je recommande cette entreprise.",
  },
  {
    name: "Alaster The Mad",
    platform: "Avis de Google",
    ratingText: "5/5 ",
    message: "Belle équipe efficace !",
  },
];

const Testimonial = ({ sectionClassName, titleClassName }) => {
  return (
    <section
      className={["wrapper__section-testimonial", sectionClassName]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="container">
        <div className="text-center mb-5">
          <p className="semi-bold font__size--14 text__14-1024 color__orange text-uppercase animate-fade-up">
            AVIS
          </p>
          <h3
            className={
              [
                "bold font__size--58 text__50-1024 text__50-sm text__50-xs text-uppercase mb-4",
                titleClassName,
              ]
                .filter(Boolean)
                .join(" ") + " animate-fade-up animate-delay-1"
            }
          >
            ce que disent nos clients
          </h3>
        </div>

        <div className="row justify-content-center mb-5">
          <div className="col-xl-11">
            <div className="row">
              {reviews.map((review, index) => {
                const delayClass =
                  index % 3 === 1
                    ? "animate-delay-1"
                    : index % 3 === 2
                    ? "animate-delay-2"
                    : "";

                return (
                  <div
                    className={["col-lg-6 mb-4 animate-fade-up", delayClass]
                      .filter(Boolean)
                      .join(" ")}
                    key={review.name}
                  >
                    <div className="wrapper__card-testimonial">
                      <div className="d-flex flex-column">
                        <div className="mb-2">
                          <h5 className="emdium font__size--20 text__20-1024 text-uppercase mb-0">
                            {review.name}
                          </h5>
                          <p className="normal font__size--12 text__12-1024 color__gray-1 roboto mb-0">
                            {review.platform}
                          </p>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                          <div
                            className="d-flex me-2 testimonial__stars"
                            aria-hidden="true"
                          >
                            {Array.from({ length: STAR_COUNT }).map(
                              (_, idx) => (
                                <span key={idx} className="text-warning">
                                  &#9733;
                                </span>
                              )
                            )}
                          </div>
                          <p className="normal font__size--12 text__12-1024 color__gray-1 roboto mb-0">
                            {review.ratingText}
                          </p>
                        </div>
                        <p className="normal font__size--16 color__gray-1 roboto mb-0">
                          {review.message}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
