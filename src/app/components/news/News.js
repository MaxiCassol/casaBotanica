import Card from "./Card";
import style from "./new.module.css";
import React from "react";

const News = () => {
  const news = [
    {
      title: "How technology can help redraw the supply chain map",
      description:
        "We are dedicated in creating added value for our customers by implementing modern technology in our work. ",
      list: [
        "Urgent transport solutions",
        "Reliable & experienced staffs",
        "Urgent transport solutions",
        "Reliable & experienced staffs",
      ],
      image: "/news/containers.jpg",
      date: new Date("2024-03-01"),
    },
    {
      title: "Five things you should have ready for your broker",
      description:
        "We are dedicated in creating added value for our customers by implementing modern technology in our work. ",
      list: [
        "Urgent transport solutions",
        "Reliable & experienced staffs",
        "Urgent transport solutions",
        "Reliable & experienced staffs",
      ],
      image: "/news/containers.jpg",
      date: new Date("2024-05-01"),
    },
    {
      title: "Inland freight a worthy solution for your business",
      description:
        "We are dedicated in creating added value for our customers by implementing modern technology in our work. ",
      list: [
        "Urgent transport solutions",
        "Reliable & experienced staffs",
        "Urgent transport solutions",
        "Reliable & experienced staffs",
      ],
      image: "/news/containers.jpg",
      date: new Date("2024-04-07"),
    },
    {
      title: "Inland freight a worthy solution for your business",
      description:
        "We are dedicated in creating added value for our customers by implementing modern technology in our work. ",
      list: [
        "Urgent transport solutions",
        "Reliable & experienced staffs",
        "Urgent transport solutions",
        "Reliable & experienced staffs",
      ],
      image: "/news/containers.jpg",
      date: new Date("2024-02-01"),
    },
  ];

  const sortedNews = news.sort((a, b) => b.date - a.date);
  const lastestNews = sortedNews.slice(0, 3);

  return (
    <section className={style.container}>
      <span>Our Blog</span>
      <h3>OUR LATEST NEWS</h3>
      <svg
        width="943"
        height="1"
        viewBox="0 0 943 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line y1="0.500061" x2="943" y2="0.500061" stroke="#D6D6D6" />
      </svg>
      {lastestNews.map((data, index) => (
        <React.Fragment key={index}>
          <Card data={data} />
          <svg
            width="943"
            height="1"
            viewBox="0 0 943 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="0.500061" x2="943" y2="0.500061" stroke="#D6D6D6" />
          </svg>
        </React.Fragment>
      ))}
      <button>More Blog</button>
    </section>
  );
};

export default News;
