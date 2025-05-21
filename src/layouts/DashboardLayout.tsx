import type { ReactNode } from "react";
import { Nav, Navbar } from "rsuite";
import CogIcon from '@rsuite/icons/legacy/Cog';
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

type Props = {
    children: ReactNode;
};

export default function DashboardLayout({ children }: Props) {
    return (
        <div className={styles.container}>
            <Navbar>
                <Navbar.Brand as={Link} to="/">Carneirada</Navbar.Brand>
                <Nav>
                    <Nav.Item as={Link} to="/">Início</Nav.Item>
                    <Nav.Item>Análise</Nav.Item>
                    <Nav.Menu title="Cadastros">
                        <Nav.Item as={Link} to="/categories">Categorias</Nav.Item>
                        <Nav.Item>Produtos</Nav.Item>
                    </Nav.Menu>
                </Nav>
                <Nav pullRight>
                    <Nav.Item icon={<CogIcon />}>Configurações</Nav.Item>
                </Nav>
            </Navbar>

            <main className={styles.main}>
                {children}
            </main>
        </div>
    );
}
