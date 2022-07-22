import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiSettings from "../../api";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../api/config";
import NoImage from "../../assets/images/no_image.jpg";
import { CastItem, Content, Wrapper } from "./CastList.style";

const CastList = () => {
  const [casts, setCasts] = useState([]);
  const { category, id } = useParams();

  useEffect(() => {
    const getCredits = async () => {
      const res = await apiSettings.getCredits(category, id);

      setCasts(res.cast);
    };

    getCredits();
  }, [category, id]);

  return (
    <Wrapper>
      <h2>Casts</h2>

      <Content>
        {casts.slice(0, 8).map((item) => (
          <CastItem key={item.id}>
            {item.profile_path ? (
              <img
                src={`${IMAGE_BASE_URL}/${POSTER_SIZE}/${item.profile_path}`}
                alt={item.name}
              />
            ) : (
              <img src={NoImage} alt="NoImage" />
            )}

            <p>{item.name || item.original_name}</p>
          </CastItem>
        ))}
      </Content>
    </Wrapper>
  );
};

export default CastList;
