const HistoryComponent = () => {

    const items = [
        {
            "date": "Jul 5, 2021",
            "amount": 245.00,
            "ccy": "£",
            "status": "Approved",
            "rejectionStatement": "None",
            "lineManager": "John Hudson",
            "type": "Hospitality",
            "card": "Visa****",
            "expense": "Small",
            "appeal": "None",
            "statement": "None"

        },
        {
            "date": "Apr 29, 2021",
            "amount": 34.00,
            "ccy": "£",
            "status": "Approved",
            "rejectionStatement": "None",
            "lineManager": "John Hudson",
            "type": "Hospitality",
            "card": "Visa****",
            "expense": "Small",
            "appeal": "None",
            "statement": "None"

        },
        {
            "date": "Apr 21, 2021",
            "amount": 575.00,
            "ccy": "£",
            "status": "Approved",
            "rejectionStatement": "None",
            "lineManager": "John Hudson",
            "type": "Hospitality",
            "card": "Visa****",
            "expense": "Small",
            "appeal": "None",
            "statement": "None"

        },
        {
            "date": "Mar 26, 2021",
            "amount": 54.57,
            "ccy": "£",
            "status": "Approved",
            "rejectionStatement": "None",
            "lineManager": "John Hudson",
            "type": "Hospitality",
            "card": "Visa****",
            "expense": "Small",
            "appeal": "None",
            "statement": "None"
        },
        {
            "date": "Mar 26, 2021",
            "amount": 54.57,
            "ccy": "£",
            "status": "Approved",
            "rejectionStatement": "None",
            "lineManager": "John Hudson",
            "type": "Hospitality",
            "card": "Visa****",
            "expense": "Small",
            "appeal": "None",
            "statement": "None"
        },
        {
            "date": "Mar 26, 2021",
            "amount": 54.57,
            "ccy": "£",
            "status": "Rejected",
            "rejectionStatement": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque maiores quisquam voluptas velit accusamus saepe nostrum vitae optio similique aut!",
            "lineManager": "John Hudson",
            "type": "Hospitality",
            "card": "Visa****",
            "expense": "Small",
            "appeal": "Apr 2, 2021",
            "statement": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolor voluptatum quibusdam! Quia, magni optio?"
        },
        {
            "date": "Mar 26, 2021",
            "amount": 54.57,
            "ccy": "£",
            "status": "Rejected",
            "rejectionStatement": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque maiores quisquam voluptas velit accusamus saepe nostrum vitae optio similique aut!",
            "lineManager": "John Hudson",
            "type": "Hospitality",
            "card": "Mastercard****",
            "expense": "Small",
            "appeal": "None",
            "statement": "None"
        }

    ]

    return (
        <>
            <div className="flex justify-center flex-col items-center h-min-screen history">

                <h1 className="text-3xl font-bold mt-[6.5rem] mb-8">Expense History</h1>

                <div className="card w-4/5 h-7/6 bg-neutral shadow-xl mb-10 rounded-lg">
                    <div className=" p-0">
                        <div className="w-full h-8 dark-secondary mx-0 px-8 grid grid-cols-7 items-center justify-center text-center text-slate-300 text-sm">
                            <p className="">Date</p>
                            <p className="">Expense</p>
                            <p>Appeals</p>
                            <p>Rejection Statements</p>
                            <p className="">Status</p>
                            <p className="">Line Manager</p>
                            <p className="">Card</p>
                        </div>

                        {
                            items.map((item, index) => {
                                let appealLabel = item.statement.substring(0, Math.min(100, item.statement.length));
                                if (appealLabel.length >= 100) {
                                    appealLabel += "...";
                                }

                                return (
                                    <div key={index} tabIndex={0} className="collapse collapse-plus">


                                        <div className={"w-full h-20 mx-0 grid grid-cols-7 items-center justify-center text-center text-slate-300 collapse-title px-8 " + ((index % 2 === 0) ? "lighter" : "darker")}>
                                            <p className="text-slate-400">{item.date}</p>
                                            <p className="">{item.ccy}{item.amount.toFixed(2)}</p>

                                            {(item.status === "Rejected" && item.appeal === "None")
                                                ? (<a href={"#modal-add-appeal-" + index} className="text-sm btn btn-outline btn-error btn-neutral btn-sm w-32 normal-case">Add Appeal</a>)
                                                : (<p></p>)
                                            }

                                            {(item.status === "Rejected")
                                                ? (<a href={"#modal-rejection-stmt-" + index} className="text-sm btn btn-outline btn-error btn-neutral btn-sm normal-case">Rejection Statement</a>)
                                                : (<p></p>)
                                            }

                                            <p className="text-slate-400">{item.status}</p>
                                            <p className="">{item.lineManager}</p>
                                            <p className="">{item.card}</p>

                                        </div>
                                        {/* <input type="checkbox" className="peer"></input> */}

                                        <div className={"collapse-content h-24 mx-0 grid grid-cols-7 items-center justify-center text-center text-slate-300 px-8 " + ((index % 2 === 0) ? "lighter" : "darker")} >
                                            <p className="text-slate-400">{item.expense} Expense</p>
                                            <a href={"#modal-appeal-stmt-" + index} className="col-span-3 text-slate-400 text-left hover:underline hover:cursor-pointer pl-14  pr-8">Appeal Statement: {appealLabel}</a>
                                            <p className="">Appeal: {item.appeal}</p>
                                            <p className="">Type: {item.type}</p>
                                            <p className="underline text-sm cursor-pointer hover:opacity-90">View Attachment</p>
                                        </div>

                                        <div className="modal" id={"modal-appeal-stmt-" + index}>
                                            <div className="modal-box">
                                                <h3 className="font-bold text-lg">Appeal Statement</h3>
                                                <p className="py-4">{item.statement}</p>
                                                <div className="modal-action">
                                                    <a href="#" className="btn">Close</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="modal" id={"modal-rejection-stmt-" + index}>
                                            <div className="modal-box">
                                                <h3 className="font-bold text-lg">Rejection Statement</h3>
                                                <p className="py-4">{item.rejectionStatement}</p>
                                                <div className="modal-action">
                                                    <a href="#" className="btn">Close</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="modal " id={"modal-add-appeal-" + index}>
                                            <div className="modal-box p-10">
                                                <h3 className="font-bold text-2xl text-center mb-6 p-1">Create Appeal</h3>
                                                <p className="ml-2 mb-3">For Expense Claim:</p>
                                                <div className="bg-base-200 p-5 rounded-xl">
                                                    <p className="my-1" >{item.expense} Expense</p>
                                                    <p className="my-1" >{item.ccy}{item.amount}</p>
                                                    <p className="my-1" >{item.type}</p>
                                                    <p className="my-1" >{item.date}</p>
                                                    <p className="my-1" >{item.card}</p>
                                                </div>
                                                <p className="ml-2 my-3">Add Appeal Statement:</p>
                                                <textarea className="textarea textarea-bordered w-full my-3 h-44 border-slate-400 border-2" placeholder="Text here..."></textarea>
                                                <div className="modal-action flex flex-rows items-center justofy-center">
                                                    <a href="#" className="btn">Close</a>
                                                    <a href="#" type="submit" className="btn btn-primary">Submit</a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                )
                            }
                            )
                        }
                        <div className="w-full h-10 dark-primary mx-0 px-0 flex justify-end text-center text-slate-300 text-sm opacity-90">
                            <div className="btn-group px-4">
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

export default HistoryComponent;
