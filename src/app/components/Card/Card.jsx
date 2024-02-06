export default function Card({ heading, text }) {
  return (
    <div className="flex flex-col p-8 md:flex-row">
      <div className="w-full bg-gray h-full min-w-[12rem] min-h-[12rem]"></div>
      <div>
        <h3>{heading}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
