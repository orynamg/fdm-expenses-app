
const ExpenseMenu = () => {
    return (
        <>
            <div className="hero min-h-screen bg-base-200 mb-10">
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="text-4xl font-bold my-8">Add Expense</h1>
                        <div className="grid grid-cols-2 gap-10 ">
                            <div className="card w-96 bg-primary text-primary-content">
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-2xl">Small Expense</h2>
                                    <p>This is for expenses under £250</p>
                                    <form action="">

                                        <div className="form-control py-1">
                                            <label className="label">
                                                <span className="label-text mb-1">Expense</span>
                                            </label>
                                            
                                            <label className="input-group">
                                                <span className="w-32 bg-[#0369a1]">Amount</span>
                                                <input type="text" placeholder="10" className="input input-bordered w-28 bg-neutral"></input>
                                                <span className="w-20 bg-[#0369a1]">GBP</span>
                                            </label>
                                        </div>

                                        <div className="form-control py-1">
                                            <div className="input-group  ">
                                                <select className="select select-bordered w-80 bg-neutral">
                                                    <option disabled selected>Pick category</option>
                                                    <option>Travel</option>
                                                    <option>Hospitality</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="form-control py-1">
                                            <label className="label">
                                                <span className="label-text">Card Credentials</span>
                                            </label>

                                            <label className="input-group py-1">
                                                <span className="w-32 bg-[#0369a1]" >Name</span>
                                                <input type="text" placeholder="John Doe" className="input  input-bordered w-50 bg-neutral"></input>
                                            </label>

                                            <label className="input-group py-1">
                                                <span className="w-32 bg-[#0369a1]">Sort Code</span>
                                                <input type="text" placeholder="XX-XX-XX" className="input  input-bordered w-50 bg-neutral"></input>
                                            </label>

                                            <label className="input-group py-1">
                                                <span className="w-32 bg-[#0369a1]">Account No.</span>
                                                <input type="text" placeholder="36829639" className="input  input-bordered w-50 bg-neutral"></input>
                                            </label>
                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Add Reciept</span>
                                            </label>
                                            <button className="btn bg-[#0369a1] border-none text-center w-36 outline hover:opacity-40 ">Attach File</button>
                                        </div>


                                    </form>
                                    <div className="card-actions justify-center">
                                        <button type="submit" className=" btn w-80 bg-info mt-4  border-transparent border-2 rounded-2xl text-white font-semibold mb-2 hover:opacity-40  mb-[-0.3rem]">Submit</button>
                                    </div>
                                </div>
                            </div>

                            <div className="card w-96 bg-[#4c1d95] text-primary-content">
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-2xl">Large Expense</h2>
                                    <p>This is for expenses over £250</p>
                                    <form action="">

                                        <div className="form-control py-1">
                                            <label className="label">
                                                <span className="label-text">Expense</span>
                                            </label>
                                            
                                            <label className="input-group py-1">
                                                <span className="w-32 bg-secondary">Amount</span>
                                                <input type="text" placeholder="10" className="input bg-neutral input-bordered w-28"></input>
                                                <span className="w-20 bg-secondary">GBP</span>
                                            </label>
                                        </div>

                                        <div className="form-control ">
                                            <div className="input-group  ">
                                                <select className="select select-bordered w-80 bg-neutral">
                                                    <option disabled selected>Pick category</option>
                                                    <option>Travel</option>
                                                    <option>Hospitality</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="form-control py-1.5 ">
                                            <label className="label">
                                                <span className="label-text">Card Credentials</span>
                                            </label>

                                            <label className="input-group py-1">
                                                <span className="w-32 bg-secondary">Name</span>
                                                <input type="text" placeholder="John Doe" className="input  input-bordered w-50 bg-neutral"></input>
                                            </label>

                                            <label className="input-group py-1">
                                                <span className="w-32 bg-secondary ">Sort Code</span>
                                                <input type="text" placeholder="XX-XX-XX" className="input input-bordered w-50 bg-neutral"></input>
                                            </label>

                                            <label className="input-group py-1">
                                                <span className="w-32 bg-secondary">Account No.</span>
                                                <input type="text" placeholder="36829639" className="input input-bordered w-50 bg-neutral"></input>
                                            </label>
                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Add Reciept (Compulsory)</span>
                                            </label>
                                            <button className="btn bg-secondary border-none outline text-center w-36 hover:opacity-40 ">Attach File</button>
                                        </div>


                                    </form>
                                    <div className="card-actions justify-center">
                                    <button type="submit" className=" btn w-80 bg-indigo-600 mt-4  border-transparent border-2  rounded-2xl text-white font-semibold  hover:opacity-40 mb-[-0.3rem]">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    );
}

export default ExpenseMenu;