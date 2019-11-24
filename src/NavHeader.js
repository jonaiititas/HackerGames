import React, {useState} from "react";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    FormInput,
    Collapse
} from "shards-react";
import logo from "./logo_gray.png"


export default function NavHeader() {

    const [collapseOpen, setCollapseOpen] = useState(false);

    const toggleNavbar = () => {
        setCollapseOpen(!collapseOpen);
    };

    return (
        <Navbar type="light" theme="light" expand="md">
            <NavbarBrand href="#"><img src={logo} height="40px" alt="logo"/></NavbarBrand>
            <NavbarToggler onClick={toggleNavbar}/>

            <Collapse open={collapseOpen} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink active href="#">
                            Apie projektą
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink active href="#">
                            Kaip naudotis
                        </NavLink>
                    </NavItem>
                </Nav>

                <Nav navbar className="ml-auto">
                    <InputGroup size="sm" seamless>

                        <InputGroupAddon type="prepend">
                            <InputGroupText>
                                <FontAwesomeIcon icon={faSearch}/>
                            </InputGroupText>
                        </InputGroupAddon>
                        <FormInput className="border-0" placeholder="Search..."/>
                    </InputGroup>

                </Nav>
            </Collapse>
        </Navbar>
    );
}