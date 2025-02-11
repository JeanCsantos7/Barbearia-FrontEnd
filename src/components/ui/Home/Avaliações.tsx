import { Card } from 'flowbite-react';
import { Rating } from 'flowbite-react';
import { useState, useEffect } from 'react';
import Footer from './Footer';

const Avaliações = () => {
    interface Avaliacoes {
        id: number;
        nome: string;
        avaliacao: string;
    }

    const listaAvaliacoes: Avaliacoes[] = [
        {
            id: 1,
            nome: 'Jean',
            avaliacao:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam possimus soluta quasi maxime commodi doloribus ducimus.',
        },
        {
            id: 2,
            nome: 'Any',
            avaliacao:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam possimus soluta quasi maxime commodi doloribus ducimus',
        },
        {
            id: 3,
            nome: 'Marilza',
            avaliacao:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam possimus soluta quasi maxime commodi doloribus ducimus.',
        },
        {
            id: 4,
            nome: 'Sara',
            avaliacao:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam possimus soluta quasi maxime commodi doloribus ducimus',
        },
        {
            id: 5,
            nome: 'Duh',
            avaliacao:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam possimus soluta quasi maxime commodi doloribus ducimus',
        },
        {
            id: 6,
            nome: 'Lucas',
            avaliacao:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam possimus soluta quasi maxime commodi doloribus ducimus',
        },
    ];

    const [startIndex, setStartIndex] = useState(0);
    const cardsPorPagina = 3;

    useEffect(() => {
        const intervalo = setInterval(() => {
            setStartIndex(prevIndex => {
                if (prevIndex + cardsPorPagina >= listaAvaliacoes.length) {
                    return 0;
                }
                return prevIndex + cardsPorPagina;
            });
        }, 4000);

        return () => clearInterval(intervalo);
    }, []);

    return (
        <div className="p-8 text-center">
            <h1
                id="profissionais"
                style={{ fontFamily: 'Bebas Neue, serif' }}
                className="text-[#fff] text-5xl md:text-6xl lg:text-7xl"
            >
                VEJA O QUE FALAM DE NÓS!!
            </h1>

            <div className="flex justify-center mt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-6xl">
                    {listaAvaliacoes
                        .slice(startIndex, startIndex + cardsPorPagina)
                        .map(item => (
                            <Card
                                key={item.id}
                                href="#"
                                className="h-48 flex flex-col justify-between"
                            >
                                <h5 className="text-2xl text-left font-bold text-gray-900 dark:text-white">
                                    {item.nome}
                                </h5>
                                <p className="font-normal text-left text-gray-700 dark:text-gray-400">
                                    {item.avaliacao}
                                </p>

                                <Rating>
                                    <Rating.Star />
                                    <Rating.Star />
                                    <Rating.Star />
                                    <Rating.Star />
                                    <Rating.Star />
                                </Rating>
                            </Card>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Avaliações;
