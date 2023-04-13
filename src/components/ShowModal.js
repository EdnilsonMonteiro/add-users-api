function ShowModal({isModalOpen, setIsModalOpen, users, setUsers, selectedUser, setSelectedUser}) {

    const { name, picture, location, email, cell } = selectedUser;

    console.log(selectedUser)

    const handleCloseModal = () => {
        setIsModalOpen(false); // Função para fechar o modal
    };

    return (
    <>
    <div className="fixed z-50 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen bg-black/50">
            <div className="bg-white w-2/8 rounded-lg border-4">
                {/* Conteúdo do modal */}
                <div className="bg-gradient-to-r from-purple-500 to-violet-400 p-2">
                    <img className="mx-auto d-block rounded-full border-4 border-solid border-gray-300" src={picture.medium} alt="Imagem Usuário"></img>
                    <h2 className="text-2xl font-bold pb-1">{name.first} {name.last}</h2>
                    <h5 className="font-bold">{location.state}, {location.country}</h5>
                    <hr className="text-gray-300 w-20 mx-auto" />
                </div>
                <div className="flex pb-4 rounded">
                    <h2 className="flex-grow p-2 bg-gradient-to-r from-purple-300 to-purple-400">{Math.floor(Math.random() * 10000)} Followers</h2> {/* Número aleatório de seguidores (informação não há na API)*/}
                    <h2 className="flex-grow p-2 bg-gradient-to-r from-violet-400 to-violet-300">{Math.floor(Math.random() * 10000)} Following</h2> {/* Número aleatório de pessoa que segue (informação não há na API)*/}
                </div>
                <div className="text-left bg-white p-3">
                    <h4 className="text-purple-300">Email:</h4>
                    <h4>{email}</h4>
                    <hr />

                    <h4 className="text-purple-300">Phone:</h4>
                    <h4>{cell}</h4>
                    <hr />

                    <h4 className="text-purple-300">Twitter:</h4>
                    <h4>@{name.first.substring(1, 6)}{name.last.substring(0, 4).toLowerCase()}{Math.floor(Math.random() * 1000)}</h4> {/* Função para gerar um user de Twitter aleatório, na API não fornece esta informação, por isso criei para seguir o exemplo */}
                    <hr />

                    <h4 className="text-purple-300">Behance:</h4>
                    <h4>behance.net/{name.first.substring(1, 6)}</h4> {/* Função para gerar um user de Behance aleatório, na API não fornece esta informação, por isso criei para seguir o exemplo */}
                    <hr />
                </div>
                <button
                    className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline mb-2"
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