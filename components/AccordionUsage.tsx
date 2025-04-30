import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { List, ListItem, ListItemText } from "@mui/material";

interface AccordionProps {
  item: {
    id: number;
    title: string;
    list: string[];
  };
  defaultExpanded?: boolean;
}

export default function AccordionUsage({
  item,
  defaultExpanded,
}: Readonly<AccordionProps>) {
  return (
    <Accordion defaultExpanded={defaultExpanded}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel-content-${item.id}`}
        id={`panel-header-${item.id}`}
      >
        <Typography variant="h5" gutterBottom>
          {item.title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <List sx={{ width: "100%" }}>
          {item.list.map((item, index) => (
            <ListItem key={item.length + index}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  );
}
