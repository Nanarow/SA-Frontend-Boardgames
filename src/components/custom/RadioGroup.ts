import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
const RadioGroup = RadioGroupPrimitive.Root;
const RadioGroupItem = RadioGroupPrimitive.Item;
const RadioGroupIndicator = RadioGroupPrimitive.Indicator;
interface IRadioGroup extends RadioGroupPrimitive.RadioGroupProps {
  items: string[];
}
export { RadioGroup, RadioGroupItem, RadioGroupIndicator };
export type { IRadioGroup };
