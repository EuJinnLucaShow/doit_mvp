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
    list1: string;
    list2: string;
    list3: string;
    list4: string;
    list5: string;
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
          <ListItem>
            <ListItemText primary={item.list1} />
          </ListItem>
          <ListItem>
            <ListItemText primary={item.list2} />
          </ListItem>
          <ListItem>
            <ListItemText primary={item.list3} />
          </ListItem>
          <ListItem>
            <ListItemText primary={item.list4} />
          </ListItem>
          <ListItem>
            <ListItemText primary={item.list5} />
          </ListItem>
        </List>
      </AccordionDetails>
    </Accordion>
  );
}
