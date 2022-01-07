import Dashboard from "../src/components/dashboard/Dashboard";
const user_obj = {
  name: "Emanuael Lundy",
  email: "abcefg@gmail.com",
  location: "Roorkee",
  score: "8",
  phone: "123-3243-324",
  date: "2-3-42",
};
export default function dashboard(props) {
  return (
    <>
      <Dashboard {...user_obj} />
    </>
  );
}
