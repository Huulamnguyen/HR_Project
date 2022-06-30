import { Link } from "react-router-dom";
import { Nav } from 'react-bootstrap';

export default function EmployeeNavbar() {
    return (
        <Nav fill variant="tabs" defaultActiveKey="/">
            <Nav.Item>
                <Nav.Link as={Link} to="/">HR Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/information">Personal Information</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/visa">Visa Status Management</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/housing">Housing</Nav.Link>
            </Nav.Item>
            {sessionStorage.getItem('user') ?
                <Nav.Item>
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                </Nav.Item> :
                <Nav.Item>
                    <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
                </Nav.Item>
            }
        </Nav>
    );
}