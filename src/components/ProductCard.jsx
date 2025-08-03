import { useTheme } from "../contexts/ThemeContext";

const MAX_TITLE_LENGTH = 30;
const MAX_DESC_LENGTH = 60;

const ProductCard = ({ product }) => {
  const { theme } = useTheme();
  const { styles } = theme;

  // Shorten title and description if they exceed the maximum length
  const shortTitle =
    product.title.length > MAX_TITLE_LENGTH
      ? product.title.slice(0, MAX_TITLE_LENGTH) + "..."
      : product.title;

  const shortDescription =
    product.description.length > MAX_DESC_LENGTH
      ? product.description.slice(0, MAX_DESC_LENGTH) + "..."
      : product.description;

  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} className={styles.img} />
      <div className="relative group">
        <h2 className={styles.title}>{shortTitle}</h2>
        <div className={styles.tooltip}>{product.title}</div>
      </div>
      <p className={styles.category}>{product.category}</p>
      <p className={styles.price}>${product.price}</p>
      <p className={styles.description}>{shortDescription}</p>
      <button className={styles.button}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
