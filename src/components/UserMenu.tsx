import { Menu } from "@mantine/core";
import { FaRegCircleUser } from "react-icons/fa6";

type Props = {
  handleLogin: React.Dispatch<React.SetStateAction<boolean>>;
};
const UserMenu: React.FC<Props> = ({ handleLogin }) => {
  return (
    <Menu
      shadow="md"
      width={200}
      offset={7}
      position="bottom"
      withArrow
      arrowPosition="center"
    >
      <Menu.Target>
        <div style={{ display: "inline-block", cursor: "pointer" }}>
          <FaRegCircleUser size={24} color="#0D0842" />
        </div>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item>Settings</Menu.Item>
        <Menu.Item onClick={() => handleLogin(true)}>Logout</Menu.Item>

        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item>Transfer my data</Menu.Item>
        <Menu.Item color="red">Delete my account</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default UserMenu;
