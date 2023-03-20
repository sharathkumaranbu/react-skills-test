import { useContext } from "react";

import { Box, Divider, List } from "@material-ui/core";

import { ThemeContext } from "../providers/theme-provider";

export default function MarKetingProgram({ traitDetail }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="list_container">
      <List>
        {traitDetail.data.marketingPrograms.map((program) => {
          return (
            <div>
              <Box sx={{ m: 2 }}>
                <h4>{program.description}</h4>
                <p>ECOSYSTEMS</p>
                <p className="small_paragraph">{program.ecosystems}</p>
              </Box>
              <Divider variant="middle" className={theme} />
            </div>
          );
        })}
      </List>
    </div>
  );
}
