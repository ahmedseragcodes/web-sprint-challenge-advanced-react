import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../App";
import useForm from "../hooks/useForm";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {

   render (<CheckoutForm />)

    const checkoutFormHeader=screen.getByRole("heading", { name: /Checkout Form/i });

    expect(checkoutFormHeader).toBeInTheDocument();

});

test("form shows success message on submit with form details", () => {
    render (<CheckoutForm />)

    const firstNameInput=screen.getByTestId(/fn/i);
    const lastNameInput=screen.getByTestId(/ln/i);
    const addressInput=screen.getByTestId(/address/i);
    const cityInput=screen.getByTestId(/city/i);
    const stateInput=screen.getByTestId(/state/i);
    const zipInput=screen.getByTestId(/zip/i);
    const checkoutButton=screen.getByTestId(/checkoutButton/i);

    userEvent.type(firstNameInput, "Ahmed");
    userEvent.type(lastNameInput, "Serag");
    userEvent.type(addressInput, "Mountain");
    userEvent.type(cityInput, "Phoenix");
    userEvent.type(stateInput, "Arizona");
    userEvent.type(zipInput, "85000");
    userEvent.click(checkoutButton);

   
    const successText=screen.getByText(/You have ordered some plants! Woo-hoo!/i);
    expect(successText).toBeInTheDocument();

    const successMessage=screen.getByTestId(/successMessage/i);
    expect(successMessage).toBeInTheDocument();    
});
