import { useState } from 'react';

interface SearchButtonProps {
    btnClick: boolean;
    setBtnClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchButton: React.FC<SearchButtonProps> = ({ btnClick, setBtnClick }) => {

    return (
        <>
            {btnClick && (
                <section className="p-3 mt-4">
                    <div className="container mx-auto">
                        <div className="">
                            <div className='flex justify-end lg:mr-8'>
                                <input type="search" placeholder="Search..." className="px-10 py-3 border border-[#5DEBD7] outline-none" />
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default SearchButton;
