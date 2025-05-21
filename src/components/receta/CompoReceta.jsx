import './CompoReceta.css'


export const CompoReceta = ({ title, images, description, ingredients, dificultad, time }) => {
    return (
        <section className="Receta-info">
            <h1 className="Receta-title">{title}</h1>

            <div className="Receta-images">
                {images.map((img, index) => (
                    <img key={index} src={img} alt={`${title} ${index + 1}`} />
                ))}
            </div>

            <p className="Receta-description">{description}</p>

            <div className="Receta-details">
                <div className="Receta-ingredients">
                    <h2>Ingredientes</h2>
                    <ul>
                        {ingredients.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="Receta-dificultad">
                    <h2>Dificultad del plato:</h2>
                    <p>{dificultad}</p>
                </div>


                <div className="Receta-time">
                    <h2>Tiempo de preparación</h2>
                    <p>{time}</p>
                </div>
            </div>
        </section>
    );
};
