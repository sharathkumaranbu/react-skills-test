import { Box, Tabs } from "@material-ui/core";

export default function TabGroup(props) {
  const { children, value, handleChange } = props;

  return (
    <Box className="tab_group">
      <Tabs value={value} onChange={handleChange} indicatorColor="primary">
        {children}
      </Tabs>
    </Box>
  );
}
