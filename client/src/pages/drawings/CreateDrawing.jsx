import { get, useForm } from "react-hook-form";
import { createDrawing } from "../../api/drawings.api";
import { useNavigate } from "react-router-dom";

function CreateDrawing() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const res = getValues();
    console.log(res);
    createDrawing(data);
    // navigate("/drawings");
  });

  return (
    <section className="h-100 gradient-form" id="login-body">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="card-body p-md-5 mx-md-4">
                <form onSubmit={onSubmit} enctype="multipart/form-data">
                  <div className="row g-3">
                    <div class="col-md-6">
                      <label for="email" class="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        {...register("name", { required: true })}
                      />
                      {errors.name && <span>Este campo es requerido</span>}
                    </div>
                    <div class="col-md-6">
                      <label for="author" class="form-label">
                        Author
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="author"
                        {...register("author", { required: true })}
                      />
                      {errors.author && <span>Este campo es requerido</span>}
                    </div>
                    <div class="col-md-6">
                      <label for="image">Selecciona una imagen:</label>
                      <input
                        type="file"
                        class="form-control"
                        id="image"
                        {...register("image", { required: true })}
                      />
                      {errors.image && <span>Este campo es requerido</span>}
                    </div>
                  </div>

                  <div className="text-center pt-1 mb-5 pb-1">
                    <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3">
                      Create Drawing
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

export default CreateDrawing;
