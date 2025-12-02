import Button from "@mui/material/Button";

const CustomBtn = ({ ...props }) => {
  return <Button {...props}>{props.children}</Button>;
};

export default CustomBtn;
