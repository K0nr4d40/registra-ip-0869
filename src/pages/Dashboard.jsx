function Dashboard() {

    const usuario = JSON.parse(
        localStorage.getItem("registraIpUsuario")
    );

    return (
        <div>
            <h2>Dashboard</h2>

            <h3>
                Bienvenido {usuario?.nombre}
            </h3>

            <p>
                Tipo: {usuario?.tipo}
            </p>

            <button
                onClick={() => {
                    localStorage.removeItem(
                        "registraIpUsuario"
                    );

                    window.location.href = "/";
                }}
            >
                Cerrar sesión
            </button>
        </div>
    );
}

export default Dashboard;