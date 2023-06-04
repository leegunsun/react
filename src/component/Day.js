import { useParams } from "react-router-dom";
import { setCookie, getCookie } from "../cookies/cookies";
import Word from "./Word";
import useFetch from "../hooks/useFetch";

export default function Day() {
  const { day } = useParams();
  const words = useFetch(`http://localhost:3001/words?day=${day}`);

  return (
    <>
      <h2>Day {day}</h2>
      {words.length === 0 && <span>Loading...</span>}
      {setCookie("test", "한번만 실행")}
      {console.log(getCookie("test"))}
      <table>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}
