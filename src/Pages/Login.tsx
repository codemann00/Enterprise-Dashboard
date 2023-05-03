import React, { useState } from "react";
import "./Login.css";

interface Props {
  onSubmit: (username: string, password: string) => void;
}

interface Field {
  user: string;
  password: string;
}



// const [user, setUser] =useState();
// const [pass, setPass] =useState();


const Login = () => {

  const [fields, setFields] = useState <Field>({
    user: "",
    password: "",
  });

console.log(fields);



  const handleChange =( e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.id, 'WHy not working')
    setFields((prevState: any) => ({...prevState, [e.target.name]: e.target.value}))
  }

  
  return (
    <section className="h-100 gradient-form" style={{}}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <img
                        src={process.env.PUBLIC_URL + "/image/ZamtelLogo.png"}
                        style={{ width: "100px" }}
                        alt="Zamtel-logo"
                      />
                      <h4 className="mt-1 mb-5 pb-1">Enterprise Dashboard</h4>
                    </div>

                    <form>
                      <p>Please login to your account</p>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="user"
                          name="user"
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Username or Gn"
                        />
                        <label className="form-label" htmlFor="user">
                          Username
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="password"
                          name="password"
                          onChange={handleChange}
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="password">
                          Password
                        </label>
                      </div>

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          className="btn btn-block fa-lg p-3 mb-3"
                          type="button"
                        >
                          Login
                        </button>
                        <a className="text-muted" href="#!">
                          Forgot password?
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">Zamtel Enterprise Dashboard</h4>
                    <p className="small mb-0"> xxxxxx</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
