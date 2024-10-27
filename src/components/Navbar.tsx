import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import TextInput from "./common/TextInput";
import UserMenu from "./UserMenu";
import Button from "./common/Button";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Navbar = () => {
  const [isLoggedInUser, setLoggedInUser] = useState<boolean>(false);
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6 font-primary">
      <nav className="flex justify-between items-center gap-2">
        {/* Left Section */}
        <div className="flex items-center gap-4 md:gap-10">
          <Link to="/">
            <HiMiniBars3CenterLeft className="size-8" />
          </Link>
          <TextInput
            placeholder="Search Something..."
            variant="filled"
            leftSection={<IoIosSearch />}
          />
        </div>
        {/* Right Section */}
        <div className="flex justify-center items-center gap-2">
          {isLoggedInUser ? (
            <UserMenu handleLogin={setLoggedInUser} />
          ) : (
            <Link
              to="/login"
              className="text-base md:text-lg font-medium underline"
            >
              Login
            </Link>
          )}

          <div className="hidden md:block">
            <Button variant="transparent" color="#0D0842">
              <MdFavoriteBorder className="size-6" />
            </Button>
          </div>
          <Link to="/cart">
            <Button
              variant="filled"
              color="#FF5841"
              leftSection={<IoCartOutline className="size-6" />}
            >
              <p className="flex items-center whitespace-nowrap">
                <span className="hidden md:block">Cart</span>
                &nbsp;{cartItems.length > 0 ? `(${cartItems.length})` : "(0)"}
              </p>
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
