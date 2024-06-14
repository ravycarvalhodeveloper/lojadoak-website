import Container from "../../Components/Container/Container"
import { FaWhatsapp,FaInstagram, FaFacebook  } from "react-icons/fa"
import { Fade } from "react-awesome-reveal"
import { useState } from "react"
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'

export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')


    function sendEmail(e:any) {
        e.preventDefault();

        if(name === " " || email === ""|| message === "") {
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }

        emailjs.send("service_4yc365a", "template_3xk5c9k", templateParams, "iTmLo6A9Va6j2ZTIo")
        .then((response) => {
            console.log("Email enviado", response.status, response.text)
            toast.success("Enviado com sucesso")
            setName("")
            setEmail("")
            setMessage("")
        }, (err) => {
            toast.error("Erro ao enviar, tente novamente")
            console.log("ERRO", err)
        })

    }

    return (
     <div className="pt-28  lg:pt-56">
        <Fade>
         <Container>
            
            <div className="w-full bg-doak-white flex flex-col lg:flex-row justify-center items-center gap-10">
            <Fade direction="left">
            <div className="w-full max-w-96 h-96">
                    <h1 className="font-custom font-black text-2xl pb-2">Redes Sociais</h1>
                    <p className="font-medium">Não perca as últimas novidades e promoções exclusivas! Siga a D'OAK nas redes sociais e fique por dentro de tudo! #DOAK #Novidades #Promoções"
                        Se precisar de alguma personalização ou outro estilo, sinta-se à vontade para me avisar!</p>
                    <h1 className="font-custom font-black text-xl mt-5">Siga-nos</h1>
                    <div className="flex gap-6 mt-5 w-full">
                        <a className="bg-doak-black text-doak-white rounded-full h-12 w-12 flex justify-center items-center hover:bg-doak-grey transition-all" target="_blank" href={`https://api.whatsapp.com/send?phone=${88996388210}`}><FaWhatsapp size={30}/></a>
                        <a className="bg-doak-black text-doak-white rounded-full h-12 w-12 flex justify-center items-center hover:bg-doak-grey transition-all" target="_blank" href="https://www.instagram.com/lojadoak/"><FaInstagram size={30}/></a>
                        <a className="bg-doak-black text-doak-white rounded-full h-12 w-12 flex justify-center items-center hover:bg-doak-grey transition-all" target="_blank" href="/"><FaFacebook size={30}/></a>
                    </div>  
                    <p className="text-doak-black/60 mt-5">© Copyright 2024</p>  
                </div>
                </Fade>

                <Fade direction="right" >
                <form  
                    onSubmit={sendEmail}
                    className="bg-doak-black w-96 max-w-96 h-96 rounded p-4 flex flex-col"
                >
                    <div className="">
                        <h1 className="text-doak-whiteff font-custom font-normal mb-1 roude">Nome:</h1>
                        <input 
                        
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            className="w-full pl-2 h-10 rounded font-bold"
                            placeholder="João..."
                            type="text" 
                            
                        />
                    </div>
                    <div className="">
                        <h1 className="text-doak-whiteff font-custom font-normal mb-1 mt-2 ">Email:</h1>
                        <input 
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className="w-full pl-2 h-10 rounded font-bold"
                            placeholder="joaoribeiro@gmail.com..."
                            type="email" 
                        />
                    </div>
                    <div className="">
                        <h1 className="text-doak-whiteff font-custom font-normal mb-1 mt-2 ">Assunto:</h1>
                        <textarea
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                            className="rounded w-full h-28 p-2 font-bold"
                             name="" 
                             id=""
                        ></textarea>
                    </div>
                    <button 
                        className="text-doak-whiteff w-full flex justify-center items-center bg-doak-grey h-12 mt-3 rounded font-custom font-bold hover:bg-doak-white hover:text-doak-black transition-all" 
                        type="submit" 
                        value="Enviar">Enviar</button>
                </form>
                </Fade>

                <div className=""></div>
            </div>
      </Container>
      </Fade>
     </div>
    )
}