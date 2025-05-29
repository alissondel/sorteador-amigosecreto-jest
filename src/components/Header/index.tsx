const Header = () => {
    return (
        <header className="flex flex-col justify-between items-center bg-zinc-50">
            <div className="flex flex-row items-center mb-2">
                <img className='h-50 w-50 bg-blue-500' src="/images/logo.png" alt="Logo" />
            </div>
            <h2 className="text-3xl font-semibold">Vamos Começar</h2>
        </header>
    )
}

export default Header