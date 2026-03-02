type message = {
  name: string;
  age: number;
};

function WelcomeMessage(props: message) {
  return (
    <h2>
      Welcome, {props.name}! You are {props.age} years old.
    </h2>
  );
}

export default WelcomeMessage;
