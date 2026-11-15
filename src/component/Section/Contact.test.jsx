import { render, screen, fireEvent } from "@testing-library/react";
import Contact from "./Contact";

const mockHandleSubmit = jest.fn();

jest.mock("@formspree/react", () => ({
  useForm: () => [
    { succeeded: false, submitting: false, errors: [] },
    mockHandleSubmit,
  ],
}));

// virtual: Jest 27 can't resolve the "exports" field of react-router-dom v7
jest.mock(
  "react-router-dom",
  () => ({
    useNavigate: () => jest.fn(),
  }),
  { virtual: true }
);

const fillForm = ({ siteAddress = "", postalCode = "60700", city = "" } = {}) => {
  fireEvent.change(screen.getByLabelText(/^nom/i), {
    target: { value: "Dupont" },
  });
  fireEvent.change(screen.getByLabelText(/^e-mail/i), {
    target: { value: "dupont@exemple.fr" },
  });
  fireEvent.change(screen.getByLabelText(/^téléphone/i), {
    target: { value: "0612345678" },
  });
  fireEvent.change(screen.getByLabelText(/^type de projet/i), {
    target: { value: "Terrassement" },
  });
  fireEvent.change(screen.getByLabelText(/^adresse du chantier/i), {
    target: { value: siteAddress },
  });
  fireEvent.change(screen.getByLabelText(/^code postal/i), {
    target: { value: postalCode },
  });
  fireEvent.change(screen.getByLabelText(/^ville/i), {
    target: { value: city },
  });
  fireEvent.change(screen.getByLabelText(/^description/i), {
    target: { value: "Creuser une tranchée" },
  });
};

const submit = () =>
  fireEvent.click(screen.getByRole("button", { name: /envoyer/i }));

beforeEach(() => mockHandleSubmit.mockClear());

test("refuse l'envoi quand l'adresse du chantier est vide", () => {
  render(<Contact />);
  fillForm({ city: "Compiègne" });
  submit();

  expect(screen.getByText("Indiquez l'adresse du chantier.")).toBeInTheDocument();
  expect(mockHandleSubmit).not.toHaveBeenCalled();
});

test("refuse l'envoi quand la ville est vide", () => {
  render(<Contact />);
  fillForm({ siteAddress: "12 rue des Artisans" });
  submit();

  expect(screen.getByText("Indiquez la ville du chantier.")).toBeInTheDocument();
  expect(mockHandleSubmit).not.toHaveBeenCalled();
});

test("refuse l'envoi quand le code postal n'a pas 5 chiffres", () => {
  render(<Contact />);
  fillForm({
    siteAddress: "12 rue des Artisans",
    postalCode: "607",
    city: "Pontpoint",
  });
  submit();

  expect(screen.getByText("Code postal invalide (5 chiffres).")).toBeInTheDocument();
  expect(mockHandleSubmit).not.toHaveBeenCalled();
});

test("ne garde que les chiffres saisis dans le code postal", () => {
  render(<Contact />);
  const postalCode = screen.getByLabelText(/^code postal/i);
  fireEvent.change(postalCode, { target: { value: "60 7a00" } });

  expect(postalCode).toHaveValue("60700");
});

test("retire les espaces en trop autour de l'adresse quand on quitte le champ", () => {
  render(<Contact />);
  const address = screen.getByLabelText(/^adresse du chantier/i);
  fireEvent.change(address, { target: { value: "  12   rue des Artisans " } });
  fireEvent.blur(address);

  expect(address).toHaveValue("12 rue des Artisans");
});

test("envoie la demande quand l'adresse et la ville sont remplies", () => {
  render(<Contact />);
  fillForm({ siteAddress: "12 rue des Artisans", city: "Compiègne" });
  submit();

  expect(mockHandleSubmit).toHaveBeenCalled();
});

test("explique sous le formulaire à quoi servent les données", () => {
  render(<Contact />);

  expect(
    screen.getByText(/servent uniquement à traiter votre demande de devis/i)
  ).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: /politique de confidentialité/i })
  ).toHaveAttribute("href", "/privacy");
});

test("n'impose aucune case à cocher pour envoyer une demande", () => {
  render(<Contact />);

  expect(screen.queryByRole("checkbox")).not.toBeInTheDocument();
});

test("ne charge pas la carte Google tant que le visiteur n'a pas cliqué", () => {
  render(<Contact />);

  expect(screen.queryByTitle("TUGAUT TP localisation")).not.toBeInTheDocument();
});

test("charge la carte Google après un clic sur Afficher la carte", () => {
  render(<Contact />);
  fireEvent.click(screen.getByRole("button", { name: /afficher la carte/i }));

  expect(screen.getByTitle("TUGAUT TP localisation")).toBeInTheDocument();
});
