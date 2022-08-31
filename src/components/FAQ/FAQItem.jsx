import { ExpandMore } from "@mui/icons-material"
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"

const FAQItem = ({ data = [] }) => {
  return data.map((question) => (
    <Accordion key={question.id}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls={`panel-${question.id}-content`}
        id={`panel-${question.id}-header`}
        sx={{ bgcolor: "primary.main", boxShadow: 1 }}>
        <Typography fontSize={18}>{question.title}</Typography>
      </AccordionSummary>

      <AccordionDetails sx={{ bgcolor: "secondary.light" }}>
        <Typography>{question.answer}</Typography>
      </AccordionDetails>
    </Accordion>
  ))
}

export default FAQItem
