import style from "./heart.module.css";

const Heart = () => {
  return (
    <section className={style.container}>
      <div>
        <h3>WHAT IS OUR HEART</h3>
        <p>
          Zirio was conceived with a vision for the future, embracing
          collaboration and driving towards a more efficient industry. Our
          platform caters to diverse types of companies and needs, supported by
          a team of experts committed to a long-term vision and values that
          nurture our future leaders.
        </p>
        <button>LET&apos;S START</button>
      </div>
    </section>
  );
};

export default Heart;
