import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);

    const headingContainer=screen.getByText(/Checkout Form/i);

    expect(headingContainer).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);

    const firstNameContainer=screen.getByLabelText(/first Name/i);

    const lastNameContainer=screen.getByLabelText(/last name/i);

    const addressContainer=screen.getByLabelText(/address/i);

    const cityContainer=screen.getByLabelText(/city/i);

    const stateContainer=screen.getByLabelText(/state/i);

    const zipContainer=screen.getByLabelText(/zip/i);

    userEvent.type(firstNameContainer, "Ahmed");

    userEvent.type(lastNameContainer, "Serag");

    userEvent.type(addressContainer, "test");

    userEvent.type(cityContainer, "test");

    userEvent.type(stateContainer, "test");

    userEvent.type(zipContainer, "85045");

    const checkoutButton=screen.getByRole("button", /checkout/i);

    userEvent.click(checkoutButton);

    const successMessage=screen.getByText(/You have ordered some plants/i);

    expect(successMessage).toBeInTheDocument();


});
