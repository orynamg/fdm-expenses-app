const TrackComponent = () => {
    const items = [
        {
            date: "Jul 5, 2021",
            amount: 245.0,
            ccy: "£",
            type: "Hospitality",
            card: "Visa****",
            expense: "Small",
            appeal: "None",
            statement: "None",
            lineManager: "John Hudson",
        },
        {
            date: "Apr 29, 2021",
            amount: 34.0,
            ccy: "£",
            type: "Travel",
            card: "Visa****",
            expense: "Small",
            appeal: "May 16, 2021",
            statement:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias suscipit at nostrum cupiditate perspiciatis eveniet eos! Asperiores aperiam ipsum recusandae assumenda, tempore at commodi magni.",
            lineManager: "John Hudson",
        },
        {
            date: "Apr 21, 2021",
            amount: 575.0,
            ccy: "£",
            type: "Travel",
            card: "MasterCard****",
            expense: "Large",
            appeal: "None",
            statement: "None",
            lineManager: "John Hudson",
        },
        {
            date: "Mar 26, 2021",
            amount: 54.57,
            ccy: "£",
            type: "Travel",
            card: "Visa****",
            expense: "Small",
            appeal: "None",
            statement: "None",
            lineManager: "John Hudson",
        },
    ];

    return (
        <>
            <div className="h-min-screen history flex flex-col items-center justify-center">
                <h1 className="mt-[6.5rem] mb-8 text-3xl font-bold">
                    Pending Applications
                </h1>

                <div className="h-7/6 card mb-10 w-4/5 rounded-lg bg-neutral shadow-xl">
                    <div className=" p-0">
                        <div className="dark-secondary mx-0 grid h-8 w-full grid-cols-4 items-center justify-center px-0 text-center text-sm text-slate-300">
                            <p className="">Date</p>
                            <p className="text-left">Expense</p>
                            <p className=" text-right">Type</p>
                            <p className="">Card</p>
                        </div>

                        {items.map((item, index) => {
                            let appealLabel = item.statement.substring(
                                0,
                                Math.min(20, item.statement.length)
                            );
                            if (appealLabel.length >= 20) {
                                appealLabel += "...";
                            }
                            return (
                                <div
                                    key={index}
                                    tabIndex={0}
                                    className="collapse-arrow collapse">
                                    <input
                                        type="checkbox"
                                        className="peer"></input>

                                    <div
                                        className={
                                            "collapse-title mx-0 grid h-20 w-full grid-cols-4 items-center justify-center px-0 text-center text-slate-300 " +
                                            (index % 2 === 0
                                                ? "lighter"
                                                : "darker")
                                        }>
                                        <p className="text-slate-400">
                                            {item.date}
                                        </p>
                                        <p className="text-left">
                                            {item.ccy}
                                            {item.amount.toFixed(2)}
                                        </p>
                                        <p className="text-right text-slate-400">
                                            {item.type}
                                        </p>
                                        <p className="ml-30">{item.card}</p>
                                    </div>

                                    <div
                                        className={
                                            "collapse-content mx-0 grid h-24 w-full grid-cols-5 items-center justify-center px-0 text-center text-slate-300 " +
                                            (index % 2 === 0
                                                ? "lighter"
                                                : "darker")
                                        }>
                                        <p className="pl-20 text-slate-400">
                                            {item.expense} Expense
                                        </p>
                                        <p className="ml-[-1rem]">
                                            Appeal: {item.appeal}
                                        </p>
                                        <a
                                            href={"#modal-" + index}
                                            className="text-left text-slate-400 hover:underline">
                                            Appeal Statement: {appealLabel}
                                        </a>
                                        <p className="">
                                            Line Manager: {item.lineManager}
                                        </p>
                                        <p className="ml-[-4rem] cursor-pointer text-sm underline hover:opacity-90">
                                            View Attachment
                                        </p>
                                    </div>

                                    <div
                                        className="modal"
                                        id={"modal-" + index}>
                                        <div className="modal-box">
                                            <h3 className="text-lg font-bold">
                                                Appeal Statement
                                            </h3>
                                            <p className="py-4">
                                                {item.statement}
                                            </p>
                                            <div className="modal-action">
                                                <a href="#" className="btn">
                                                    Close
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                        <div className="dark-primary mx-0 flex h-10 w-full justify-end px-0 text-center text-sm text-slate-300 opacity-90">
                            <div className="btn-group px-20">
                                <button className="btn">«</button>
                                <button className="btn">Page 1</button>
                                <button className="btn">»</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TrackComponent;
