'use client'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }: { placeholder: string }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term, children) => {
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

        // Update URL with new parameters
        replace(`${pathname}?${params.toString()}`);
    }, 300);

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        handleSearch(searchParams.get('query') || '', isChecked);
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
                        handleSearch(e.target.value, searchParams.get('children') === 'true');
                    }}
                    defaultValue={searchParams.get('query')?.toString()}
                />
                <FaMagnifyingGlass className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-green peer-focus:text-green" color="#36402D" />
            </div>
            <div className="flex align-middle mt-3 mb-0">
                <label htmlFor="goodForChildren" className="text-sm text-gray-600 cursor-pointer m-0">
                    Good for children?
                </label>
                <input
                    type="checkbox"
                    id="goodForChildren"
                    checked={searchParams.get('children') === 'true'}
                    onChange={handleCheckboxChange}
                    className="my-auto ml-1"
                />
            </div>
        </div>
    );
}