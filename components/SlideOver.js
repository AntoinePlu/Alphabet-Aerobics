import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

import Button from "./Button";
import HeroIcon from "./HeroIcon";

export default function SlideOver({ children, isOpen, setIsOpen, title }) {
  return (
    <Transition.Root as={Fragment} show={isOpen}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden"
        onClose={setIsOpen}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Dialog.Overlay className="absolute inset-0 bg-black/80" />

          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-8">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="pointer-events-auto w-screen max-w-md">
                <div className="flex h-full flex-col divide-y divide-white/4 bg-gray-dark shadow-sm">
                  <div className="flex min-h-0 flex-1 flex-col space-y-8 overflow-y-auto py-6">
                    <div className="sm:px-6 px-4">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium">
                          {title}
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <Button
                            type="button"
                            onClick={() => setIsOpen(false)}
                          >
                            <HeroIcon.Outline.X
                              aria-hidden="true"
                              className="h-6 w-6"
                            />
                            <span className="sr-only">Close panel</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="sm:px-6 flex-1 px-4">
                      {children({ isOpen, setIsOpen })}
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
