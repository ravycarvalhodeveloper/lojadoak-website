import Container from "../../Components/Container/Container"
import logoImg from '../../assets/icon-black.png'
import { Fade } from "react-awesome-reveal"

export default function About() {
    return (
        <div className="pt-36">
            <Container>
               
                <div className=" w-full flex items-center justify-center flex-col gap-4">
                    <Fade direction="down">
                        <div>
                            <h1 className="font-custom font-extraBold text-4xl text-center mt-10">Sobre nós</h1>
                        </div>
                    </Fade>

                    <div className="flex lg:flex-row flex-col w-full gap-6  lg:gap-20 justify-center items-center">
                       <Fade direction="left">
                        <div className="flex mt-16">
                            <img 
                                className="h-96"
                                src={logoImg} 
                                alt="" 
                            />
                        </div>
                      </Fade> 
                      <Fade direction="right">
                        <div className="flex mt-10 w-96">
                            <h1 className="font-custom text-xl">
                                Bem-vindo à <strong>D'OAK</strong>, a sua loja de roupas masculinas em Quixeramobim-CE! Desde 
                                a nossa fundação, nos dedicamos a oferecer o que há de melhor em moda masculina, 
                                com uma seleção cuidadosa de peças que atendem a todos os estilos: do casual ao formal, 
                                passando pelo esportivo. Na D'OAK, acreditamos que cada homem merece se vestir bem em qualquer 
                                ocasião. Por isso, nosso compromisso é com a qualidade e a variedade, trazendo produtos que 
                                combinam conforto e elegância.
                            </h1>
                        </div>
                        </Fade> 
                    </div>
                </div>
              
            </Container>
            <div className="pt-10"></div>
        </div>
    )
}