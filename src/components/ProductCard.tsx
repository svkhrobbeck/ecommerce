import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../constants/styles";
import { SwiperImageSliders } from ".";
import { IProduct } from "../interfaces";
import setToCart from "../helpers/setToCart";
import { CART_LOCALSTORAGE } from "../constants/constants";
import { getStorageParse } from "../helpers/localStorage";
import { iconStar, iconWhiteStar } from "../assets/icons";

const ProductCard: FC<IProduct> = ({ id, images, title, price }): JSX.Element => {
  const getRandomNumber = (num: number): number => Math.trunc(Math.random()) * num;
  const [keys, setKeys] = useState<number[]>(getStorageParse(CART_LOCALSTORAGE));

  const addToCart = () => {
    setKeys(setToCart(id));
  };

  return (
    <div className="rounded border border-gray-300 p-3 select-none">
      <div className="hidden sm:block">
        <SwiperImageSliders images={images} />
      </div>
      <div>
        <img
          src={images[getRandomNumber(images.length)]}
          className="h-[350px] rounded-md block sm:hidden w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
        />
      </div>
      <p className="text-sm mb-2">Highest Rated Product</p>
      <div className="flex mb-1">
        <img className="w-[20px] h-auto" src={iconStar} alt="icon star" />
        <img className="w-[20px] h-auto" src={iconStar} alt="icon star" />
        <img className="w-[20px] h-auto" src={iconStar} alt="icon star" />
        <img className="w-[20px] h-auto" src={iconStar} alt="icon star" />
        <img className="w-[20px] h-auto" src={iconWhiteStar} alt="icon star" />
      </div>

      <div className="relative bg-white">
        <Link to={`/product/${id}`} className="group mb-2 block overflow-hidden">
          <h3 className="text-lg font-semibold mb-2 text-blue-700 group-hover:underline group-hover:underline-offset-4">{title}</h3>
        </Link>
        <p className="mb-3">
          <span className="tracking-wider text-gray-900">${price}</span>
        </p>
        <button className={`${styles.buttonYellow} hover:scale-[1.02]`} onClick={addToCart}>
          {keys.includes(id) ? "Added" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
