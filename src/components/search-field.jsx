import { useContext } from "react";

import { IconButton } from "@material-ui/core";
import { Close, Search } from "@material-ui/icons";

import { ThemeContext } from "../providers/theme-provider";

export default function SearchField({
  placeholder,
  value,
  handleChange,
  handleClick,
  handleClear,
  className,
}) {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme} ${className} search_field`}>
      <div className="search_container">
        <div className="search_input">
          <input
            type="text"
            placeholder={placeholder}
            value={value}
            size={25}
            className={`${theme} search`}
            onFocus={handleClick}
            onChange={handleChange}
          />
          <Search className="search_icon" />
        </div>
      </div>
      <IconButton onClick={handleClear} size="small" className="close_button">
        <Close className={`close_icon ${theme}`} />
      </IconButton>
    </div>
  );
}
