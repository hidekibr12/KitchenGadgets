import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Basket } from "react-bootstrap-icons";

function NavBarC() {
  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: "#4ddcf5", flexDirection: "column" }}
    >
      <Basket size={65}/>
      <Container>
        <Navbar.Brand href="/">
          <h1>KitchenGadgets</h1>
        </Navbar.Brand>
        <div className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Entrar</Nav.Link>
            <Nav.Link href="/cadastro">Cadastrar Produto</Nav.Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBarC;
