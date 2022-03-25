const TrackComponent = () => {


    const items = [
        {
            "date": "Jul 5, 2021",
            "amount": 245.00,
            "ccy": "£",
            "type": "Hospitality",
            "card": "Visa****",
            "expense": "Small",
            "appeal": "None",
            "statement": "None",
            "lineManager": "John Hudson"
        },
        {
            "date": "Apr 29, 2021",
            "amount": 34.00,
            "ccy": "£",
            "type": "Travel",
            "card": "Visa****",
            "expense": "Small",
            "appeal": "None",
            "statement": "None",
            "lineManager": "John Hudson"
        },
        {
            "date": "Apr 21, 2021",
            "amount": 575.00,
            "ccy": "£",
            "type": "Travel",
            "card": "MasterCard****",
            "expense": "Large",
            "appeal": "None",
            "statement": "None",
            "lineManager": "John Hudson"
        },
        {
            "date": "Mar 26, 2021",
            "amount": 54.57,
            "ccy": "£",
            "type": "Travel",
            "card": "Visa****",
            "expense": "Small",
            "appeal": "None",
            "statement": "None",
            "lineManager": "John Hudson"
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
                            items.map((item, index) => 
                                (
                                    <div key={index} tabIndex={0} className="collapse collapse-arrow">
                                       
                                        
                                        <div className={"w-full h-24 mx-0 px-0 grid grid-cols-4 items-center justify-center text-center text-slate-300 collapse-title " +( (index%2===0) ? "lighter" : "darker") }>
                                            <p className="text-slate-400">{item.date}</p>
                                            <p className="text-left">{item.ccy}{item.amount.toFixed(2)}</p>
                                            <p className="text-slate-400 text-right">{item.type}</p>
                                            <p className="ml-30">{item.card}</p>
                                        </div>
                                        {/* <input type="checkbox" className="peer"></input>  */}

                                        <div className={"collapse-content w-full h-24 mx-0 px-0 grid grid-cols-5 items-center justify-center text-center text-slate-300 " + ( (index%2===0) ? "lighter" : "darker") } >
                                            <p className="text-slate-400">{item.expense} Expense</p>
                                            <p className="text-left">Appealed: {item.appeal}</p>
                                            <p className="text-slate-400">Appeal Statement: {item.statement}</p>
                                            <p className="">Line Manager:  {item.lineManager}</p>
                                            <p className="underline text-sm cursor-pointer hover:opacity-90">View Attachment</p>
                                        </div>

                                    </div>
                                )
                            )
                        }

                        <div className="w-full h-10 dark-primary mx-0 px-0 grid grid-cols-5 items-center justify-center text-center text-slate-300 text-sm opacity-90">
                            {/* Need empty <p></p> for grid to form correctly */}
                            <p></p> 
                            <p></p>
                            <p className="underline hover:opacity-90 cursor-pointer">View More Entries</p>
                            {/* Need empty <p></p> for grid to form correctly */}
                            <p></p>
                            <div className="btn-group">
                                <button className="btn">«</button>
                                <button className="btn">Page 1</button>
                                <button className="btn">»</button>
                            </div>
                        </div>

                    </div>
                </div>


            </div>



        </>
    )
}

export default TrackComponent;