import React, { useEffect, useState } from 'react';
import '../../index.css';
import { useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';
import ClubinfoBox from '../../components/ClubinfoBox/ClubinfoBox';
import ClubDetailTitle from '../../components/clubDetailTitle/clubDetailTitle';
import clubData from '../../constants/sejong_all_clubs.json';
import './ClubInfo.css';
import clubImage from '../../assets/images/sejong_view.png';

const ClubInfo = () => {
  const { id } = useParams(); // URL에서 id 받아오기
  const [club, setClub] = useState(null);

  useEffect(() => {
    const selectedClub = clubData.find(club => club.id === Number(id));
    setClub(selectedClub);
  }, [id]);

  if (!club) {
    return <div>동아리 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="ClubInfo_clubInfoContainer">

      <div className="ClubInfo_Section">
        <div className="ClubInfo_section1">
          <ClubDetailTitle
            club={club}
          />
        </div>

        <div className="ClubInfo_section2">
          <div className="ClubInfo_BoxSection">
            <ClubinfoBox club={club} />
          </div>
          <div className="ClubInfo_ButtonSection">
            <Button size="large" variant="secondary" onClick={() => alert("모집이 마감되었습니다.")}>모집마감</Button>
          </div>
        </div>

        <div className="ClubInfo_section3">
          <div className="ClubInfo_clubIntro">동아리 소개</div>
          <div className="ClubInfo_TextSection">
            <div className="ClubInfo_TextStart">동아리 소개 - 이미지</div>
            <div className="ClubInfo_clubImage">
              <img
                src={clubImage}
                alt="동아리사진"
            />
            </div>
            <ul className="ClubInfo_DescriptionList">
              {club.detail.description.map((paragraph, index) => {
              const isTitle = index % 2 === 0;
              const content = paragraph.split('\n');

              return (
                <li key={index} className={isTitle ? "ClubInfo_DescriptionTitle" : "ClubInfo_DescriptionParagraph"}>
                  {isTitle ? (
                  <span>{paragraph}</span>
                  ) : (
                  content.map((line, i) => (
                  <span key={i} style={{ display: 'block' }}>{line}</span>
                  ))
                  )}
                </li>
              );
            })}
            </ul>
            <div className="ClubInfo_Bottom"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ClubInfo };