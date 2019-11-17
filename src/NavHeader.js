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
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    FormInput,
    Collapse
} from "shards-react";



export default function NavHeader() {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [collapseOpen, setCollapseOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const toggleNavbar = () => {
        setCollapseOpen(!collapseOpen);
    };

    return (
        <Navbar type="light" theme="light" expand="md">
            <NavbarBrand href="#">Hacker Games Project</NavbarBrand>
            <NavbarToggler onClick={toggleNavbar}/>

            <Collapse open={collapseOpen} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink active href="#">
                            Active
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" disabled>
                            Disabled
                        </NavLink>
                    </NavItem>
                    <Dropdown
                        open={dropdownOpen}
                        toggle={toggleDropdown}
                    >
                        <DropdownToggle nav caret>
                            Dropdown
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Action</DropdownItem>
                            <DropdownItem>Another action</DropdownItem>
                            <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
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