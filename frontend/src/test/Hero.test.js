import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";

describe("Hero Component",()=>{
    test("renders hero image",()=>{
        render(<Hero/>);
        const heroImage = screen.getByAltText("Hero image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src","/media/images/homeHero.png"); 
    })
     test("renders signup image",()=>{
        render(<Hero/>);
        const signupButton = screen.getByRole("button",{name:/Sign up for free/i});
        expect(signupButton).toBeInTheDocument();
        expect(signupButton).toHaveClass("btn-primary"); 
    })
});