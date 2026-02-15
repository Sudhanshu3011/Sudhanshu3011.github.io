import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  const handleClick = () => {
    if (link) {
      window.open(link, "_blank"); // opens in new tab
      // use window.location.href = link;  // if you want same tab
    }
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div
        className="proj-imgbx"
        onClick={handleClick}
        style={{ cursor: link ? "pointer" : "default" }}
      >
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
