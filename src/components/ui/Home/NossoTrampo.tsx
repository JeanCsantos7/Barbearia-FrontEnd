import { Carousel } from 'flowbite-react';
import Corte1 from '../assets/Corte1.jpeg';
import Corte2 from '../assets/Corte2.jpeg';
import Corte3 from '../assets/Corte3.jpeg';
import Corte4 from '../assets/Corte4.jpeg';
import Corte5 from '../assets/Corte5.jpeg';
import Corte6 from '../assets/Corte6.jpeg';

interface ImagensBarbearia {
    id: number;
    imagem: any;
}

const listaImagens: ImagensBarbearia[] = [
    { id: 1, imagem: Corte1 },
    { id: 2, imagem: Corte2 },
    { id: 3, imagem: Corte3 },
    { id: 4, imagem: Corte4 },
    { id: 5, imagem: Corte5 },
    { id: 6, imagem: Corte6 },
];

const NossoTrampo = () => {
    return (
        <>
            <h1
                style={{ fontFamily: 'Bebas Neue, serif' }}
                className="text-[#fff] text-center mt-12 lg:text-7xl md: text-6xl"
            >
                Nosso Trampo
            </h1>
            <h2 className="text-center  text-[#fff]">
                Conheça um pouco mais de nosso trabalho
            </h2>
            <div className="flex justify-center items-center w-full">
                <Carousel
                    slideInterval={2500}
                    className=" m-auto w-[77%] h-[65vh] mt-[6%]"
                >
                    {listaImagens.map(item => (
                        <div
                            className="flex justify-center items-center w-full h-full"
                            key={item.id}
                        >
                            <img
                                className="lg:w-[35%] h-[100%]  object-contain  rounded-2xl  opacity-[25%] hover:opacity-[85%] ease-in-out duration-500 transform scale-105 md: w-[84%] "
                                src={item.imagem}
                                alt={`Imagem ${item.id}`}
                            />
                        </div>
                    ))}
                </Carousel>
            </div>
        </>
    );
};

export default NossoTrampo;
