import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export default function Example1() {
	return (
		<div>
			Example1
			<Accordion type='single' collapsible className='w-[500]'>
				<AccordionItem value='item-1'>
					<AccordionTrigger>Is it accessible?</AccordionTrigger>
					<AccordionContent>
						Yes. It adheres to the WAI-ARIA design pattern.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
}
