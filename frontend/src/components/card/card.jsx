import { useEffect, useState } from "react";
import styles from "./card.module.css";


export default function Card({ pet }) {
    const [img, setImg] = useState(null); // Initialize img state as null

 
    // Fetch the image when the component mounts or when pet changes
    useEffect(() => {
        // Check if the pet has an image URL
        if (pet?.image?.url) {
            const image = new Image();
            image.src = pet.image.url;
            image.onload = () => {
                setImg(image);
            };
        }
    }, [pet]);

    return (
        <div className={styles.card} key={pet.id}>
            {/* Show skeleton loading when img is null or loading */}
            {(img === null) && <div className={styles.skeletonLoading}></div>}

            {/* Show LazyLoadImage when img is loaded */}
            {img && (
                <img
                    src={img.src}
                    className={styles.card_img}
                    alt={pet.name}
                />
            )}

            <div className={styles.description_container}>
                <div className={styles.description_one}>
                    <h2 className={styles.name}>{pet.name}</h2>
                    <p className={styles.gender}>{pet.gender}</p>
                </div>
                <div className={styles.description_two}>
                    <h2>{pet.breed}</h2>
                    <p>
                        <span>{pet.age}</span> Months
                    </p>
                </div>
            </div>
        </div>
    );
}
