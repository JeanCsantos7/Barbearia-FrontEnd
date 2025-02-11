import Imagem1 from '../assets/andre-reis-1_DAlXy0wng-unsplash.jpg';
import Imagem2 from '../assets/edwin-gonzalez-7hAneh3VVdw-unsplash.jpg';
import Imagem3 from '../assets/julien-orliac-gzobGDzh4ww-unsplash.jpg';
import Imagem4 from '../assets/philipp-lansing-RdXkRumbDt4-unsplash.jpg';

import MapaSalao from './Mapa';

import { Modal } from 'flowbite-react';
import { useState } from 'react';

const NossaUnidade = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            <div className="bg-[#444444] p-[8%] text-center">
                <h1
                    id="profissionais"
                    style={{ fontFamily: 'Bebas Neue, serif' }}
                    className="text-[#fff] lg:text-7xl md: text-6xl"
                >
                    NOSSA UNIDADE
                </h1>

                <h2 className="text-center text-[#fff]">
                    Veja algumas imagens da nossa unidade e confira onde estamos
                    localizados!
                </h2>

                <button
                    onClick={() => setOpenModal(true)}
                    className=" border-2 cursor-pointer rounded-2xl text-[#fff] border-[#fff]  p-2 hover:bg-[#fff] ease-in-out duration-500 hover:text-[#f03636] lg:w-[22%] lg:mt-[2%] md: w-[85%] mt-[12%]  "
                >
                    Ver no Mapa
                </button>

                <Modal
                    dismissible
                    show={openModal}
                    onClose={() => setOpenModal(false)}
                    className="bg-black/50 backdrop-blur mt-[40%] "
                >
                    <Modal.Header>
                        Confira onde estamos localizados
                    </Modal.Header>
                    <Modal.Body>
                        <div className="space-y-6">
                            <MapaSalao />
                        </div>
                    </Modal.Body>
                </Modal>

                <div className="bg-[#444444] py-8 sm:py-12">
                    <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                            <div className="relative lg:row-span-2">
                                <img
                                    src={Imagem1}
                                    className="object-cover w-full h-full rounded-lg lg:rounded-l-[2rem]"
                                    alt="Imagem 1"
                                />
                            </div>

                            <div className="relative max-lg:row-start-1">
                                <img
                                    src={Imagem2}
                                    className="object-cover w-full h-full rounded-lg max-lg:rounded-t-[2rem]"
                                    alt="Imagem 2"
                                />
                            </div>

                            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                                <img
                                    src={Imagem3}
                                    className="object-cover w-full h-full rounded-lg"
                                    alt="Imagem 3"
                                />
                            </div>

                            <div className="relative lg:row-span-2">
                                <img
                                    src={Imagem4}
                                    className="object-cover w-full h-full rounded-lg max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"
                                    alt="Imagem 4"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NossaUnidade;
