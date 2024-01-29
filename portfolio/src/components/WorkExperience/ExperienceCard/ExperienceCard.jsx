import React from "react";
import "./ExperienceCard.css";

const ExperienceCard = ({ details }) => {
  // Функция для открытия ссылки
  const openLink = () => {
    if (details.date) {
      window.open(details.date, "_blank");
    }
  };

  return (
    <div className="work-experience-card">
      <h6>{details.title}</h6>
      {/* Добавление обработчика onClick к div */}
      <div className="work-duration" onClick={openLink}>
        Go to source code
      </div>
      <ul>
        {details.responsibilities.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
