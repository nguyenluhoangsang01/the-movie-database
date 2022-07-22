import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiSettings from "../../api";
import { BACKDROP_SIZE, IMAGE_BASE_URL } from "../../api/config";
import NoImage from "../../assets/images/no_image.jpg";
import CastList from "../../components/CastList";
import MovieList from "../../components/MovieList";
import VideoList from "../../components/VideoList";
import { Banner, Content, Info, Poster, Wrapper } from "./Detail.style";

const Detail = () => {
  const [item, setItem] = useState([]);
  const { category, id } = useParams();

  useEffect(() => {
    const getDetails = async () => {
      const res = await apiSettings.getDetails(category, id);

      setItem(res);
    };

    getDetails();
  }, [category, id]);

  return (
    <Wrapper>
      {item && (
        <>
          {item.backdrop_path || item.poster_path ? (
            <Banner
              imgUrl={`${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${
                item.backdrop_path || item.poster_path
              }`}
            />
          ) : (
            <Banner imgUrl={NoImage} />
          )}

          <Content>
            {item.poster_path || item.backdrop_path ? (
              <Poster
                imgUrl={`${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${
                  item.poster_path || item.backdrop_path
                }`}
              />
            ) : (
              <Poster imgUrl={NoImage} />
            )}

            <Info>
              <h1>{item.title || item.name}</h1>

              <div className="genres">
                {item?.genres?.map((i) => (
                  <p key={i.id}>{i.name}</p>
                ))}
              </div>

              <p>{item.overview}</p>

              <CastList />
            </Info>
          </Content>

          <VideoList />

          <MovieList
            title="similar movies"
            category={category}
            type="similar"
            link="similar"
            id={id}
          />
        </>
      )}
    </Wrapper>
  );
};

export default Detail;
