import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../api/users.api";
import { toast } from "react-hot-toast";

function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const username = getValues("email");
    const password = getValues("password");
    const res = await getUser();
    res.data.map((user) =>
      user.username == username && user.password == password
        ? toast.success("Log In Completed", {
            position: "buttom-center",
            style: {
              background: "#40e0d0",
              color: "white",
            },
          }) && navigate("/drawings")
        : console.log("No encontrado")
    );
  });

  return (
    <section className="h-100 gradient-form" id="login-body">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <img
                        id="image"
                        src="https://www.brainandlife.org/siteassets/current-issue/2023/februarymarch/mental-health-brain-main.jpg"
                        alt="logo"
                      />
                      <h4 className="mt-1 mb-5 pb-1">Ming Well</h4>
                    </div>

                    <form onSubmit={onSubmit}>
                      <p>Please login to your account</p>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example11">
                          Username
                        </label>
                        <input
                          id="email"
                          className="form-control"
                          {...register("email", { required: true })}
                        />
                        {errors.email && (
                          <div class="text-danger">This field is required</div>
                        )}
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example22">
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          className="form-control"
                          {...register("password", { required: true })}
                        />
                        {errors.password && <span>This field is required</span>}
                      </div>

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3">
                          Log in
                        </button>
                      </div>

                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Don't have an account?</p>
                        <button
                          type="button"
                          className="btn btn-outline-danger"
                        >
                          <Link to="/sign_up" className="link-dark">
                            Create new
                          </Link>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">Piensa en ti</h4>
                    <p className="small mb-0">
                      I think about you in my mind, and come back to my hands{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
