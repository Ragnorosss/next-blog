export default function FormSignUp() {
  return (
    <form>
      <label htmlFor="">Email</label>
      <input type="email" placeholder="Email" />
      <label htmlFor="">Password</label>
      <input type="password" placeholder="Password" />
      <label htmlFor="">Repeat Password</label>
      <input type="password" placeholder="Repeat Password" />
      <button type="submit">Submit</button>
    </form>
  );
}
