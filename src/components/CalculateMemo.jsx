import { useState, useMemo } from "react";
import styles from "./CalculateMemo.module.css";

const CalculateMemo = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [count, setCount] = useState(0);

    // Generar una gran lista de productos (simulando datos de una API)
    const generateProducts = () => {
        console.log("Generando lista de productos...");
        const products = [];
        for (let i = 0; i < 10000; i++) {
            products.push({
                id: i,
                name: `Producto ${i}`,
                price: Math.floor(Math.random() * 1000),
                category: ["Electrónica", "Hogar", "Ropa", "Alimentos"][Math.floor(Math.random() * 4)]
            });
        }
        return products;
    };

    // Memoizar la lista de productos para que no se regenere en cada render
    const allProducts = useMemo(() => generateProducts(), []);

    // Función de filtrado costosa
    const filterProducts = (products, term) => {
        console.log("Filtrando productos...");
        // Simular procesamiento costoso
        const startTime = performance.now();
        while (performance.now() - startTime < 5) {
            // Bucle artificial para simular procesamiento
        }

        return products.filter(product => 
            product.name.toLowerCase().includes(term.toLowerCase()) ||
            product.category.toLowerCase().includes(term.toLowerCase())
        );
    };

    // Memoizar los productos filtrados
    const filteredProducts = useMemo(() => 
        filterProducts(allProducts, searchTerm),
        [allProducts, searchTerm]
    );

    // Calcular estadísticas (otro cálculo costoso)
    const stats = useMemo(() => {
        console.log("Calculando estadísticas...");
        return {
            total: filteredProducts.length,
            averagePrice: filteredProducts.length > 0 
                ? Math.round(filteredProducts.reduce((sum, p) => sum + p.price, 0) / filteredProducts.length)
                : 0,
            categories: [...new Set(filteredProducts.map(p => p.category))].length
        };
    }, [filteredProducts]);

    return (
        <div className={styles.productList}>
            <h2>Buscador de Productos</h2>
            
            <div className={styles.controls}>
                <input
                    type="text"
                    placeholder="Buscar productos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={() => setCount(c => c + 1)}>
                    Contador: {count}
                </button>
            </div>

            <div className={styles.stats}>
                <p>Productos encontrados: {stats.total}</p>
                <p>Precio promedio: ${stats.averagePrice}</p>
                <p>Categorías: {stats.categories}</p>
            </div>

            <div className={styles.productGrid}>
                {filteredProducts.slice(0, 20).map(product => (
                    <div key={product.id} className={styles.productCard}>
                        <h3>{product.name}</h3>
                        <p>Precio: ${product.price}</p>
                        <p className={styles.category}>{product.category}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CalculateMemo;