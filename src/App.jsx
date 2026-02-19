import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const password = watch("password");

  async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  }

  return (
    <div className="container">
      <form className="form-card" onSubmit={handleSubmit(onSubmit)}>
        <h2>Registration Form</h2>

        {/* First Name */}
        <div className="form-group">
          <label>First Name</label>
          <input
            className={errors.firstName ? "input-error" : ""}
            {...register("firstName", {
              required: "First name is required",
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "Only letters allowed",
              },
              minLength: { value: 3, message: "Minimum 3 characters" },
              maxLength: { value: 10, message: "Maximum 10 characters" },
            })}
          />
          {errors.firstName && (
            <p className="error-msg">{errors.firstName.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className={errors.email ? "input-error" : ""}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && (
            <p className="error-msg">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className={errors.password ? "input-error" : ""}
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Minimum 6 characters" },
            })}
          />
          {errors.password && (
            <p className="error-msg">{errors.password.message}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            className={errors.confirmPassword ? "input-error" : ""}
            {...register("confirmPassword", {
              required: "Confirm your password",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <p className="error-msg">{errors.confirmPassword.message}</p>
          )}
        </div>

        <button disabled={isSubmitting} className="submit-btn">
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default App;
