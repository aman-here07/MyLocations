import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/Meetup/NewMeetupForm";

function NewMeetup() {
  const history = useHistory();
  function addMeetupHandler(meetupData) {
    fetch("https://reactpro-9e068-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-type": "application/json",
      },
    }).then(() => {
      history.replace("/");
    });
  }
  {
  }
  return (
    <section>
      <h1>Add a Meetup!</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
export default NewMeetup;
