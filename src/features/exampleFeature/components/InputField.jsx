import TextField from "@mui/material/TextField";

export default function MyInput({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  ...props
}) {
  return (
    <TextField
      fullWidth
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      variant="filled"
      sx={{  mb: 2 }}
      {...props}
    />
  );
}
