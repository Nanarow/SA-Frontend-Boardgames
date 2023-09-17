import * as Toggle from '@radix-ui/react-toggle';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface IToggle extends Toggle.ToggleProps {
  className?: string
  label?: string;
}

const MyToggleButton = forwardRef<HTMLButtonElement, IToggle>(({
  className,
  label
}, ref) => {
  return (
    <Toggle.Root
      className={twMerge("rounded-full border-2 border-black flex items-center justify-center px-2 py-1 shadow-solid-m data-[state=on]:shadow-none data-[state=on]:translate-x-1 data-[state=on]:translate-y-1 hover:scale-110 transition-transform", className)}
      ref={ref}>
      <label >{label}</label>
    </Toggle.Root>
  )
})

export default MyToggleButton