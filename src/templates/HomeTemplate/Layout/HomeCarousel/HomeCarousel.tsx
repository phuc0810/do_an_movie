import React, { useEffect } from "react";
import { Carousel } from "antd";
import { useSelector } from "react-redux";
import { RootState, useDispatchThunk } from "../../../../redux/configStore";
import { useDispatch } from "react-redux";
import { getCarouselAction } from "../../../../redux/actions/CarouselAction";

type Props = {};

export default function HomeCarousel(props: Props) {
  let { imgBanner } = useSelector((state: RootState) => state.CarouselReducer);
  let dispatchThunk = useDispatchThunk();

  console.log(imgBanner);

  useEffect(() => {
    dispatchThunk(getCarouselAction());
  }, []);
  
  const contentStyle: React.CSSProperties = {
    height: "600px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
    backgroundPosition: "center",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Carousel effect="fade">
      {imgBanner.map((banner, i) => {
        return (
          <div key={i}>
            <div
              style={{
                ...contentStyle,
                backgroundImage: `url(${banner.hinhAnh})`,
              }}
            >
              <img
                src={banner.hinhAnh}
                alt="..."
                className="w-full opacity-0"
              />
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}
