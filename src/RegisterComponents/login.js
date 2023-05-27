import "./login.css";
import project2pix from "../assets/project2pix.png";
// import Register from "./Register";

function Login() {
  const register='./Register';
  return (
    <>
      <section className="subBody">
        <div className="leftElement">
          <img
            className="img-project2pix"
            src={project2pix}
            alt="project2pix"
          />
          <main className="texts">
            <a>
              Loren ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat
            </a>
          </main>
        </div>

        <div className="rightElement">
          <nav className="icon">welcome back</nav>
          <aside className="login">login your account</aside>
          <form className="form-handler">
            <label className="label">Phone Number</label>
            <br />
            <input
              className="user-input"
              type="text"
              placeholder="Phone Number"
            ></input>
            <br />
            <label className="label">Password</label>
            <br />
            <input
              className="user-input"
              type="text"
              placeholder="Password"
            ></input>
            <br />
            <input className="-login" type='submit' value='Login' />
          </form>

          <section className="create">Don't have an account?</section>
          <a className="-creat" href={register} >Create Account</a>
        </div>
      </section>
    </>
  );
}

export default Login;
