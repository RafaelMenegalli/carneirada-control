import AddOutlineIcon from '@rsuite/icons/AddOutline';
import EditIcon from '@rsuite/icons/Edit';
import SearchIcon from '@rsuite/icons/Search';
import { Divider, IconButton, Input, InputGroup, Pagination, Table, Whisper } from "rsuite";
import styles from "./styles.module.scss";
import { addButtomTooltip } from '../../utils/tooltips/addButtomTooltip';
import AddCategoryModal from '../../components/AddCategoryModal';
import { useState } from 'react';
import type { CategoryType } from '../../utils/types/CategoryType';
import type { RowDataType } from 'rsuite/esm/Table';
import EditCategoryModal from '../../components/EditCategoryModal';

const { Cell, Column, HeaderCell } = Table;

const defaultData: CategoryType[] = [
    { id: 1, name: "Carnes", description: "Produtos de origem animal", active: true },
    { id: 2, name: "Bebidas", description: "Sucos, refrigerantes e bebidas alcoólicas", active: false },
    { id: 3, name: "Hortifruti", description: "Frutas e verduras frescas", active: true },
    { id: 4, name: "Padaria", description: "Pães, bolos e salgados", active: true },
    { id: 5, name: "Limpeza", description: "Produtos de limpeza doméstica", active: false },
    { id: 6, name: "Higiene", description: "Produtos de higiene pessoal", active: true },
    { id: 7, name: "Congelados", description: "Alimentos congelados prontos para o consumo", active: true },
    { id: 8, name: "Pet Shop", description: "Produtos para animais de estimação", active: false },
    { id: 9, name: "Cereais", description: "Grãos e alimentos secos", active: true },
    { id: 10, name: "Laticínios", description: "Leite, queijos e derivados", active: true },
    { id: 11, name: "Doces", description: "Balas, chocolates e sobremesas", active: true },
    { id: 12, name: "Utilidades", description: "Utensílios domésticos", active: true },
    { id: 13, name: "Papelaria", description: "Materiais de escritório e papelaria", active: false },
    { id: 14, name: "Eletrônicos", description: "Pequenos aparelhos eletrônicos", active: true },
    { id: 15, name: "Automotivo", description: "Produtos para carros e motos", active: true },
];

export default function Categories() {
    const [addModalVisible, setAddModalVisible] = useState<boolean>(false)
    const [editModalVisible, setEditModalVisible] = useState<boolean>(false)
    const [selectedItemEdit, setSelectedItemEdit] = useState<CategoryType | null>(null)

    //Pagination ----------
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const handleChangeLimit = (dataKey: number) => {
        setPage(1);
        setLimit(dataKey);
    };
    const data = defaultData.filter((_, i) => {
        const start = limit * (page - 1);
        const end = start + limit;
        return i >= start && i < end;
    });
    //----------

    const handleEdit = (rowData: RowDataType<any>) => {
        setSelectedItemEdit(rowData as any)
        setEditModalVisible(true)
    }

    const handleAdd = () => {
        setAddModalVisible(true)
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.actionBar}>
                    <div className={styles.filters}>
                        <InputGroup className={styles.searchInput}>
                            <Input
                                placeholder='Pesquise por qualquer coisa...'
                            />
                            <InputGroup.Button>
                                <SearchIcon />
                            </InputGroup.Button>
                        </InputGroup>
                    </div>

                    <div className={styles.actionButtons}>
                        <Whisper placement="bottomEnd" controlId="control-id-hover" trigger="hover" speaker={addButtomTooltip}>
                            <IconButton
                                appearance='primary'
                                color='green'
                                icon={<AddOutlineIcon />}
                                onClick={handleAdd}
                            ></IconButton>
                        </Whisper>
                    </div>
                </div>

                <Divider>Todas as Categorias</Divider>

                <div className={styles.table}>
                    <Table
                        height={430}
                        data={data}
                        hover
                        showHeader
                        bordered
                        cellBordered
                    >
                        <Column width={75} align="center" resizable>
                            <HeaderCell>Código</HeaderCell>
                            <Cell dataKey="id" />
                        </Column>

                        <Column flexGrow={1} resizable>
                            <HeaderCell>Nome</HeaderCell>
                            <Cell dataKey="name" />
                        </Column>

                        <Column flexGrow={1} resizable>
                            <HeaderCell>Descrição</HeaderCell>
                            <Cell>
                                {rowData => (
                                    <span>{rowData.description ? rowData.description : "-"}</span>
                                )}
                            </Cell>
                        </Column>

                        <Column width={150} align='center' resizable>
                            <HeaderCell>Status</HeaderCell>
                            <Cell>
                                {rowData => (
                                    <span>{rowData.active ? "Ativo" : "Inativo"}</span>
                                )}
                            </Cell>
                        </Column>

                        <Column width={150} align="center" fixed="right">
                            <HeaderCell>Ações</HeaderCell>
                            <Cell>
                                {rowData => (
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <EditIcon
                                            className={styles.editIcon}
                                            onClick={() => handleEdit(rowData)} />
                                    </span>
                                )}
                            </Cell>
                        </Column>
                    </Table>

                    <div style={{ padding: 20 }}>
                        <Pagination
                            prev
                            next
                            first
                            last
                            ellipsis
                            boundaryLinks
                            maxButtons={5}
                            size="xs"
                            layout={['total', '-', 'limit', '|', 'pager', 'skip']}
                            total={defaultData.length}
                            limitOptions={[10, 30, 50]}
                            limit={limit}
                            activePage={page}
                            onChangePage={setPage}
                            onChangeLimit={handleChangeLimit}
                        />
                    </div>
                </div>
            </div>

            <AddCategoryModal
                open={addModalVisible}
                setOpen={setAddModalVisible}
            />

            {selectedItemEdit && (
                <EditCategoryModal
                    open={editModalVisible}
                    setOpen={setEditModalVisible}
                    data={selectedItemEdit}
                />
            )}
        </>
    )
}