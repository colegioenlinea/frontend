import Link from "next/link";

const BookCreate = () => {
    return (
        <div>
            <h1>Crear Libros</h1>
            <Link href="/libros">Lista de libros</Link>
        </div>
    );
}

export default BookCreate;