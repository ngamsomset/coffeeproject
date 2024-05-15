'use client'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { useState } from "react";

export default function Search({ placeholder }: { placeholder: string }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const [goodForChildren, setGoodForChildren] = useState(searchParams.get('children') === 'true');
    const [goodForGroups, setGoodForGroups] = useState(searchParams.get('groups') === 'true');

    const handleSearch = useDebouncedCallback((term: string, children: boolean, groups: boolean) => {
        const params = new URLSearchParams(searchParams);

        // Set query parameter
        params.set('page', '1');
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }

        // Set children parameter
        if (children) {
            params.set('children', 'true');
        } else {
            params.delete('children');
        }

        // Set groups parameter
        if (groups) {
            params.set('groups', 'true');
        } else {
            params.delete('groups');
        }

        // Update URL with new parameters
        replace(`${pathname}?${params.toString()}`);
    }, 300);

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        if (e.target.id === 'goodForChildren') {
            setGoodForChildren(isChecked);
            handleSearch(searchParams.get('query') || '', isChecked, goodForGroups);
        } else if (e.target.id === 'goodForGroups') {
            setGoodForGroups(isChecked);
            handleSearch(searchParams.get('query') || '', goodForChildren, isChecked);
        }
    };

    return (
        <div>
            <div className="relative flex flex-1 flex-shrink-0 w-[80vw] md:w-full mx-auto">
                <label htmlFor="search" className="sr-only">
                    Search
                </label>
                <input
                    className="peer block rounded-md border border-gray-200 py-[9px] pl-10 text-sm placeholder:text-gray-500 bg-[#f8f5f5] w-full"
                    placeholder={placeholder}
                    onChange={(e) => {
                        handleSearch(e.target.value, goodForChildren, goodForGroups);
                    }}
                    defaultValue={searchParams.get('query')?.toString()}
                />
                <FaMagnifyingGlass className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-green peer-focus:text-green" color="#36402D" />
            </div>
            <div className="flex gap-4 flex-1 flex-shrink-0 w-[80vw] md:w-full mx-auto">
            <div className="flex align-middle mt-3 mb-0">
                <label htmlFor="goodForChildren" className="text-sm text-gray-600 cursor-pointer m-0">
                    Good for children?
                </label>
                <input
                    type="checkbox"
                    id="goodForChildren"
                    checked={goodForChildren}
                    onChange={handleCheckboxChange}
                    className="my-auto ml-2"
                />
            </div>
            <div className="flex align-middle mt-3 mb-0">
                <label htmlFor="goodForGroups" className="text-sm text-gray-600 cursor-pointer m-0">
                    Good for groups?
                </label>
                <input
                    type="checkbox"
                    id="goodForGroups"
                    checked={goodForGroups}
                    onChange={handleCheckboxChange}
                    className="my-auto ml-2"
                />
            </div>
            </div>
        </div>
    );
}