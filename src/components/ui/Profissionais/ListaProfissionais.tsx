import Pessoa1 from '../assets/Pessoa1.png';
import Pessoa2 from '../assets/Pessoa2.avif';
import Pessoa3 from '../assets/Pessoa3.webp';
import TrabalhosDuh from './TrabalhosDuh';
import { FaScissors } from 'react-icons/fa6';
import { Modal } from 'flowbite-react';
import { useState } from 'react';

const ListaProfissionais = () => {
    interface ProfissionaisTypes {
        id: number;
        nome: string;
        imagem: any;
        descricao?: string;
    }

    const Profissionais: Array<ProfissionaisTypes> = [
        {
            id: 1,
            nome: 'Fulano1',
            imagem: Pessoa1,
            descricao:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam possimus soluta quasi maxime commodi doloribus ducimus',
        },
        {
            id: 2,
            nome: 'Fulano2',
            imagem: Pessoa2,
            descricao:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam possimus soluta quasi maxime commodi doloribus ducimus',
        },
        {
            id: 3,
            nome: 'Fulano3',
            imagem: Pessoa3,
            descricao:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam possimus soluta quasi maxime commodi doloribus ducimus',
        },
    ];

    const [openModal, setOpenModal] = useState(false);
    const [renderizar, setRenderizar] = useState<JSX.Element | null>(null);

    const pegarID = (id: number) => {
        setOpenModal(true);

        id === 1 ? setRenderizar(<TrabalhosDuh />) : '';
        id === 2 ? setRenderizar(null) : '';
        id === 3 ? setRenderizar(<Modal />) : '';
    };

    return (
        <div className="flex flex-col items-center gap-6 bg-[#444444] p-6">
            <h1
                id="profissionais"
                style={{ fontFamily: 'Bebas Neue, serif' }}
                className="text-[#fff] text-center text-6xl md:text-6xl lg:text-7xl"
            >
                NOSSOS PROFISSIONAIS
            </h1>

            <Modal
                dismissible
                show={openModal}
                onClose={() => setOpenModal(false)}
                className="bg-black/50 backdrop-blur"
            >
                <Modal.Header>Trabalhos Realizados</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">{renderizar}</div>
                </Modal.Body>
            </Modal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1200px]">
                {Profissionais.map(item => (
                    <div key={item.id} className="w-full">
                        <img
                            className="w-full h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-md"
                            src={item.imagem}
                            alt={item.nome}
                        />
                        <div className="w-full p-5 bg-[#1b1b1b] rounded-md">
                            <h1 className="text-[#fff] text-xl font-semibold">
                                {item.nome}
                            </h1>
                            <p className="text-[#fff] text-sm mt-2">
                                {item.descricao}
                            </p>
                            <button
                                onClick={() => pegarID(item.id)}
                                className="flex items-center gap-2 mt-4 border-2 cursor-pointer rounded-xl text-[#fff] border-[#fff] w-full sm:w-[70%] p-2 hover:bg-[#fff] hover:text-[#f03636] transition duration-500"
                            >
                                Ver Trabalhos <FaScissors />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListaProfissionais;
