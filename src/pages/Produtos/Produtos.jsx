import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../../hooks/useProducts";
import Card from "../../components/Card/Card";
import './Produtos.css';

function ProdutosPage(){
    const navigation = useNavigate()

    const [url, setUrl] = useState(null)
    const [prod, loading] = useProduct(url)
    
    async function deletar(id){
        await fetch(`http://localhost:3001/products/${id}`,
            {
                method: "DELETE"
            }
        );
        
        navigation(`/`);
    }
    
    useEffect(()=>{
        setUrl(`http://localhost:3001/products/`)
    },[]);

    return(
        <>
        <div className="tralhas-container">
            {
                prod &&
                prod.map(
                    (p) => {
                        return <div className="wrap-card" onClick={
                                () => {navigation(`/produtos/${p.id}`)}
                            }>
                            <Card
                            imagem={ p.photo_url }
                            nome={ p.name }
                            valor={ p.price }
                            />
                        </div>
                    }
                )
            }
        </div>
        </>
    );
}
export default ProdutosPage