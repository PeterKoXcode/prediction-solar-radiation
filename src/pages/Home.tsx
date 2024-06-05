import solarCover from "../../public/images/dataset-cover.jpg";

type Props = {};

export function Home({}: Props) {
  return (
    <>
      <div
        style={{
          fontFamily: "NOHEMI",
          width: "100%",
          height: "100vh",
          margin: 0,
          backgroundImage: `url(${solarCover})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          color: "black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
        className="text-center pt-5"
      >
        <h1
          style={{
            background: "#0F1923",
            padding: "20px",
            borderTop: "1px #08ADAD solid",
            borderBottom: "1px #08ADAD solid",
            color: "white",
            fontWeight: "bold"
          }}
        >
          SHORT-TERM PREDICTION OF SOLAR RADIATION FROM SKY PHOTOGRAPHS USING
          NEW TRENDS IN MACHINE LEARNING METHODS
        </h1>
      </div>
    </>
  );
}
