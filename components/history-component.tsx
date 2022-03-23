const HistoryComponent = () => {
    return (
        <>
            <div className="flex justify-center flex-col items-center h-min-screen history">

                <h1 className="text-3xl font-bold mt-[6.5rem] mb-8">Expense History</h1>

                <div className="card w-4/5 h-7/6 bg-neutral shadow-xl mb-10 rounded-lg">
                    <div className=" p-0">
                        <div className="w-full h-8 dark-secondary mx-0 px-0 grid grid-cols-5 items-center justify-center text-center text-slate-300 text-sm">
                            <p className="">Date</p>
                            <p className="text-left">Expense</p>
                            <p className=" text-right">Status</p>
                            <p className="ml-20">Line Manager</p>
                        </div>
                        <div className="w-full h-20 darker mx-0 px-0 grid grid-cols-5 items-center justify-center text-center text-slate-300">
                            <p className="text-slate-400">Jul 5, 2021</p>
                            <p className="text-left">£245.00</p>
                            <p className="text-slate-400 text-right">Approved</p>
                            <p className="ml-20">John Hudson</p>
                            <p className="underline text-sm cursor-pointer hover:opacity-90">View More</p>
                        </div>
                        <div className="w-full h-20 lighter mx-0 px-0 grid grid-cols-5 items-center justify-center text-center text-slate-300">
                            <p className="text-slate-400">Apr 29, 2021</p>
                            <p className="text-left">£34.00</p>
                            <p className="text-slate-400 text-right">Approved</p>

                            <p className="ml-20">John Hudson</p>
                            <p className="underline text-sm cursor-pointer hover:opacity-90">View More</p>
                        </div>
                        <div className="w-full h-20 darker mx-0 px-0 grid grid-cols-5 items-center justify-center text-center text-slate-300">
                            <p className="text-slate-400">Apr 21, 2021</p>
                            <p className="text-left">£575.00</p>
                            <p className="text-slate-400 text-right">Approved</p>

                            <p className="ml-20">John Hudson</p>
                            <p className="underline text-sm cursor-pointer hover:opacity-90">View More</p>
                        </div>
                        <div className="w-full h-20 lighter mx-0 px-0 grid grid-cols-5 items-center justify-center text-center text-slate-300">
                            <p className="text-slate-400">Mar 26, 2021</p>
                            <p className="text-left">£54.57</p>
                            <p className="text-slate-400 text-right">Rejected</p>
                            <p className="ml-20">John Hudson</p>
                            <p className="underline text-sm cursor-pointer hover:opacity-90">View More</p>
                        </div>
                        <div className="w-full h-20 darker mx-0 px-0 grid grid-cols-5 items-center justify-center text-center text-slate-300">
                            <p className="text-slate-400">Mar 25, 2021</p>
                            <p className="text-left">£575.00</p>
                            <p className="text-slate-400 text-right">Approved</p>
                            <p className="ml-20">John Hudson</p>
                            <p className="underline text-sm cursor-pointer hover:opacity-90">View More</p>
                        </div>
                        <div className="w-full h-20 lighter mx-0 px-0 grid grid-cols-5 items-center justify-center text-center text-slate-300">
                            <p className="text-slate-400">Mar 19, 2021</p>
                            <p className="text-left">£45.00</p>
                            <p className="text-slate-400 text-right">Approved</p>

                            <p className="ml-20">John Hudson</p>
                            <p className="underline text-sm cursor-pointer hover:opacity-90">View More</p>
                        </div>
                        <div className="w-full h-20 darker mx-0 px-0 grid grid-cols-5 items-center justify-center text-center text-slate-300">
                            <p className="text-slate-400">Jan 8, 2021</p>
                            <p className="text-left">£36.00</p>
                            <p className="text-slate-400 text-right">Approved</p>

                            <p className="ml-20">John Hudson</p>
                            <p className="underline text-sm cursor-pointer hover:opacity-90">View More</p>
                        </div>
                        <div className="w-full h-10 dark-primary mx-0 px-0 grid grid-cols-1 items-center justify-center text-center text-slate-300 text-sm opacity-90">
                            <p className="underline hover:opacity-90 cursor-pointer">View More Entries</p>
                        
                        </div>

                    </div>
                </div>


            </div>



        </>
    )
}

export default HistoryComponent;