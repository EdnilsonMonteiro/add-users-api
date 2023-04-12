import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { format } from 'date-fns';

function ShowCard({ loadCards, setIsModalOpen }) {
    const [users, setUsers] = useState([]);
    const [results, setResults] = useState(3); //Estado que mostra quantos users aparecerão

    const searchUsers = async () => {
        try {
            const response = await axios.get(
                `https://api.randomuser.me/?results=${results}`,
            );

            console.log(response.data.results);
            setUsers([...users, ...response.data.results]);
        } catch (error) {
            console.error("Erro ao buscar usuários", error);
        }
    }

    useEffect(() => {
        searchUsers();
    }, [loadCards])

    //Função para formatar a data no formato "dd/mm/aaaa"
    const formatData = (date) => {
        return format(new Date(date), 'dd/MM/yyyy');
    }

    const handleOpenModal = () => {
        console.log('teste')
        setIsModalOpen(true); // Função para abrir o modal
    };

    return (
        <>
            {users.length > 0 ? ( //Mostra users se tiverem informações nele
                users.map(user => {
                    const { gender, name, cell, picture, dob, id } = user;

                    return (
                        <Col lg="4" md="6" sm="12" key={id.value}>
                            <Card className='mt-3 mb-2 p-3'>
                                <div>
                                    <div className="text-center">
                                        <img className="mx-auto d-block rounded-full" src={picture.medium} alt="Imagem Usuário"></img>

                                        <img
                                            src={gender === "female" ? "../img/female.jpg" : "../img/male.jpg"}
                                            className="w-12 h-12 md:w-12 md:h-12 lg:w-16 lg:h-16 absolute top-0 right-0"
                                            alt="Gênero"
                                        />

                                    </div>
                                    <Card.Title>{name.first} {name.last}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{formatData(dob.date)}</Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">{cell}</Card.Subtitle>

                                    <button onClick={handleOpenModal} className="bg-violet-400 hover:bg-violet-500 text-white font-bold py-2 px-4 mt-1 rounded-full focus:outline-none focus:shadow-outline">View Profile</button>
                                </div>
                            </Card>
                        </Col>
                    )
                })
            ) : (
                <div>Carregando...</div>
            )}
        </>
    )
}

export default ShowCard;