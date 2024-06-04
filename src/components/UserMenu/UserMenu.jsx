import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import { Wrapper, Label } from "./UserMenu.styled";
import { Button } from "@mui/material";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Wrapper>
      <Label>
        <p>Welcome, {user.name}</p>
        <Button type="button" onClick={() => dispatch(logOut())}>
          Logout
        </Button>
      </Label>
    </Wrapper>
  );
};
