function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-black text-white'>
            
                <div className="container flex justify-between text-lg mx-8">
                    Blog Pessoal

                    <div className='flex gap-6'>
                        Postagens
                        Temas
                        Cadastrar tema
                        Perfil
                        Sair
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar