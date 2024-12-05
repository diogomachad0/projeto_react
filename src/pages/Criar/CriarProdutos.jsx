import { useState } from 'react';
import './CriarProduto.css';

function CriarProdutosPage(){

    const [nome, setNome] = useState();
    const [price, setPrice] = useState();
    const [description, setDesc] = useState();
    const [photo, setPhoto] = useState();

    async function createProduct(product){
        await fetch(`http://localhost:3001/products`, {
            method: "POST",
            body: JSON.stringify(product)
        });
    }
    
    function handleSubmit(event){
        event.preventDefault();
        const productNovo = 
        {
            name: nome, 
            price: price, 
            photo_url: photo
        }
        setNome('');
        setDesc('');
        setPrice('');
        setPhoto('');
        createProduct(productNovo);
    }

    return(
        <>
        <form onSubmit={handleSubmit} className="form-container">
            <h1>Adicionar carros</h1>

            <div className="campo">
                <input
                    placeholder='Marca e Modelo'
                    name="nome"
                    value={nome}
                    type="text"
                    id='nome'
                    onChange={(e)=> setNome(e.target.value)}
                    required
                />
            </div>

            <div className="campo">
                <input
                    name="foto"
                    placeholder='Imagem'
                    value={photo}
                    type="text"
                    id='foto'
                    onChange={(e)=> setPhoto(e.target.value)}
                    required
                />
            </div>

            <div className="campo">
                <input
                    name="price"
                    placeholder='Preço'
                    value={price}
                    id='fato'
                    onChange={(e)=> setPrice(e.target.value)}
                    type="text"
                    required
                />
            </div>

            <div className="btn-wrap">
                <button className='btn-form' type="submit"><h2>Cadastrar</h2></button>
            </div>
        </form>
        </>
    );
}
export default CriarProdutosPage