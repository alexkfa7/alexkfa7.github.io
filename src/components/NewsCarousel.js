import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import styled from "styled-components";

// Slick carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Styled Components
const CarouselWrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: auto;
`;

const CardContainer = styled.div`
  position: relative;
  z-index: ${(props) => (props.highlighted ? 2 : 1)};
  transform: scale(${(props) => (props.highlighted ? 1.1 : 0.9)});
  transition: transform 0.3s ease-in-out, z-index 0.3s ease-in-out;
  opacity: ${(props) => (props.highlighted ? 1 : 0.7)};
`;

const Card = styled.div`
  background-color: rgba(20, 20, 20, 0.9);
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.6);
  padding: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 400px;
  height: ${(props) => (props.expanded ? "auto" : "120px")}; /* Default compact height */
  overflow: hidden;
  position: relative;
  transition: height 0.3s ease;
`;

const Title = styled.a`
  font-size: 1.2rem;
  font-weight: bold;
  color: #39FF14;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Meta = styled.div`
  font-size: 0.9rem;
  color: gray;
  margin-bottom: 8px;
`;

const Description = styled.p`
  font-size: 0.95rem;
  color: white;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => (props.expanded ? "none" : "2")};
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  margin-bottom: 5px;
`;

const LinkToArticle = styled.div`
  font-size: 0.85rem;
  color: #aaaaaa;
  margin-top: 10px;
  margin-bottom: 40px; /* Ensures space above Read more/less */
  line-break: anywhere;

  a {
    color: #39FF14;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ReadMoreText = styled.span`
  color: #39FF14;
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;
  position: absolute;
  bottom: 10px; /* Keeps it at the bottom */
  right: 10px; /* Aligns it to the right */
  padding-left: 10px; /* Ensures separation from content */
  background: rgba(20, 20, 20, 0.9); /* Ensures clear visibility */
  z-index: 10;

  &:hover {
    text-decoration: underline;
  }
`;

const HiddenCard = styled.div`
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 400px;
  height: auto;
  pointer-events: none;
  z-index: -1;
`;

const NewsCarousel = () => {
  const [newsData, setNewsData] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [needsReadMore, setNeedsReadMore] = useState([]); // Tracks which cards need "Read more"
  const cardRefs = useRef([]);
  const hiddenCardRef = useRef(null);

  // Fetch data from the JSON file
  useEffect(() => {
    fetch("/news.json")
      .then((response) => response.json())
      .then((data) => setNewsData(data))
      .catch((error) => console.error("Error loading news:", error));
  }, []);

  // Check if "Read more" is needed
  useEffect(() => {
    if (newsData.length > 0) {
      const updatedNeedsReadMore = newsData.map((news, index) => {
        const hiddenCard = hiddenCardRef.current;
        if (!hiddenCard) return false;

        // Temporarily set the card content in the hidden element
        hiddenCard.innerHTML = `
          <h3>${news.title}</h3>
          <div>${news.newsAgency} • ${news.date}</div>
          <p>${news.description}</p>
          <div>Link to article: ${news.url}</div>
        `;

        // Check if the hidden card's height exceeds the default height
        return hiddenCard.scrollHeight > 120;
      });

      setNeedsReadMore(updatedNeedsReadMore);
    }
  }, [newsData]);

  const toggleDescription = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  const handleCardClick = (index) => {
    if (highlightedIndex !== index) {
      setHighlightedIndex(index);
      setExpandedIndex(null); // Reset expanded state when switching cards
    }
  };

  // Carousel settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 4500, // 4.5 seconds per cycle
    centerMode: true,
    centerPadding: "0px",
    arrows: false,
    beforeChange: (_, next) => setHighlightedIndex(next),
    afterChange: (current) => setHighlightedIndex(current),
  };

  return (
    <CarouselWrapper>
      {/* Hidden card for height calculation */}
      <HiddenCard ref={hiddenCardRef}></HiddenCard>

      <Slider {...settings}>
        {newsData.map((news, index) => (
          <CardContainer
            key={index}
            highlighted={highlightedIndex === index}
            onClick={() => handleCardClick(index)}
          >
            <Card
              ref={(el) => (cardRefs.current[index] = el)}
              expanded={expandedIndex === index}
            >
              <div>
                <Title href={news.url} target="_blank" rel="noopener noreferrer">
                  {news.title}
                </Title>
                <Meta>
                  {news.newsAgency} • {news.date}
                </Meta>
                <Description expanded={expandedIndex === index}>
                  {news.description}
                </Description>
                {expandedIndex === index && (
                  <LinkToArticle>
                    Link to article:{" "}
                    <a href={news.url} target="_blank" rel="noopener noreferrer">
                      {news.url}
                    </a>
                  </LinkToArticle>
                )}
              </div>
              {needsReadMore[index] && (
                <ReadMoreText
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card click from triggering
                    toggleDescription(index);
                  }}
                  style={{paddingBottom:'5px'}}
                >
                  {expandedIndex === index ? "..Read less" : "Read more.."}
                </ReadMoreText>
              )}
            </Card>
          </CardContainer>
        ))}
      </Slider>
    </CarouselWrapper>
  );
};

export default NewsCarousel;
