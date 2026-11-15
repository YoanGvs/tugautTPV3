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

const fillForm = ({ siteAddress = "", city = "" } = {}) => {
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
  fireEvent.change(screen.getByLabelText(/^ville/i), {
    target: { value: city },
  });
  fireEvent.change(screen.getByLabelText(/^description/i), {
    target: { value: "Creuser une tranchée" },
  });
  fireEvent.click(screen.getByLabelText(/j'ai lu et j'accepte/i));
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

test("envoie la demande quand l'adresse et la ville sont remplies", () => {
  render(<Contact />);
  fillForm({ siteAddress: "12 rue des Artisans", city: "Compiègne" });
  submit();

  expect(mockHandleSubmit).toHaveBeenCalled();
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
