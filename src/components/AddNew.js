import { Card } from 'react-bootstrap';
import { PlusSmIcon } from '@heroicons/react/solid';

function AddNew({loadCards, setLoadCards}) {
    
    const handleButtonClick = () => { //Adiciona 3 novos usuários
        setLoadCards(!loadCards);
    }

    return ( //Botão com o texto ADD NEW 
        <div className="flex justify-center items-center">
            <Card className="w-50">
                <button onClick={handleButtonClick} className="flex justify-center items-center">
                    <PlusSmIcon className="text-violet-300 w-25 h-25" />
                </button>

                <h2 className="text-violet-300">ADD NEW</h2>
            </Card>
        </div>
                
    )
} 

export default AddNew;