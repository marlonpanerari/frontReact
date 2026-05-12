import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"


function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-black text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Blog Pessoal | Copyright: {data}
                        </p>
                    <p className='text-lg'>Acesse as redes sociais</p>
                    <div className='flex gap-2'>
                        <a href="https://www.linkedin.com/in/seu_usuario" target="_blank">
                            <LinkedinLogoIcon size={32} weight='bold' />
                        </a>
                        <a href="https://www.instagram.com/seu_usuario" target="_blank">
                            <InstagramLogoIcon size={32} weight='bold' />
                        </a>
                        <a href="https://www.facebook.com/seu_usuario" target="_blank">
                            <FacebookLogoIcon size={32} weight='bold' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer