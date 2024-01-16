import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useQuery, gql } from "@apollo/client";

const GET_DATA = gql`
  query {
    footers {
      devName
      githubLink
      twitterLink
      linkedinLink
      instaLink
    }
  }
`;

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  const { loading, error, data } = useQuery(GET_DATA);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <Container fluid className="footer">
      {data.footers.map((el, ind) => (
        <Row key={ind}>
          <Col md="4" className="footer-copywright">
            <h3>
              Designed and Developed by{" "}
              <strong style={{ color: "#a15cc4" }}>
                {data ? el.devName : "SK"}
              </strong>
            </h3>
          </Col>
          <Col md="4" className="footer-copywright">
            <h3>Copyright © {year} SK</h3>
          </Col>
          <Col md="4" className="footer-body">
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href={el.githubLink}
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={el.twitterLink}
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={el.linkedinLink}
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={el.instaLink}
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default Footer;
