import { get, useForm } from "react-hook-form";
import { createUser } from "../../api/users.api";
import { useNavigate } from "react-router-dom";
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
    createUser(data);
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
                  <h5>Información Personal</h5>
                  <div className="row g-3">
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
                      {errors.email && <span>Este campo es requerido</span>}
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
                      {errors.password && <span>Este campo es requerido</span>}
                    </div>
                  </div>

                  <div className="row g-3">
                    <div class="col-md-4">
                      <label for="first_name" class="form-label">
                        Nombre(s)
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="first_name"
                        {...register("first_name", { required: true })}
                      />
                      {errors.first_name && (
                        <span>Este campo es requerido</span>
                      )}
                    </div>
                    <div class="col-md-4">
                      <label for="last_name" class="form-label">
                        Apellido Paterno
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="last_name"
                        {...register("last_name", { required: true })}
                      />
                      {errors.last_name && <span>Este campo es requerido</span>}
                    </div>
                    <div class="col-md-4">
                      <label for="second_last_name" class="form-label">
                        Apellido Materno
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="second_last_name"
                        {...register("second_last_name", { required: true })}
                      />
                      {errors.second_last_name && (
                        <span>Este campo es requerido</span>
                      )}
                    </div>
                  </div>

                  <div className="row g-3">
                    <div class="col-md-4">
                      <label for="gender" class="form-label">
                        Genero
                      </label>
                      <select
                        name="gender"
                        id="gender"
                        className="form-select"
                        {...register("gender", { required: true })}
                      >
                        <option value="">-- Seleccionar</option>
                        <option value="Hombre">Hombre</option>
                        <option value="Mujer">Mujer</option>
                      </select>
                      {errors.gender && <span>Este campo es requerido</span>}
                    </div>
                    <div class="col-md-4">
                      <label for="dob" class="form-label">
                        Fecha de Nacimiento
                      </label>
                      <input
                        type="date"
                        class="form-control"
                        id="dob"
                        {...register("dob", { required: true })}
                      />
                      {errors.dob && <span>Este campo es requerido</span>}
                    </div>
                    <div class="col-md-4">
                      <label for="cell_phone" class="form-label">
                        Número de teléfono
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="cell_phone"
                        {...register("cell_phone", { required: true })}
                      />
                      {errors.cell_phone && (
                        <span>Este campo es requerido</span>
                      )}
                    </div>
                  </div>

                  <h5>Información Familiar</h5>
                  <div className="row g-3">
                    <div class="col-md-4">
                      <label for="tutor_name" class="form-label">
                        Nombre(s)
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="tutor_name"
                        {...register("tutor_name", { required: true })}
                      />
                      {errors.tutor_name && (
                        <span>Este campo es requerido</span>
                      )}
                    </div>
                    <div class="col-md-4">
                      <label for="tutor_last_name" class="form-label">
                        Apellido Paterno
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="tutor_last_name"
                        {...register("tutor_last_name", { required: true })}
                      />
                      {errors.tutor_last_name && (
                        <span>Este campo es requerido</span>
                      )}
                    </div>
                    <div class="col-md-4">
                      <label for="tutor_second_last_name" class="form-label">
                        Apellido Materno
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
                        <span>Este campo es requerido</span>
                      )}
                    </div>
                  </div>
                  <div className="row g-3">
                    <div class="col-md-4">
                      <label for="tutor_gender" class="form-label">
                        Genero
                      </label>
                      <select
                        name="tutor_gender"
                        id="tutor_gender"
                        className="form-select"
                        {...register("tutor_gender", { required: true })}
                      >
                        <option value="">-- Seleccionar</option>
                        <option value="Hombre">Hombre</option>
                        <option value="Mujer">Mujer</option>
                      </select>
                      {errors.tutor_gender && (
                        <span>Este campo es requerido</span>
                      )}
                    </div>
                    <div class="col-md-4">
                      <label for="tutor_dob" class="form-label">
                        Fecha de Nacimiento
                      </label>
                      <input
                        type="date"
                        class="form-control"
                        id="tutor_dob"
                        {...register("tutor_dob", { required: true })}
                      />
                      {errors.tutor_dob && <span>Este campo es requerido</span>}
                    </div>
                    <div class="col-md-4">
                      <label for="tutor_cell_phone" class="form-label">
                        Número de teléfono
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="tutor_cell_phone"
                        {...register("tutor_cell_phone", { required: true })}
                      />
                      {errors.tutor_cell_phone && (
                        <span>Este campo es requerido</span>
                      )}
                    </div>
                  </div>
                  <div className="row g-3">
                    <div class="col-md-6">
                      <label for="tutor_address" class="form-label">
                        Dirección
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="tutor_address"
                        {...register("tutor_address", { required: true })}
                      />
                      {errors.tutor_address && (
                        <span>Este campo es requerido</span>
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
