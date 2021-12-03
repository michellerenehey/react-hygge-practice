import '../styles/Preview.css';

export default function Preview({ light, activity }) {
  return (
    <div>
      <img className="lightImage" src={`${process.env.PUBLIC_URL}/images/${light}.jpg`} />
      <img className="activityImage" src={`${process.env.PUBLIC_URL}/images/${activity}.jpg`} />
    </div>
  );
}
