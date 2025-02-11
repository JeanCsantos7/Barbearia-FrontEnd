import { Carousel } from 'flowbite-react';
import Corte1 from '../assets/Corte1Duh.jpg';
import Corte2 from '../assets/Corte2Duh.jpg';
import Corte3 from '../assets/Corte3Duh.jpg';
import Corte4 from '../assets/Corte4Duh.webp';


const TrabalhosDuh = () => {
    interface ImagensBarbearia {
        id: number;
        imagem: any;
    }

    const listaImagens: ImagensBarbearia[] = [
        { id: 1, imagem: Corte1 },
        { id: 2, imagem: Corte2 },
        { id: 3, imagem: Corte3 },
        { id: 4, imagem: Corte4 },
    ];
    return (
        <>
            <div className="flex justify-center items-center w-full">
                <Carousel
                    slideInterval={2000}
                    className=" m-auto w-[95%] h-[67vh] mt-[6%]"
                >
                    {listaImagens.map(item => (
                        <div
                            className="flex justify-center items-center w-full h-full"
                            key={item.id}
                        >
                            <img
                                className="w-[95%] h-[85%]  object-contain  rounded-2xl mb-[7%]"
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

export default TrabalhosDuh;
