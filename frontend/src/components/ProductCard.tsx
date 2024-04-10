import { Product } from "@/lib/types";
import { generateReviewStars, getDiscountedPrice } from "@/lib/utils";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="border p-3 rounded-lg cursor-pointer flex flex-col justify-start gap-3">
      <div className="aspect-square rounded-md overflow-hidden">
        <img
          src={product.thumbnail}
          alt="product_image"
          className="w-full h-full object-cover rounded-md transition ease-in-out hover:scale-110"
        />
      </div>
      <div>
        <h3 className="truncate text-lg font-semibold">{product.title}</h3>
      </div>
      <div className="flex justify-between items-center text-base">
        <p className="font-semibold">
          $
          {getDiscountedPrice(
            product.price,
            product.discountPercentage
          ).toFixed(2)}
        </p>
        <p className="line-through text-gray-400">${product.price}</p>
      </div>
      <div className="text-yellow-500 text-lg">
        {generateReviewStars(product.rating)}
      </div>
    </div>
  );
};

export default ProductCard;
