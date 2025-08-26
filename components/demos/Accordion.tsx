import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/Accordion";

export const AccordionDemo = () => {
  return (
    <>
      <Accordion defaultValue={"1"} type="single" collapsible>
        <AccordionItem value="1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design patterns
          </AccordionContent>
        </AccordionItem>
         <AccordionItem value="2">
          <AccordionTrigger>Is it unstyled?</AccordionTrigger>
          <AccordionContent>
            Yes. It's unstyled by default, giving you freedom over the look and feel.
          </AccordionContent>
        </AccordionItem>
         <AccordionItem value="3">
          <AccordionTrigger>Can it be animated?</AccordionTrigger>
          <AccordionContent>
            Yes! You can animate the Accordion with CSS or JavaScript
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export const AccordionDemoString = `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/Accordion";

export const AccordionDemo = () => {
  return (
    <>
      <Accordion defaultValue={"1"} type="single" collapsible>
        <AccordionItem value="1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design patterns
          </AccordionContent>
        </AccordionItem>
         <AccordionItem value="2">
          <AccordionTrigger>Is it unstyled?</AccordionTrigger>
          <AccordionContent>
            Yes. It's unstyled by default, giving you freedom over the look and feel.
          </AccordionContent>
        </AccordionItem>
         <AccordionItem value="3">
          <AccordionTrigger>Can it be animated?</AccordionTrigger>
          <AccordionContent>
            Yes! You can animate the Accordion with CSS or JavaScript
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};
`
export default {}