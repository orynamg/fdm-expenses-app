import React, { useState } from "react";

const ExpenseMenu = () => {
    const [ontoggle, setToggle] = useState(false); //For more no reciept section
    const [categoryId, setCategoryId] = useState(-1);

    const inputFields: any = [
        {
            "Travel Company": "WizzAir",
            "Ticket Number": "A6",
            "Date of Departure": "dd/mm/yy",
            "Time of Departure": "hh:mm",
            "Reference Number": "XXXXXXXX",
        },
        {
            "Hotel Company": "Marriott",
            "Room Number": "11B",
            "Check-in date": "dd/mm/yy",
            "Check-out date": "dd/mm/yy",
            "Reference Number": "XXXXXXXX",
        },
    ];

    return (
        <>
            <div id="addX" className="hero min-h-screen bg-base-200 pb-10">
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="my-8 text-4xl font-bold">Add Expense</h1>
                        <div className="grid grid-cols-2 gap-10 ">
                            <div className="card w-96 bg-primary text-primary-content">
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-2xl">
                                        Small Expense
                                    </h2>
                                    <p>This is for expenses under £250</p>
                                    <form action="">
                                        <div className="form-control py-1">
                                            <label className="label">
                                                <span className="label-text mb-1">
                                                    Expense
                                                </span>
                                            </label>

                                            <label className="input-group">
                                                <span className="w-32 bg-[#0369a1]">
                                                    Amount
                                                </span>
                                                <input
                                                    type="text"
                                                    placeholder="10"
                                                    className="input input-bordered w-28 bg-neutral"></input>
                                                <select className="no-arrow w-20 bg-[#0369a1] text-center focus:outline-none">
                                                    <option
                                                        selected
                                                        className="">
                                                        GBP
                                                    </option>
                                                    <option>USD</option>
                                                    <option>EUR</option>
                                                    <option>JPY</option>
                                                    <option>AUD</option>
                                                    <option>CAD</option>
                                                    <option>CNY</option>
                                                    <option>INR</option>
                                                    <option>HKD</option>
                                                </select>
                                            </label>
                                        </div>

                                        <div className="form-control py-1">
                                            <div className="input-group  ">
                                                <select
                                                    id="typeSelect"
                                                    className="select select-bordered w-80 bg-neutral">
                                                    <option disabled selected>
                                                        Pick a category
                                                    </option>
                                                    <option>Travel</option>
                                                    <option>Hospitality</option>
                                                    <option>Other</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="form-control py-1">
                                            <label className="label">
                                                <span className="label-text">
                                                    Card Credentials
                                                </span>
                                            </label>

                                            <label className="input-group py-1">
                                                <span className="w-32 bg-[#0369a1]">
                                                    Name
                                                </span>
                                                <input
                                                    type="text"
                                                    placeholder="John Doe"
                                                    className="w-50  input input-bordered bg-neutral"></input>
                                            </label>

                                            <label className="input-group py-1">
                                                <span className="w-32 bg-[#0369a1]">
                                                    Sort Code
                                                </span>
                                                <input
                                                    type="text"
                                                    placeholder="XX-XX-XX"
                                                    className="w-50  input input-bordered bg-neutral"></input>
                                            </label>

                                            <label className="input-group py-1">
                                                <span className="w-32 bg-[#0369a1]">
                                                    Account No.
                                                </span>
                                                <input
                                                    type="text"
                                                    placeholder="36829639"
                                                    className="w-50  input input-bordered bg-neutral"></input>
                                            </label>
                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">
                                                    Add Reciept
                                                </span>
                                            </label>
                                            <button className="btn w-36 border-none bg-[#0369a1] text-center outline hover:opacity-40 ">
                                                Attach File
                                            </button>
                                        </div>
                                    </form>
                                    <div className="card-actions justify-center">
                                        <button
                                            type="submit"
                                            className=" btn mt-8 mb-2 mb-[-0.3rem]  w-80 rounded-2xl border-2 border-transparent bg-info font-semibold text-white  hover:opacity-40">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="card w-96 bg-[#4c1d95] text-primary-content">
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-2xl">
                                        Large Expense
                                    </h2>
                                    <p>This is for expenses over £250</p>
                                    <form action="">
                                        <div className="form-control py-1">
                                            <label className="label">
                                                <span className="label-text">
                                                    Expense
                                                </span>
                                            </label>

                                            <label className="input-group py-1">
                                                <span className="w-32 bg-secondary">
                                                    Amount
                                                </span>
                                                <input
                                                    type="text"
                                                    placeholder="10"
                                                    className="input input-bordered w-28 bg-neutral"></input>
                                                <select className="no-arrow w-20 bg-secondary text-center focus:outline-none">
                                                    <option
                                                        selected
                                                        className="">
                                                        GBP
                                                    </option>
                                                    <option>USD</option>
                                                    <option>EUR</option>
                                                    <option>JPY</option>
                                                    <option>AUD</option>
                                                    <option>CAD</option>
                                                    <option>CNY</option>
                                                    <option>INR</option>
                                                    <option>HKD</option>
                                                </select>
                                            </label>
                                        </div>

                                        <div className="form-control ">
                                            <div className="input-group  ">
                                                <select
                                                    value={categoryId}
                                                    defaultValue={categoryId}
                                                    onChange={(e) =>
                                                        setCategoryId(
                                                            parseInt(
                                                                e.target.value
                                                            )
                                                        )
                                                    }
                                                    className="select select-bordered w-80 bg-neutral">
                                                    <option disabled value={-1}>
                                                        Pick category
                                                    </option>
                                                    <option value={0}>
                                                        Travel
                                                    </option>
                                                    <option value={1}>
                                                        Hospitality
                                                    </option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="form-control py-1.5 ">
                                            <label className="label">
                                                <span className="label-text">
                                                    Card Credentials
                                                </span>
                                            </label>

                                            <label className="input-group py-1">
                                                <span className="w-32 bg-secondary">
                                                    Name
                                                </span>
                                                <input
                                                    type="text"
                                                    placeholder="John Doe"
                                                    className="w-50  input input-bordered bg-neutral"></input>
                                            </label>

                                            <label className="input-group py-1">
                                                <span className="w-32 bg-secondary ">
                                                    Sort Code
                                                </span>
                                                <input
                                                    type="text"
                                                    placeholder="XX-XX-XX"
                                                    className="w-50 input input-bordered bg-neutral"></input>
                                            </label>

                                            <label className="input-group py-1">
                                                <span className="w-32 bg-secondary">
                                                    Account No.
                                                </span>
                                                <input
                                                    type="text"
                                                    placeholder="36829639"
                                                    className="w-50 input input-bordered bg-neutral"></input>
                                            </label>
                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">
                                                    Add Reciept (Compulsory)
                                                </span>
                                            </label>
                                            <button className="btn w-36 border-none bg-secondary text-center outline hover:opacity-40 ">
                                                Attach File
                                            </button>
                                        </div>

                                        <p
                                            className={
                                                "more-info-link mt-2 cursor-pointer text-sm underline hover:opacity-90 " +
                                                (categoryId < 0
                                                    ? "opacity-60 hover:opacity-60"
                                                    : "")
                                            }
                                            onClick={() => {
                                                if (categoryId >= 0)
                                                    setToggle(!ontoggle);
                                            }}>
                                            Don't have a reciept? Click here.
                                        </p>
                                    </form>

                                    <div className="card-actions justify-center">
                                        <button
                                            type="submit"
                                            className="btn mt-1 mb-[-0.3rem] w-80  rounded-2xl border-2  border-transparent bg-indigo-600 font-semibold  text-white hover:opacity-40">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* First div is needed for flex to work */}
                            <div className="h-1 w-full "></div>
                            {ontoggle && (
                                <ul>
                                    <div className="relative z-50 mt-[-8rem] flex h-[27rem] w-full flex-col items-center bg-accent px-8 pt-3">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">
                                                    More Information
                                                </span>
                                            </label>

                                            {Object.keys(
                                                inputFields[categoryId]
                                            ).map((field: any) => (
                                                <label className="input-group py-1">
                                                    <span className="w-32 bg-secondary">
                                                        {field}
                                                    </span>
                                                    <input
                                                        type="text"
                                                        placeholder={
                                                            inputFields[
                                                                categoryId
                                                            ][field]
                                                        }
                                                        className="w-50  input input-bordered bg-neutral"></input>
                                                </label>
                                            ))}
                                        </div>

                                        <div className="card-actions justify-center">
                                            <button
                                                type="submit"
                                                className=" btn mt-8 mb-[-0.3rem] w-80  rounded-2xl border-2  border-transparent bg-indigo-600 font-semibold  text-white hover:opacity-40">
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ExpenseMenu;

function setToggle(arg0: boolean): void {
    throw new Error("Function not implemented.");
}
function render() {
    throw new Error("Function not implemented.");
}

function handleChange(e: React.ChangeEvent<HTMLSelectElement>): void {
    throw new Error("Function not implemented.");
}
