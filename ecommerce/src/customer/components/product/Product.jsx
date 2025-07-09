"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import { mens_shirt } from "../../../data/mens/men_shirt";
import ProductCard from "./ProductCard";
import { filter, singleFilter } from "./FilterData";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const sortOptions = [
  { name: "Price: Low to High", value: "low", current: false },
  { name: "Price: High to Low", value: "high", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Product() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [sortOrder, setSortOrder] = useState(null);

  // Handle checkbox toggle
  const handleCheckboxChange = (sectionId, optionValue, checked) => {
    setSelectedFilters((prev) => {
      const current = new Set(prev[sectionId] || []);
      checked ? current.add(optionValue) : current.delete(optionValue);
      return { ...prev, [sectionId]: Array.from(current) };
    });
  };

  // Filter logic
  const filteredProducts = mens_shirt.filter((product) => {
    for (const key in selectedFilters) {
      if (
        selectedFilters[key].length &&
        !selectedFilters[key].includes(product[key])
      ) {
        return false;
      }
    }
    return true;
  });

  // Sort logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "low") return a.price - b.price;
    if (sortOrder === "high") return b.price - a.price;
    return 0;
  });

  return (
    <div className="bg-white">
      {/* Mobile filter dialog */}
      <Dialog
        open={mobileFiltersOpen}
        onClose={setMobileFiltersOpen}
        className="relative z-40 lg:hidden"
      >
        <DialogBackdrop className="fixed inset-0 bg-black/25" />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel className="ml-auto w-full max-w-xs bg-white p-4 shadow-xl overflow-y-auto">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <XMarkIcon className="w-6 h-6 text-gray-400" />
              </button>
            </div>

            {/* Filters */}
            {filter.map((section) => (
              <Disclosure key={section.id} as="div" className="py-4">
                {({ open }) => (
                  <>
                    <DisclosureButton className="flex w-full justify-between text-left text-sm font-medium text-gray-900">
                      {section.name}
                      {open ? (
                        <MinusIcon className="w-5 h-5" />
                      ) : (
                        <PlusIcon className="w-5 h-5" />
                      )}
                    </DisclosureButton>
                    <DisclosurePanel className="pt-2">
                      {section.options.map((option) => (
                        <div key={option.value} className="flex items-center">
                          <input
                            id={`${section.id}-${option.value}`}
                            name={section.id}
                            type="checkbox"
                            value={option.value}
                            onChange={(e) =>
                              handleCheckboxChange(
                                section.id,
                                option.value,
                                e.target.checked
                              )
                            }
                            className="mr-2"
                          />
                          <label
                            htmlFor={`${section.id}-${option.value}`}
                            className="text-gray-600"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            ))}
          </DialogPanel>
        </div>
      </Dialog>

      {/* Main content */}
      <main className="mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            New Arrivals
          </h1>

          <div className="flex items-center">
            <Menu as="div" className="relative inline-block text-left">
              <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                Sort
                <ChevronDownIcon className="ml-1 h-5 w-5 text-gray-400" />
              </MenuButton>
              <MenuItems className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                {sortOptions.map((option) => (
                  <MenuItem key={option.value}>
                    <button
                      onClick={() => setSortOrder(option.value)}
                      className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {option.name}
                    </button>
                  </MenuItem>
                ))}
              </MenuItems>
            </Menu>

            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="ml-4 text-gray-400 hover:text-gray-500 lg:hidden"
            >
              <FunnelIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Filters + Product grid */}
        <section className="pt-6 pb-24">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            {/* Desktop filters */}
            <form className="hidden lg:block border rounded-md p-5">
              {filter.map((section) => (
                <Disclosure
                  // defaultOpen={false}
                  as="div"
                  key={section.id}
                  className="border-b border-gray-200 py-6"
                >
                  {({ open }) => (
                    <>
                      <h3 className="-my-3 flow-root">
                        <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                          <span className="font-medium text-gray-900">
                            {section.name}
                          </span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <MinusIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel className="pt-6">
                        <div className="space-y-4">
                          {section.options.map((option, optionIdx) => (
                            <div
                              key={option.value}
                              className="flex items-center"
                            >
                              <input
                                id={`filter-${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                defaultValue={option.value}
                                type="checkbox"
                                defaultChecked={option.checked}
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                onChange={() =>
                                  handleFilter(option.value, section.id)
                                }
                              />
                              <label
                                htmlFor={`filter-${section.id}-${optionIdx}`}
                                className="ml-3 text-sm text-gray-600"
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
              {singleFilter.map((section) => (
                <Disclosure
                  // defaultOpen={true}
                  as="div"
                  key={section.id}
                  className="border-b border-gray-200 py-6"
                >
                  {({ open }) => (
                    <>
                      <h3 className="-my-3 flow-root">
                        <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                          <span className="font-medium text-gray-900">
                            {section.name}
                          </span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <MinusIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel className="pt-6">
                        <FormControl>
                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                          >
                            {section.options.map((option, optionIdx) => (
                              <FormControlLabel
                                value={option.value}
                                control={<Radio />}
                                label={option.label}
                              />
                            ))}
                          </RadioGroup>
                        </FormControl>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </form>

            {/* Product Grid */}
            <div className="lg:col-span-3">
              <div className="flex flex-wrap justify-center bg-white py-5">
                {sortedProducts.length > 0 ? (
                  sortedProducts.map((item) => (
                    <ProductCard key={item.id} product={item} />
                  ))
                ) : (
                  <p className="text-gray-500">No products found.</p>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
