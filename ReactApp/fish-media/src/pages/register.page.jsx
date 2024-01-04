import './../Styles/Register.css'




function RegisterPage() {

    return(
        <div>
            <div className="registerPage">
                <h2 className="regHeader">Register for FishHead</h2>
                <h4>Sign up for the FisHead and connect with your fellow anglers!</h4>
                <div className="inputSections">
                    <label htmlFor="">Email:</label>
                    <input type="email" />
                    <label htmlFor="">Username:</label>
                    <input type="text" />
                    <label htmlFor="">Password:</label>
                    <input type="password" />
                    <label htmlFor="">Confirm Password:</label>
                    <input type="password" />
                </div>
                <button type="submit">Register</button>
            </div>
        </div>
    );
}

export default RegisterPage;