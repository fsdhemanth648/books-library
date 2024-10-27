import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert as MAlert } from "@mantine/core";
import { hideAlert } from "../redux/features/alertSlice";
import { FaInfoCircle } from "react-icons/fa";

const Alert: React.FC = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { message, isVisible } = useSelector((state: any) => state.alert);

  // Automatically hide the alert after 3 seconds
  React.useEffect(() => {
    if (isVisible) {
      const timeout = setTimeout(() => {
        dispatch(hideAlert());
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [isVisible, dispatch]);

  if (!isVisible) return null;

  return (
    <div
      style={{ position: "fixed", top: "20px", right: "20px", zIndex: 9999 }}
    >
      <MAlert
        variant="filled"
        color="blue"
        title="Cart"
        icon={<FaInfoCircle />}
      >
        {message}
      </MAlert>
    </div>
  );
};

export default Alert;
