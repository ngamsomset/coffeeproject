import React from 'react';
import { CiCoffeeBean } from 'react-icons/ci';
import { MdOutlineCoffeeMaker } from 'react-icons/md';

// Define a type for preferences
interface Preferences {
    origin: 0 | 1 | 2 | 3 | 4 | 5;
    roast: 0 | 1 | 2 | 3;
    acidity: 0 | 1 | 2 | 3 | 4 | 6;
    body: 0 | 1 | 2 | 3;
    brewingmethod: 0 | 1 | 2 | 3 | 4;
}

// Define a mapping of numeric values to region names
const regionMap: Record<Preferences['origin'], string> = {
    1: 'South America',
    2: 'Central America',
    3: 'Middle East',
    4: 'Africa',
    5: 'Southeast Asia',
    0: 'Other'
};

// Define a mapping of numeric values to roast types
const roastMap: Record<Preferences['roast'], string> = {
    1: 'Light',
    2: 'Medium',
    3: 'Dark',
    0: 'Other'
};

// Define a mapping of numeric values to acidity levels
const acidityMap: Record<Preferences['acidity'], string> = {
    1: '4.85',
    2: '4.90',
    3: '4.95',
    4: '5.05',
    6: '5.10',
    0: 'Other'
};

// Define a mapping of numeric values to body types
const bodyMap: Record<Preferences['body'], string> = {
    1: 'Thin',
    2: 'Medium',
    3: 'Full',
    0: 'Other'
};

// Define a mapping of numeric values to brewing methods
const brewingMethodMap: Record<Preferences['brewingmethod'], string> = {
    1: 'Boiling',
    2: 'Steeping',
    3: 'Dripping',
    4: 'Pressure',
    0: 'Other'
};

const PreferenceTile = ({ preferences }: { preferences: any }) => {
    // Check if preferences is null or undefined
    if (!preferences) {
        return (
            <div className='bg-[#E6CCB2] p-8 rounded-xl border shadow-xl h-full'>
                <p className='text-lg'>Questionnaire not submitted</p>
                <br></br>
                <a href="/questionaire">
                    <span className='bg-[#36402D] rounded-full px-5 py-2 text-white'>Add submission</span>
                </a>
            </div>
        );
    }

    // Function to get region name based on numeric value
    const getRegionName = (value: Preferences['origin']): string => {
        return regionMap[value] || 'Unknown';
    };

    // Function to get roast type based on numeric value
    const getRoastType = (value: Preferences['roast']): string => {
        return roastMap[value] || 'Unknown';
    };

    // Function to get acidity level based on numeric value
    const getAcidityLevel = (value: Preferences['acidity']): string => {
        return acidityMap[value] || 'Unknown';
    };

    // Function to get body type based on numeric value
    const getBodyType = (value: Preferences['body']): string => {
        return bodyMap[value] || 'Unknown';
    };

    // Function to get brewing method based on numeric value
    const getBrewingMethod = (value: Preferences['brewingmethod']): string => {
        return brewingMethodMap[value] || 'Unknown';
    };

    // If preferences is not null or undefined, render the preference details
    return (
        <div className='bg-[#E6CCB2] p-8 rounded-xl border shadow-xl h-full'>
            <h2 className='text-2xl'>Your preferences</h2>
            <div className='text-[#582F0E] mt-4 flex'>
                <CiCoffeeBean size={30} />
                <div className='ml-4'>
                    <p>Origin: {getRegionName(preferences.origin)}</p>
                    <p>Roast: {getRoastType(preferences.roast)}</p>
                    <p>Acidity: {getAcidityLevel(preferences.acidity)}</p>
                    <p>Body: {getBodyType(preferences.body)}</p>
                </div>
            </div>
            <div className='text-[#582F0E] mt-4 flex'>
                <MdOutlineCoffeeMaker size={30} />
                <div className='ml-4'>
                    <p>Brewing method: {getBrewingMethod(preferences.brewingmethod)}</p>
                </div>
            </div>
        </div>
    );
};

export default PreferenceTile;
