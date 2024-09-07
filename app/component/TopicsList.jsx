import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

//fetch data
const getTopics = async () => {
  const apiUrl = process.env.API_URL;
  try {
    const response = await fetch(`${apiUrl}/api/topics`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch topics");
    }
    return await response.json();
  } catch (error) {
    console.log("Error loading topics", error);
  }
};
export default async function TopicsList() {
  const { topics } = await getTopics();

  return (
    <>
      {topics?.map((t) => (
        <div
          key={t._id}
          className="flex w-1/2 justify-between mx-auto shadow-md p-2 rounded-md my-7"
        >
          <div className="w-9/12">
            <h2 className="text-2xl font-bold">{t.title}</h2>
            <div>{t.description}</div>
          </div>
          <div className="flex justify-between items-center w-16 me-6">
            <RemoveBtn id={t._id} title={t.title}/>
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
