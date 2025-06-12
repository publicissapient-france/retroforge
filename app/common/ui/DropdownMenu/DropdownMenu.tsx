import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { Fragment } from 'react/jsx-runtime'

export type DropdownMenuOption = {
  label: string
  value: string
}

export interface DropdownMenuProps {
  trigger: React.ReactNode
  options: DropdownMenuOption[]
  selectedValue: string
  onChange: (value: string) => void
  anchor?: 'left' | 'right'
  ariaLabel?: string
}

export const DropdownMenu = ({ trigger, options, selectedValue, onChange, anchor = 'right', ariaLabel = 'open menu' }: DropdownMenuProps) => {
  const anchorClasses = anchor === 'left' ? 'left-0 origin-top-left' : 'right-0 origin-top-right'

  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton className="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer" aria-label={ariaLabel}>{trigger}</MenuButton>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className={`${anchorClasses} absolute mt-2 w-40 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-2`}>
          <div className="py-1">
            {options.map((option) => (
              <MenuItem key={option.value}>
                {({ active }: { active: boolean }) => (
                  <button
                    onClick={() => onChange(option.value)}
                    className={`${active ? 'bg-gray-100' : ''
                      } ${selectedValue === option.value ? 'text-blue-600' : 'text-gray-700'
                      } block w-full px-4 py-2 text-left text-sm cursor-pointer`}
                  >
                    {option.label}
                  </button>
                )}
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  )
}