import '../styles/components/pages/HomePage.css'

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="img/home/img01.jpg" alt="Avion" />
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius provident velit commodi? Dicta
                        accusamus ad aliquid. Provident accusantium, dignissimos beatae labore voluptatibus, velit quasi
                        error adipisci temporibus, quas suscipit aspernatur.
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius provident velit commodi? Dicta
                        accusamus ad aliquid. Provident accusantium, dignissimos beatae labore voluptatibus, velit quasi
                        error adipisci temporibus, quas suscipit aspernatur.</p>
                </div>
                <div className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Simplemente Excelente</span>
                        <span className="autor">Juan Perez - zapatos.com</span>
                    </div>
                </div>
            </div>

        </main>
    );
}

export default HomePage;