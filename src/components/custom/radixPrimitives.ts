import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
const RadioGroup = RadioGroupPrimitive.Root;
const RadioGroupItem = RadioGroupPrimitive.Item;
const RadioGroupIndicator = RadioGroupPrimitive.Indicator;
interface IRadioGroup extends RadioGroupPrimitive.RadioGroupProps {
  items: string[];
  values: any[];
  className?: string;
}

const NavigationMenu = NavigationMenuPrimitive.Root;
const NavigationMenuItem = NavigationMenuPrimitive.Item;
const NavigationMenuIndicator = NavigationMenuPrimitive.Indicator;
const NavigationMenuList = NavigationMenuPrimitive.List;
const NavigationMenuTrigger = NavigationMenuPrimitive.Trigger;
const NavigationMenuLink = NavigationMenuPrimitive.Link;
const NavigationMenuContent = NavigationMenuPrimitive.Content;

interface INavigationMenu extends NavigationMenuPrimitive.NavigationMenuProps {
  items: string[];
}

export {
  RadioGroup,
  RadioGroupItem,
  RadioGroupIndicator,
  NavigationMenu,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
};
export type { IRadioGroup, INavigationMenu };
