export default function SignInModal() {
  return (
    type FormValues = {
        mail: string
        password: string
    }
    <div>
      Email : <input placeholder="mail" />
      <br></br>
      Password : <input placeholder="password" />
    </div>
  );
}
