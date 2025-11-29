import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "@formspree/react";

const formatPhoneInput = (value) => {
  const digitsOnly = value.replace(/\D/g, "").slice(0, 15);
  return digitsOnly.replace(/(\d{2})(?=\d)/g, "$1 ").trim();
};

const isPhoneValid = (value) => {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
};

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const MAX_FILE_SIZE = 10 * 1024 * 1024;
const PROJECT_OPTIONS = [
  "Assainissement",
  "Terrassement",
  "Aménagement extérieur",
  "Démolition",
  "Location benne",
  "Location pelle",
];
const OISE_CITIES = [
  "Beauvais",
  "Compiègne",
  "Creil",
  "Chantilly",
  "Senlis",
  "Nogent-sur-Oise",
  "Méru",
  "Clermont",
  "Noyon",
  "Pont-Sainte-Maxence",
];

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  siteAddress: "",
  city: "",
  description: "",
  budget: "",
  consent: false,
};

const Contact = () => {
  const [state, handleSubmit] = useForm("xvgvjkkb");
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [fileError, setFileError] = useState("");
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!state.succeeded) return;

    setFormData(initialFormState);
    setErrors({});
    setSelectedFiles([]);
    setFileError("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    const redirectTimeout = setTimeout(() => {
      navigate("/merci");
    }, 800);

    return () => clearTimeout(redirectTimeout);
  }, [state.succeeded, navigate]);

  const validateField = (field, value) => {
    switch (field) {
      case "name":
        return value.trim() ? "" : "Veuillez saisir votre nom.";
      case "email":
        return emailRegex.test(value)
          ? ""
          : value
          ? "Adresse e-mail invalide."
          : "Adresse e-mail invalide.";
      case "phone":
        return isPhoneValid(value) ? "" : "Numéro de téléphone invalide.";
      case "projectType":
        return value ? "" : "Sélectionnez un type de projet.";
      case "city":
        return value.trim() ? "" : "Indiquez la ville du chantier.";
      case "description":
        return value.trim() ? "" : "Décrivez brièvement votre besoin.";
      case "consent":
        return value ? "" : "Veuillez accepter pour envoyer.";
      default:
        return "";
    }
  };

  const validateFiles = (files = []) => {
    return files.some((file) => file.size > MAX_FILE_SIZE)
      ? "Fichier trop volumineux (max 10 Mo)."
      : "";
  };

  const updateField = (field, value) => {
    const nextValue = field === "phone" ? formatPhoneInput(value) : value;
    setFormData((prev) => ({
      ...prev,
      [field]: nextValue,
    }));

    if (["email", "phone"].includes(field)) {
      setErrors((prev) => ({
        ...prev,
        [field]: validateField(field, nextValue),
      }));
    } else if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: validateField(field, nextValue),
      }));
    }
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files || []);
    setSelectedFiles(files);
    setFileError(validateFiles(files));
  };

  const handleValidatedSubmit = (event) => {
    const requiredFields = [
      "name",
      "email",
      "phone",
      "projectType",
      "description",
      "consent",
    ];

    const newErrors = requiredFields.reduce((acc, field) => {
      const value = field === "consent" ? formData.consent : formData[field];
      return {
        ...acc,
        [field]: validateField(field, value),
      };
    }, {});

    const currentFileError = validateFiles(selectedFiles);
    setFileError(currentFileError);
    setErrors((prev) => ({ ...prev, ...newErrors }));

    const hasErrors =
      Object.values(newErrors).some(Boolean) || Boolean(currentFileError);

    if (hasErrors) {
      event.preventDefault();
      return;
    }

    handleSubmit(event);
  };

  return (
    <section className="position-relative">
      <img src="/images/sdad.png" className="images__wrap-contact" alt="" />
      <div className="wrapper__bg-orange-wrap"></div>
      <div className="container position-relative z-2">
        <div className="row">
          <div className="col-md-6 mb-4 my-md-auto">
            <p className="semi-bold font__size--14 text__14-1024 color__white text-uppercase">
              contact us
            </p>
            <h3 className="bold font__size--58 text__50-1024 text__50-sm text__50-xs color__white text-uppercase mb-4">
              Un projet ? Contactez-nous
            </h3>
            <p className="roboto normal font__size--16 text__16-1024 color__white">
              Faites appel à une équipe locale expérimentée, à l’écoute de vos
              besoins, qui comprend vos contraintes et assure un suivi rigoureux
              à chaque étape de votre projet.
            </p>
              <div className="mt-4 d-none d-lg-block">
              <div className="ratio ratio-4x3 rounded overflow-hidden shadow">
                <iframe
                  className="map-embed"
                  title="TUGAUT TP localisation"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2601.197972965726!2d2.6770133758687593!3d49.31053436878243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e632fc555220af%3A0x4cda2140a959c447!2sTugaut%20tp!5e0!3m2!1sfr!2sfr!4v1764346960590!5m2!1sfr!2sfr"
                  width="600"
                  height="450"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-5 offset-xl-1">
            <form
              className="wrapper__form-contact bg__white mb__min-14"
              onSubmit={handleValidatedSubmit}
              noValidate
            >
              <h3 className="bold font__size--32 color__black text-uppercase mb-4">
                demander un devis
              </h3>
              {state.succeeded && (
                <div className="alert alert-success mb-4" role="alert">
                  Merci ! Votre demande a bien été envoyée.
                </div>
              )}
              {state.errors?.length > 0 && (
                <div className="alert alert-danger mb-4" role="alert">
                  Une erreur est survenue. Réessayez ou contactez-nous au 06 12
                  34 56 78.
                </div>
              )}
              <div className="form-group mb-4">
                <label
                  className="semi-bold font__size--14 text__14-1024 text-uppercase"
                  htmlFor="contact-name"
                >
                  Nom*
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  className="form-control wrapper__field"
                  placeholder="Dupont"
                  value={formData.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  required
                />
                {errors.name && (
                  <p className="text-danger small mb-0">{errors.name}</p>
                )}
              </div>
              <div className="form-group mb-4">
                <label
                  className="semi-bold font__size--14 text__14-1024 text-uppercase"
                  htmlFor="contact-email"
                >
                  E-mail*
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  inputMode="email"
                  className="form-control wrapper__field"
                  placeholder="exemple@domaine.fr"
                  required
                  value={formData.email}
                  onChange={(event) => updateField("email", event.target.value)}
                />
                {errors.email && (
                  <p className="text-danger small mb-0">{errors.email}</p>
                )}
              </div>
              <div className="form-group mb-4">
                <label
                  className="semi-bold font__size--14 text__14-1024 text-uppercase"
                  htmlFor="contact-phone"
                >
                  Téléphone*
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  className="form-control wrapper__field"
                  placeholder="06 12 34 56 78"
                  value={formData.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                  required
                />
                {errors.phone && (
                  <p className="text-danger small mb-0">{errors.phone}</p>
                )}
              </div>
              <div className="form-group mb-4">
                <label
                  className="semi-bold font__size--14 text__14-1024 text-uppercase"
                  htmlFor="contact-project-type"
                >
                  Type de projet*
                </label>
                <select
                  id="contact-project-type"
                  name="projectType"
                  className="form-control wrapper__field"
                  value={formData.projectType}
                  onChange={(event) =>
                    updateField("projectType", event.target.value)
                  }
                  required
                >
                  <option value="">Sélectionnez un type de projet</option>
                  {PROJECT_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.projectType && (
                  <p className="text-danger small mb-0">{errors.projectType}</p>
                )}
              </div>
              {/* <div className="form-group mb-4">
                <label
                  className="semi-bold font__size--14 text__14-1024 text-uppercase"
                  htmlFor="contact-site-address"
                >
                  Adresse du chantier
                </label>
                <input
                  id="contact-site-address"
                  name="siteAddress"
                  type="text"
                  className="form-control wrapper__field"
                  placeholder="12 rue des Artisans"
                  value={formData.siteAddress}
                  onChange={(event) =>
                    updateField("siteAddress", event.target.value)
                  }
                />
              </div> */}
              {/* <div className="form-group mb-4">
                <label
                  className="semi-bold font__size--14 text__14-1024 text-uppercase"
                  htmlFor="contact-city"
                >
                  Ville*
                </label>
                <input
                  id="contact-city"
                  name="city"
                  type="text"
                  list="oise-cities"
                  className="form-control wrapper__field"
                  placeholder="Compiègne"
                  value={formData.city}
                  onChange={(event) => updateField("city", event.target.value)}
                  required
                />
                <datalist id="oise-cities">
                  {OISE_CITIES.map((city) => (
                    <option key={city} value={city} />
                  ))}
                </datalist>
                {errors.city && (
                  <p className="text-danger small mb-0">{errors.city}</p>
                )}
              </div> */}
              <div className="form-group mb-4">
                <label
                  className="semi-bold font__size--14 text__14-1024 text-uppercase"
                  htmlFor="contact-message"
                >
                  Description du besoin*
                </label>
                <textarea
                  id="contact-message"
                  name="description"
                  className="form-control wrapper__field textarea"
                  rows="5"
                  placeholder="Décrivez brièvement votre besoin…"
                  value={formData.description}
                  onChange={(event) =>
                    updateField("description", event.target.value)
                  }
                  required
                ></textarea>
                {errors.description && (
                  <p className="text-danger small mb-0">{errors.description}</p>
                )}
              </div>
              {/* <div className="form-group mb-4">
                <label
                  className="semi-bold font__size--14 text__14-1024 text-uppercase"
                  htmlFor="contact-budget"
                >
                  Budget / échéance (optionnel)
                </label>
                <input
                  id="contact-budget"
                  name="budget"
                  type="text"
                  className="form-control wrapper__field"
                  placeholder="Ex : 50 000 € - fin T3"
                  value={formData.budget}
                  onChange={(event) => updateField("budget", event.target.value)}
                />
              </div> */}
              {/* <div className="form-group mb-4">
                <label
                  className="semi-bold font__size--14 text__14-1024 text-uppercase d-flex justify-content-between"
                  htmlFor="contact-files"
                >
                  Upload fichiers
                  <span className="normal font__size--12 color__gray-2">
                    plans/photos (max 10 Mo, jpg/png/pdf)
                  </span>
                </label>
                <input
                  id="contact-files"
                  name="files"
                  type="file"
                  className="form-control wrapper__field"
                  accept=".jpg,.jpeg,.png,.pdf"
                  multiple
                  onChange={handleFileChange}
                  ref={fileInputRef}
                />
                {fileError && (
                  <p className="text-danger small mb-0">{fileError}</p>
                )}
              </div> */}
              <div className="form-group mb-4 form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="contact-consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={(event) =>
                    updateField("consent", event.target.checked)
                  }
                  required
                />
                <label
                  className="form-check-label semi-bold font__size--14 text__14-1024"
                  htmlFor="contact-consent"
                >
                  J’accepte que TUGAUT TP me contacte au sujet de ma demande.*
                </label>
                {errors.consent && (
                  <p className="text-danger small mb-0">{errors.consent}</p>
                )}
              </div>
              <button
                type="submit"
                className="semi-bold rounded-0 font__size--14 text__14-1024 btn btn__orange shadow color__white text-uppercase"
                disabled={state.submitting}
              >
                {state.submitting
                  ? "Envoi en cours…"
                  : "Envoyer ma demande de devis"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
