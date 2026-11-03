function Layout({ children }) {
    return (
        <div className="contenedor">
            <header className="encabezado">
                <h1>REGISTRA-IP</h1>
            </header>

            <main className="contenido">
                {children}
            </main>
        </div>
    );
}

export default Layout;