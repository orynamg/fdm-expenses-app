const TrackComponent = () => {

    const items = [
        {
            "date": "Jul 5, 2021",
            "expense": 245.00,
            "ccy": "£",
            "type": "Hospitality",
            "card": "Visa****"
        },
        {
            "date": "Apr 29, 2021",
            "expense": 34.00,
            "ccy": "£",
            "type": "Travel",
            "card": "Visa****"
        },
        {
            "date": "Apr 21, 2021",
            "expense": 575.00,
            "ccy": "£",
            "type": "Travel",
            "card": "MasterCard****"
        },
        {
            "date": "Mar 26, 2021",
            "expense": 54.57,
            "ccy": "£",
            "type": "Travel",
            "card": "Visa****"
        }
    ]

    return (
        <>
            <div className="flex justify-center flex-col items-center h-min-screen history">

                <h1 className="text-3xl font-bold mt-[6.5rem] mb-8">Pending Applications</h1>

                <div className="card w-4/5 h-7/6 bg-neutral shadow-xl mb-10 rounded-lg">
                    <div className=" p-0">
                        <div className="w-full h-8 dark-secondary mx-0 px-0 grid grid-cols-5 items-center justify-center text-center text-slate-300 text-sm">
                            <p className="">Date</p>
                            <p className="text-left">Expense</p>
                            <p className=" text-right">Type</p>
                            <p className="ml-20">Card</p>
                        </div>

                        {
                            items.map((item, index) => {
                                if (index % 2 == 0)
                                    return (
                                        <div className="w-full h-24 lighter mx-0 px-0 grid grid-cols-5 items-center justify-center text-center text-slate-300">
                                            <p className="text-slate-400">{item.date}</p>
                                            <p className="text-left">{item.ccy}{item.expense.toFixed(2)}</p>
                                            <p className="text-slate-400 text-right">{item.type}</p>
                                            <p className="ml-20">{item.card}</p>
                                            <p className="underline text-sm cursor-pointer hover:opacity-90">View More</p>
                                        </div>
                                    )
                                else 
                                    return (
                                        <div className="w-full h-24 darker mx-0 px-0 grid grid-cols-5 items-center justify-center text-center text-slate-300">
                                            <p className="text-slate-400">{item.date}</p>
                                            <p className="text-left">{item.ccy}{item.expense.toFixed(2)}</p>
                                            <p className="text-slate-400 text-right">{item.type}</p>
                                            <p className="ml-20">{item.card}</p>
                                            <p className="underline text-sm cursor-pointer hover:opacity-90">View More</p>
                                        </div>
                                    )
                            })
                        }

                        <div className="w-full h-10 dark-primary mx-0 px-0 grid grid-cols-1 items-center justify-center text-center text-slate-300 text-sm opacity-90">
                            <p className="underline hover:opacity-90 cursor-pointer">View More Entries</p>

                        </div>

                    </div>
                </div>


            </div>



        </>
    )
}

export default TrackComponent;