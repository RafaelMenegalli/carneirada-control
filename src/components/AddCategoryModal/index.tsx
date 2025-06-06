import { useState } from "react";
import { Button, Input, Modal, Toggle } from "rsuite";
import styles from "./styles.module.scss";

interface AddCategoryModalProps {
    open: boolean;
    setOpen: (value: boolean) => void;
}

export default function AddCategoryModal({ open, setOpen }: AddCategoryModalProps) {
    const [name, setName] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [active, setActive] = useState<boolean>(true)

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <>
            <Modal size="lg" open={open} onClose={handleClose}>
                <Modal.Header>
                    <Modal.Title>Adicionando Categoria</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={styles.form}>
                        <div style={{ gridColumn: 'span 10' }} className={styles.formField}>
                            <span>Nome</span>
                            <Input
                                value={name}
                                onChange={(v) => setName(v)}
                            />
                        </div>

                        <div className={styles.toggleFormField}>
                            <span>Ativo</span>
                            <Toggle
                                checked={active}
                                onChange={(v) => setActive(v)}
                            />
                        </div>

                        <div style={{ gridColumn: 'span 12' }} className={styles.formField}>
                            <span>Descrição</span>
                            <Input
                                as="textarea"
                                rows={3}
                                placeholder="Descrição adicional da categoria..."
                                value={description}
                                onChange={(v) => setDescription(v)}
                            />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} appearance="subtle">
                        Cancelar
                    </Button>
                    <Button onClick={handleClose} appearance="primary" color="green">
                        Cadastrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}