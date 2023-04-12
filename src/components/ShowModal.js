import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';

function ShowModal({isModalOpen, setIsModalOpen}) {

    const handleCloseModal = () => {
        setIsModalOpen(false); // Função para fechar o modal
    };

    return (
    <>
    <div className="fixed z-50 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white w-96 p-6 rounded-lg">
                {/* Conteúdo do modal */}
                <h2 className="text-2xl font-bold mb-4">Título do Modal</h2>
                <p className="mb-4">Conteúdo do Modal</p>
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                    onClick={handleCloseModal}
                    >
                    Fechar Modal
                </button>
            </div>
        </div>
    </div>
    </>          
    )
} 

export default ShowModal;