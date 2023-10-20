import { useForm } from "react-hook-form";
import { createUser } from "../../api/users.api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function SignUp() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const email = getValues("email");
    data.username = email;
    await createUser(data);
    toast.success("User Registration Completed", {
      position: "top-center",
      style: {
        background: "#40e0d0",
        color: "white",
      },
    });
    navigate("/");
  });

  return (
    <section className="h-100 gradient-form" id="login-body">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="card-body p-md-5 mx-md-4">
                <div className="text-center">
                  <h4 className="mt-1 mb-5 pb-1">Create your account</h4>
                </div>

                <form onSubmit={onSubmit}>
                  <h5 className="mb-4">Personal Information</h5>
                  <div className="row g-3 mb-4">
                    <div class="col-md-6">
                      <label for="email" class="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        {...register("email", { required: true })}
                      />
                      {errors.email && (
                        <div class="text-danger">This field is required</div>
                      )}
                    </div>
                    <div class="col-md-6">
                      <label for="password" class="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                        {...register("password", { required: true })}
                      />
                      {errors.password && (
                        <div class="text-danger">This field is required</div>
                      )}
                    </div>
                  </div>

                  <div className="row g-3 mb-4">
                    <div class="col-md-4">
                      <label for="first_name" class="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="first_name"
                        {...register("first_name", { required: true })}
                      />
                      {errors.first_name && (
                        <div class="text-danger">This field is required</div>
                      )}
                    </div>
                    <div class="col-md-4">
                      <label for="last_name" class="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="last_name"
                        {...register("last_name", { required: true })}
                      />
                      {errors.last_name && (
                        <div class="text-danger">This field is required</div>
                      )}
                    </div>
                    <div class="col-md-4">
                      <label for="second_last_name" class="form-label">
                        Second Last Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="second_last_name"
                        {...register("second_last_name", { required: true })}
                      />
                      {errors.second_last_name && (
                        <div class="text-danger">This field is required</div>
                      )}
                    </div>
                  </div>

                  <div className="row g-3 mb-4">
                    <div class="col-md-4">
                      <label for="gender" class="form-label">
                        Genre
                      </label>
                      <select
                        name="gender"
                        id="gender"
                        className="form-select"
                        {...register("gender", { required: true })}
                      >
                        <option value="">-- Select</option>
                        <option value="Hombre">Man</option>
                        <option value="Mujer">Woman</option>
                      </select>
                      {errors.gender && (
                        <div class="text-danger">This field is required</div>
                      )}
                    </div>
                    <div class="col-md-4">
                      <label for="dob" class="form-label">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        class="form-control"
                        id="dob"
                        {...register("dob", { required: true })}
                      />
                      {errors.dob && (
                        <div class="text-danger">This field is required</div>
                      )}
                    </div>
                    <div class="col-md-4">
                      <label for="cell_phone" class="form-label">
                        Cellphone
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="cell_phone"
                        {...register("cell_phone", { required: true })}
                      />
                      {errors.cell_phone && (
                        <div class="text-danger">This field is required</div>
                      )}
                    </div>
                  </div>

                  <h5 className="mb-4">Family Information</h5>
                  <div className="row g-3 mb-4">
                    <div class="col-md-4">
                      <label for="tutor_name" class="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="tutor_name"
                        {...register("tutor_name", { required: true })}
                      />
                      {errors.tutor_name && (
                        <div class="text-danger">This field is required</div>
                      )}
                    </div>
                    <div class="col-md-4">
                      <label for="tutor_last_name" class="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="tutor_last_name"
                        {...register("tutor_last_name", { required: true })}
                      />
                      {errors.tutor_last_name && (
                        <div class="text-danger">This field is required</div>
                      )}
                    </div>
                    <div class="col-md-4">
                      <label for="tutor_second_last_name" class="form-label">
                        Second Last Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="tutor_second_last_name"
                        {...register("tutor_second_last_name", {
                          required: true,
                        })}
                      />
                      {errors.tutor_second_last_name && (
                        <div class="text-danger">This field is required</div>
                      )}
                    </div>
                  </div>
                  <div className="row g-3 mb-4">
                    <div class="col-md-4">
                      <label for="tutor_gender" class="form-label">
                        Genre
                      </label>
                      <select
                        name="tutor_gender"
                        id="tutor_gender"
                        className="form-select"
                        {...register("tutor_gender", { required: true })}
                      >
                        <option value="">-- Select</option>
                        <option value="Hombre">Man</option>
                        <option value="Mujer">Woman</option>
                      </select>
                      {errors.tutor_gender && (
                        <div class="text-danger">This field is required</div>
                      )}
                    </div>
                    <div class="col-md-4">
                      <label for="tutor_dob" class="form-label">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        class="form-control"
                        id="tutor_dob"
                        {...register("tutor_dob", { required: true })}
                      />
                      {errors.tutor_dob && (
                        <div class="text-danger">This field is required</div>
                      )}
                    </div>
                    <div class="col-md-4">
                      <label for="tutor_cell_phone" class="form-label">
                        Cellphone
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="tutor_cell_phone"
                        {...register("tutor_cell_phone", { required: true })}
                      />
                      {errors.tutor_cell_phone && (
                        <div class="text-danger">This field is required</div>
                      )}
                    </div>
                  </div>
                  <div className="row g-3 mb-4">
                    <div class="col-md-12">
                      <label for="tutor_address" class="form-label">
                        Address
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="tutor_address"
                        {...register("tutor_address", { required: true })}
                      />
                      {errors.tutor_address && (
                        <div class="text-danger">This field is required</div>
                      )}
                    </div>
                  </div>

                  <div className="text-center pt-1 mb-5 pb-1">
                    <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3">
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
