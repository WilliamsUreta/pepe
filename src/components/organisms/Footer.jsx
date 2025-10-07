import { CardFooter } from "react-bootstrap";

function Footer() {
    return (
        <CardFooter className="text-center py-3 bg-dark text-white">
            &copy; {new Date().getFullYear()} Mi Portafolio. Todos los derechos reservados.
        </CardFooter>
    );
}
export default Footer;