import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink, useHistory} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/constants";
import {observer} from "mobx-react-lite";


const NavBar = observer(() => {
        const {user} = useContext(Context)
        const history = useHistory()
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>My First Shop</NavLink>
                    {user.isAuth
                        ?
                        <Nav className="ml-auto" style={{color: 'white'}}>
                            <Button
                                onClick={() => history.push(ADMIN_ROUTE)}
                                variant={"outline-light"}
                            >
                                Admin
                            </Button>
                            <Button
                                onClick={() => history.push(LOGIN_ROUTE)}
                                variant={"outline-light"}
                                className="ml-4"
                            >
                                Sign out</Button>
                        </Nav>
                        :
                        <Nav className="ml-auto" style={{color: 'white'}}>
                            <Button
                                variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Authorization</Button>
                        </Nav>
                    }
                </Container>
            </Navbar>
        );
    }
)
export default NavBar;