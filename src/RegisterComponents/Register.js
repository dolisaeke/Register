import "./Register.css";
import registerPix from "../assets/registerPix.png";

function Register() {
  const login='./login.js';
  return (
    <>
      <section className="subBody">
        <div className="leftElement">
          <img
            className="img-registerPix"
            src={registerPix}
            alt="registerPix"
          />
          <main className="texts">
            <a>Loren ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat</a>
          </main>
        </div>
          <div className="rightElement">
          <nav className="icon">Get Started</nav>
          <aside className="login">fill in your account</aside>
          <form className="form-handler">
          <label>Full Name</label><br/>
          <input className='filed-input' type='text' placeholder='Full Name'/><br/>
          
          <label>Guardian Name</label><br/>
          <input className='filed-input' type='text' placeholder='Guardian Name'/><br/>
          
          <label>Phone Number</label><br/>
          <input className='filed-input' type='text' placeholder='Phone Number'/><br/>
          
          <label>School Name</label><br/>
          <input className='filed-input' type='text' placeholder='School Name'/><br/>
          
          <label>Age</label><br/>
          <input className='filed-input' type='text' placeholder='Age'/><br/>
          
          <label>Class</label><br/>
          <input className='filed-input' type='text' placeholder='Class'/><br/>
          
          <label>Address</label><br/>
          <input className='filed-input' type='text' placeholder='Address'/><br/>
          
          <input className="-login" type='submit'/><br/>
          </form>
          <section className="create">Already have an account?</section>
          <a className="-create" href={login} >Sign In</a>
          </div>
      </section>
    </>
  );
}

export default Register;
