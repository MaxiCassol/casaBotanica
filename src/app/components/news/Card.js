import style from "./card.module.css";

const Card = ({ data }) => {
  return (
    <div className={style.container}>
      <div>
        <img src={data.image} />
      </div>
      <svg
        width="1"
        height="308"
        viewBox="0 0 1 308"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="0.5"
          y1="-2.18557e-08"
          x2="0.500013"
          y2="308"
          stroke="#D6D6D6"
        />
      </svg>
      <div>
        <h6>{data.title}</h6>
        <p>{data.description}</p>
        <ul>
          {data.list.map((data, index) => (
            <li key={index}>{data}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
