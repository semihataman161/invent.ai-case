import { useNavigate } from "react-router-dom";
import { MenuBook, Person } from "@mui/icons-material";
import { IAAppBar } from "@components/commons";
import { MenuItem } from "@components/index.type";
import { MenuProps } from "./index.type";

const Menu = ({ children }: MenuProps) => {
  const navigate = useNavigate();

  const menuItems: MenuItem[] = [
    {
      text: "Users",
      logo: <Person />,
      onClick: () => {
        navigate("/users");
      },
    },
    {
      text: "Books",
      logo: <MenuBook />,
      onClick: () => {
        navigate("/books");
      },
    },
  ];

  return (
    <IAAppBar title="Invent Analytics" menuItems={menuItems}>
      {children}
    </IAAppBar>
  );
};

export default Menu;
export type { MenuProps };
