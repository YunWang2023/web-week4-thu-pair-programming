const Registration = () => {
  return (
    <section className="section">
      <div className="section-center">
        <h2>Registration</h2>

        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>

          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
            />
          </div>

          <div>
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" />
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
    </section>
  );
};

export default Registration;