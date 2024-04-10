import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDiscountedPrice(price: number, discountPercentage: number) {
  if (
    typeof price !== "number" ||
    typeof discountPercentage !== "number" ||
    price < 0 ||
    discountPercentage < 0 ||
    discountPercentage > 100
  ) {
    throw new Error(
      "Invalid input. Price and discount percentage must be positive numbers."
    );
  }

  const discountAmount = price * (discountPercentage / 100);
  const discountedPrice = price - discountAmount;

  return discountedPrice;
}

export function generateReviewStars(rating: number) {
  if (typeof rating !== "number" || rating < 0 || rating > 5) {
    throw new Error("Invalid rating. Rating must be a number between 0 and 5.");
  }

  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5 ? "★" : "";
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return "★".repeat(fullStars) + halfStar + "☆".repeat(emptyStars);
}
