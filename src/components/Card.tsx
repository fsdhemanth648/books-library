import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { BookType } from "../types/books";
import { getImgUrl } from "../utils/common";
import Button from "./common/Button";
import { useDispatch } from "react-redux";
import { addToCartWithAlert } from "../redux/features/cartSlice";
import { AppDispatch } from "../redux/store";

type CardProps = {
  data: BookType;
};

const Card: React.FC<CardProps> = ({ data }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = (data: BookType) => {
    dispatch(addToCartWithAlert(data));
  };

  return (
    <div className=" rounded-lg transition-shadow duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center sm:h-72 sm:justify-center gap-4">
        <div className="sm:h-72 sm:flex-shrink-0 border rounded-md">
          <Link to={`/books/${data._id}`}>
            <img
              src={getImgUrl(data.coverImage) as unknown as string}
              alt="card coverImage"
              className="w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
            />
          </Link>
        </div>

        <div>
          <Link to={`/books/${data._id}`}>
            <h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
              {data.title}
            </h3>
          </Link>
          <p className="text-gray-600 mb-5">{data.description}</p>
          <p className="font-medium mb-5">
            ${data?.newPrice}
            <span className="line-through font-normal ml-2">
              ${data.oldPrice}
            </span>
          </p>
          <Button
            variant="filled"
            leftSection={<FiShoppingCart />}
            onClick={() => handleAddToCart(data)}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
