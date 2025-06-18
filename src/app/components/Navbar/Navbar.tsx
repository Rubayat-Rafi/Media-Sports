import Link from "next/link";

const Navbar = () => {


    return (
        <nav className='py-4 flex-container'>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                    {/* logo */}
                    <h1>Media <span className=''>Sports</span></h1>
                    <div className="flex items-center gap-4 py-2 px-4 rounded-md bg-[#1a1a1a] ">
                        {/* Clock Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>

                        {/* Timezone Dropdown */}
                        <select
                            // value={timezone}
                            // onChange={handleTimezoneChange}
                            className="text-sm focus:outline-none p-1 focus:ring-2 focus:ring-[#FF5722] focus:rounded-md overflow-y-scroll no-scroll "
                        >
                            <option value="GMT-11">GMT -11</option>
                            <option value="GMT-10">GGMT -10</option>
                            <option value="GMT-9">GMT -9</option>
                            <option value="GMT-8">GMT -8</option>
                            <option value="GMT-7">GMT -7</option>
                            <option value="GMT-6">GMT -6</option>
                            <option value="GMT-5">GMT -5</option>
                            <option value="GMT-4">GMT -4</option>
                            <option value="GMT-3">GMT -3</option>
                            <option value="GMT-2">GMT -2</option>
                            <option value="GMT+0">GMT +0</option>
                            <option value="GMT+1">GMT +1</option>
                            <option value="GMT+2">GMT +2</option>
                            <option value="GMT+3">GMT +3</option>
                            <option value="GMT+4">GMT +4</option>
                            <option value="GMT+5">GMT +5</option>
                            <option value="GMT+6">GMT +6</option>
                            <option value="GMT+7">GMT +7</option>
                            <option value="GMT+8">GMT +8</option>
                            <option value="GMT+9">GMT +9</option>
                            <option value="GMT+10">GMT +10</option>
                            <option value="GMT+11">GMT +11</option>
                            <option value="GMT+12">GMT +12</option>
                        </select>

                        {/* Local Time Display */}
                        <div className="text-sm text-gray-300 ml-auto">
                            11:58
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <Link href={'/'}>
                        Why Mdeia Sports?
                    </Link>
                    <Link href={'/'}>
                        FAQ?
                    </Link>
                    <button className='primary-btn'>
                        My Account
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;